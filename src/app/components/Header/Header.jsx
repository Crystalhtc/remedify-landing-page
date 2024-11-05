import styles from './Header.modules.css';

export default function Header() {
    return (
        <nav className="nav">
            <div>
                <img src="/logo.svg" alt="Remedify logo" className={styles.logo} height="70"/>
            </div>
            <ul className="navList">
                <li className="navItem">
                    <a href="#">
                        Features
                    </a>
                </li>
                <li className="navItem">
                    <a href="">
                        Who Remedify is For
                    </a>
                </li>
                <li className="navItem">
                    <a href="">
                        Meet Remedify Team 
                    </a>
                </li>
            </ul>
        </nav>
    );
}
