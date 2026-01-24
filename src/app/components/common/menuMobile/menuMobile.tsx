"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "@/app/hooks/data-navbar";
import { NavItem, MenuMobileProps } from "@/app/types/common.types";
import { MenuMobileData } from "@/app/hooks/data-mobile-menu";
import { cn } from "@/lib/utils";

/**
 * A full-screen mobile menu with multi-level navigation.
 * It handles its own state for sub-menus and closing animations.
 *
 * @param {MenuMobileProps} props The props for the component.
 * @returns {React.ReactElement} The rendered mobile menu.
 */
const MenuMobile: React.FC<MenuMobileProps> = ({
	id,
	isMobile,
	setIsMobile,
	ariaLabelGoBack = MenuMobileData.ariaLabelGoBack,
	ariaLabelCloseMenu = MenuMobileData.ariaLabelCloseMenu,
	ariaLabelSubmenu = MenuMobileData.ariaLabelSubmenu,
	defaultMenuTitle = MenuMobileData.defaultMenuTitle,
}) => {
	const [delayedIsMobile, setDelayedIsMobile] = useState(false);
	const menuContentRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();
	const isHomePage = pathname === "/";

	/**
	 * Effect to add a delay to the `isMobile` state.
	 * This allows for CSS exit animations to complete before the component is unmounted or hidden.
	 */
	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (isMobile) {
			setDelayedIsMobile(true);
		} else {
			timer = setTimeout(() => {
				setDelayedIsMobile(false);
			}, 300); // Delay should match the CSS transition duration
		}
		return () => clearTimeout(timer);
	}, [isMobile]);

	const handleClose = useCallback(() => {
		setIsMobile(false);
	}, [setIsMobile]);

	/**
	 * Effect to handle clicks outside the menu content to close it.
	 * This improves user experience by allowing an intuitive closing action.
	 */
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuContentRef.current &&
				!menuContentRef.current.contains(event.target as Node)
			) {
				handleClose();
			}
		};

		if (isMobile) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMobile, handleClose]);


	const menuTitle = defaultMenuTitle;

	// Early return if not in mobile view to avoid rendering an empty component
	if (!isMobile && !delayedIsMobile) {
		return null;
	}

	return (
		<>
			<nav
				id={id}
				className={cn("menu-mobile", { "menu-mobile__open": isMobile })}
				role="navigation"
				aria-label="Mobile menu"
			>
				<div
					ref={menuContentRef}
					className={cn("menu-mobile__content", {
						"menu-mobile__content__open": delayedIsMobile,
					})}
				>
					<div className="menu-mobile__header">
						<div className="menu-mobile__title">
							<span>{menuTitle}</span>
						</div>
						<div
							className="menu-mobile__close"
							onClick={handleClose}
							onKeyDown={(e) => e.key === "Enter" && handleClose()}
							role="button"
							tabIndex={0}
							aria-label={ariaLabelCloseMenu}
						></div>
					</div>
					<div className="menu-mobile__nav">
						<div className="menu-mobile__nav-content">
							<ul className="menu-mobile__nav-list">
								{itemsNavbar.map((item: NavItem) => (
									<li
										key={item.id}
										className="menu-mobile__nav-item"
									>
										{isHomePage ? (
											<span className="menu-mobile__nav-link">
												{item.title}
											</span>
										) : (
											<Link
												href={item.link}
												className="menu-mobile__nav-link"
												onClick={handleClose}
											>
												{item.title}
											</Link>
										)}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<div
				className={cn("menu-mobile__overlay", { active: isMobile })}
				onClick={handleClose}
				aria-label={ariaLabelCloseMenu}
			></div>
		</>
	);
};

export default MenuMobile;
