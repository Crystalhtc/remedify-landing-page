"use client";
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.navbarContainer}>
                <div className={styles.logoContainer}>
                    <img src="/logo.svg" alt="Remedify logo" className={styles.logo} height="70" />
                </div>
                <button className={styles.hamburger} onClick={toggleMenu}>
                    <span className={styles.hamburgerBar}></span>
                    <span className={styles.hamburgerBar}></span>
                    <span className={styles.hamburgerBar}></span>
                </button>
            </div>
            
            <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
                <li className={`${styles.navItem} ${styles.firstNavItem}`}>
                    <a href="#features"><p>Features</p></a>
                </li>
                <li className={styles.navItem}>
                    <a href="#audience"><p>Who Remedify is For</p></a>
                </li>
                <li className={`${styles.navItem} ${styles.lastNavItem}`}>
                    <a href="#team"><p>Meet Remedify Team</p></a>
                </li>
                <li className={`${styles.navItem} ${styles.lastNavItem}`}>
                    <a href=""><p>Blog</p></a>
                </li>
            </ul>
        </nav>
    );
}
