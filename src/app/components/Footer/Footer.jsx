import styles from './Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.container}>
            <div className={styles.left}>
                <div><img className={styles.logo} src='/logo.svg' alt='Remedify Logo' /></div>
                <div className={styles.socialMedia}>
                    <a href='https://www.instagram.com/rememberwithremedify/?utm_source=ig_web_button_share_sheet' target="_blank"><img src='/instagram.svg' alt='Instagram Link' /></a>
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
                    <a href="https://remedify-blog.vercel.app/" target="_blank">Blog</a>
                </li>
            </ul>
        </footer>
    )
}