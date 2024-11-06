import styles from './Header.module.css';

export default function Header() {
    return (
        <nav className={styles.nav}>
            <div>
                <img src="/logo.svg" alt="Remedify logo" className={styles.logo} height="70"/>
            </div>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a href="#features">
                        <p>Features</p>
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="#audience">
                        <p>Who Remedify is For</p>
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="#team">
                        <p>Meet Remedify Team </p>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
