"use client";
import styles from './Banner.module.css';

export default function Header() {

    return (
        <section className={styles.banner} id='banner'>
            <div className={styles.bannerImage}>
                <img src="/banner-image.png" alt="Remedify logo" className={styles.image}/>
            </div>
            <div className={styles.bannerText}>
                <h1 className={styles.bannerTitle}>Never Miss Your Medication Again</h1>
                <div className={styles.bannerDescription}>
                    <p>Simple, Smart, and Reliable </p>
                    <p>Medication Reminders for a Healthier You</p>
                </div>
                <a href="#features" >
                    <button className={styles.cta}>
                            Learn More
                        
                    </button>
                </a>
            </div>
            
        </section>
    );
}
