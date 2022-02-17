import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from './context/NavState';

import styles from './HamburgerButton/HamburgerButton.module.css';

const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  top: 0px;
  float: left;
  margin-right: 10px;
  outline: 0;
  border: 0;
  padding: 12px;
  background: none;

  @media screen and (max-width: 768px) {
    padding-right: 6px;
  }

  @media screen and (max-width: 425px) {
    margin-right: 2px;
  }

  @media screen and (max-width: 375px) {
    margin-right: 0px;
    
  }
  
  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :hover {
    span:nth-of-type(1) {
      width: 34px;
    }
    span:nth-of-type(2) {
      width: 14px;
    }
    span:nth-of-type(3) {
      width: 14px;
    }

    @media screen and (max-width: 425px) {
      span:nth-of-type(1) {
        width: 28px;
    }
  }
  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(10px, 10px);
      width: 28px;
    }
    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }
    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -7px);
      width: 30px;
    }

  }
`;

const Bar = styled.span`
  display: block;
  width: 44px;
  height: 4px;
  margin-bottom: 8px;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    width: 34px;
    margin-bottom: 6px;
  }

  @media screen and (max-width: 425px) {
    width: 24px;
    height: 3px;
  }
`;

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <MenuButton
      className={styles.isMenuOpen ? 'active' : ''}
      aria-label="Открыть главное меню"
      onClick={clickHandler}
    >
      <Bar className={styles.bar1} />
      <Bar className={styles.bar2} />
      <Bar className={styles.bar3} />
    </MenuButton>
  );
};

export default HamburgerButton;