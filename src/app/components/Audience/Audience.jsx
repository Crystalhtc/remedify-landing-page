import styles from './Audience.module.css';

export default function Audience() {
    return (
        <div className={styles.audience} id='audience'>
            <div className={styles.titleContainer}>
               <h2 className={styles.title}>Who Remedify is For</h2>
            </div>
            <div className={styles.iconContainer}>
                <div className={styles.iconBox}>
                    <div className={styles.icon}>
                        <img src="/polypharmacy.svg" alt="Polypharmacy" className={styles.polypharmacy} width="150"/>
                    </div>
                    <p className={styles.iconLabel}>Polypharmacy</p>
                    <div className={styles.textContainer}>
                        <p>
                            For those managing multiple medications, Remedify simplifies complex schedules with clear reminders, ensuring users stay on track and in control of their health.
                        </p>
                    </div>
                </div>
                <div className={styles.iconBox}>
                    <div className={styles.icon}>
                        <img src="/cognitive-icon.svg" alt="Cognitive impairments" className={styles.cognitive} width="150"/>
                    </div>
                    <p className={styles.iconLabel}>Cognitive impairments</p>
                     <div className={styles.textContainer}>
                        <p>
                            Remedify’s intuitive reminders help users with cognitive challenges remember their medications, supporting confidence and routine.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
