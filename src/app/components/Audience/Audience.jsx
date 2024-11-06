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
                </div>
                <div className={styles.iconBox}>
                    <div className={styles.icon}>
                        <img src="/cognitive-icon.svg" alt="Cognitive impairments" className={styles.cognitive} width="150"/>
                    </div>
                    <p className={styles.iconLabel}>Cognitive impairments</p>
                </div>
            </div>
            <div className={styles.textContainer}>
                <p>
                    Remedify is crafted for individuals managing complex medication schedules and those with cognitive impairments, offering a reliable support system and convenient reminders to simplify daily life.
                </p>
                <p>
                    We understand that keeping track of multiple medications can be stressful and overwhelming. With Remedify, users gain an intuitive support system that ensures they never miss a dose. Remedify offers gentle reminders, easy-to-read instructions, and visual aids that make medication management effortless and accessible.
                </p>
            </div>
        </div>
    );
}
