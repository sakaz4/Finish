import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from './context/NavState';

import styles from './SideMenu/SideMenu.module.css'

const Menu = styled.nav`
	position: absolute;
	top: 0px;
	left: 0px;
	bottom: 100px;
	z-index: 2;
	display: block;
	max-width: 100%;
	margin-top: 0px;
	padding-top: 100px;
	padding-right: 0px;
	align-items: stretch;
	background-color: rgba(94, 89, 89, 0.8);
	transform: translateX(-100%);
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
${props =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const MenuLink = styled.a`
	position: relative;
	display: block;
	text-align: left;
	max-width: 100%;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24%;
	background-position: 88% 50%;
	background-size: 36px;
	background-repeat: no-repeat;
	transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
	text-decoration: none;
	font-family: "Post No Bills Colombo";
    font-size: 30px;
	color: #F38015;
	font-size: 30px;
	line-height: 100%;
	font-weight: 500;
	:hover {
    background-position: 90% 50%;
}
`;

export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu className={styles.menu} open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

SideMenu.defaultProps = {
  children: (
    <>
      <MenuLink href="/">Title page</MenuLink>
      <MenuLink href="/disciplines">Select</MenuLink>
      <MenuLink href="/about">About</MenuLink>
      <MenuLink href="/contacts">Contacts</MenuLink>
    </>
  ),
};