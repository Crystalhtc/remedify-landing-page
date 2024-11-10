import styles from './Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.container}>
            <div className={styles.left}>
                <img style={{width: '345px'}} src='/logo.svg' alt='Remedify Logo' />
                <div className={styles.socialMedia}>
                    <a href='https://www.instagram.com/rememberwithremedify/?utm_source=ig_web_button_share_sheet' target="_blank"><img src='/instagram.svg' alt='Instagram Link' /></a>
                </div>
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
                        <p>Meet Remedify Team</p>
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://remedify-blog.vercel.app/" target="_blank">
                        <p>Blog</p>
                    </a>
                </li>
            </ul>
        </footer>
    )
}