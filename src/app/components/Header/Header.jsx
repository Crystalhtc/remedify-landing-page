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
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <span className={styles.hamburgerBar}></span>
                    <span className={styles.hamburgerBar}></span>
                    <span className={styles.hamburgerBar}></span>
                </div>
            </div>
            
            <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
                <li className={`${styles.navItem} ${styles.firstNavItem}`}>
                    <a href="#features">Features</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#audience">Who Remedify is For</a>
                </li>
                <li className={`${styles.navItem} ${styles.lastNavItem}`}>
                    <a href="#team">Meet Remedify Team</a>
                </li>
                <li className={`${styles.navItem} ${styles.lastNavItem}`}>
                    <a href="https://remedify-blog.vercel.app/">Blog</a>
                </li>
            </ul>
        </nav>
    );
}
