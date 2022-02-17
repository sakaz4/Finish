import styles from './Header.module.css';

import React from 'react';
import NavState from '../context/NavState';
import MainMenu from '../MainMenu';

function Header() {
    return (
        <div id="header" className={styles.headerWrapper}>
            <div>
                <NavState>
                    <MainMenu />
                </NavState>
                <div className={styles.search}><input type="search" required placeholder='search'/></div>
            </div>
            
        </div>
    )
}


export default Header;