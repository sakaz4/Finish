import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from './hooks/onClickOutside';
import { MenuContext } from './context/NavState';
import HamburgerButton from './HamburgerButton';
import { SideMenu } from './SideMenu';

import styles from './MainMenu/MainMenu.module.css';

const Navbar = styled.div`
		display: flex;
		position: fixed;
		left: 0;
		right: 0;
		box-sizing: border-box;
		outline: currentcolor none medium;
		max-width: 440px;
		margin: 0px;
		font-family: "Post No Bills Colombo";
		font-size: 22px;
		align-items: center;
		min-width: 0px;
		min-height: 0px;
		flex-direction: row;
		justify-content: flex-start;
		z-index: 500;

		@media screen and (max-width: 375px) {
			h3 {
				fonst-size: 24px;
			}
		}
    }
`;

const MainMenu = () => {
	const node = useRef();
	const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
	useOnClickOutside(node, () => {
		// Only if menu is open
		if (isMenuOpen) {
			toggleMenuMode();
		}
	});

	return (
		<header ref={node}>
			<Navbar className={styles.navBar}>
				<HamburgerButton />
				<h1>J store</h1>
			</Navbar>
			<SideMenu />
		</header>
	);
};

export default MainMenu;