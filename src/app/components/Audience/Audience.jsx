import styles from './Audience.module.css';

export default function Header() {
    return (
        <div className={styles.audience}>
            <div className={styles.bannerImage}>
               <h2>Who Remedify is For</h2>
            </div>
            <div className={styles.bannerText}>
                <div>
                    <img src="/polypharmacy.svg" alt="Polypharmacy" className={styles.polypharmacy} width="150"/>
                    <p>Polypharmacy</p>
                </div>
                <div>
                    <img src="/cognitive-icon.svg" alt="Cognitive impairments" className={styles.cognitive} width="150"/>
                    <p>Cognitive impairments</p>
                </div>
            </div>
            <div>
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
