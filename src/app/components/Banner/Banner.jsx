import styles from './Banner.module.css';

export default function Header() {
    return (
        <section className={styles.banner} id='banner'>
            <div className={styles.bannerImage}>
               <img src="/banner-image.svg" alt="Remedify logo" className={styles.image}/>
            </div>
            <div className={styles.bannerText}>
                <h1 className={styles.bannerTitle}>Never Miss Your Medication Again</h1>
                <div className={styles.bannerDescription}>
                    <p>Simple, Smart, and Reliable </p>
                    <p>Medication Reminders for a Healthier You</p>
                </div>
                <button className={styles.cta}>Get Started Now</button>
            </div>
            
        </section>
    );
}
