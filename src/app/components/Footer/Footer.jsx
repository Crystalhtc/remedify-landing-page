"use client";
import { useState } from 'react';
import styles from './Footer.module.css'

export default function Footer() {

    return(
        <footer className={styles.container}>
            <div className={styles.left}>
                <div>
                    <a href="#header">
                        <img src="/logo.svg" alt="Remedify logo" className={styles.logo} />
                    </a>
                </div>
                <div className={styles.socialMedia}>
                    <a href='https://www.instagram.com/rememberwithremedify/?utm_source=ig_web_button_share_sheet' target="_blank"><img src='/instagram.svg' alt='Instagram Link' /></a>
                </div>
                <div className={styles.socialMedia}>
                    <a href='https://github.com/yeenathan/Asclepius' target="_blank"><img src='/github.svg' alt='Github Link' /></a>
                </div>
            </div>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a href="#features">Features</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#audience">Who Remedify is For</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#team">Meet Remedify Team</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#blog">Blog</a>
                </li>
            </ul>
        </footer>
    )
}