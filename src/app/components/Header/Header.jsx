import styles from './Header.module.css';

export default function Header() {
    return (
        <nav className={styles.nav}>
            <div>
                <img src="/logo.svg" alt="Remedify logo" className={styles.logo} height="70"/>
            </div>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a href="#">
                        Features
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="">
                        Who Remedify is For
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="">
                        Meet Remedify Team 
                    </a>
                </li>
            </ul>
        </nav>
    );
}
