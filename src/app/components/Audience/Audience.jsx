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
                            If you're managing multiple medications, Remedify is here to help. It sends you easy-to-follow reminders so you never have to worry about missing a dose.
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
                            If you find it hard to remember or stay focused on your medications, Remedify supports you with easy-to-follow reminders and visuals that keep you on track.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
