import styles from './Features.module.css';

export default function Features() {
    return(
        <section className={styles.featuresContainer} id='features'>
            <h1 className={styles.title} >Features</h1>
            <div className={`${styles.singleFeatureContainer} ${styles.singleFeatureContainerReversed}`}>
                <div className={styles.img} >
                    <img src="/notification.png" alt="Notification screen" />
                </div>
                <div className={styles.description}>
                    <h1>Medication Reminders</h1>
                    <p>Receive timely, simple reminders designed to fit your routine, helping you stick to your medication schedule effortlessly.</p>
                </div>
            </div>
            <div className={styles.singleFeatureContainer}>
                <div className={styles.description}>
                    <h1>One-Tap Medication Logging</h1>
                    <p>Log each dose with just one tap. Our intuitive interface ensures that tracking your medications is quick and uncomplicated.</p>
                </div>
                <div className={styles.img} >
                    <img src="/logging_med.png" alt="Loggin med card" />
                </div>
            </div>
            <div className={`${styles.singleFeatureContainer} ${styles.singleFeatureContainerReversed}`}>
                <div className={styles.img} >
                    <img src="/med_scanning.png" alt="Med scanning screen" />
                </div>
                <div className={styles.description}>
                    <h1>AI-Powered Label Scanning</h1>
                    <p>Easily scan your medication labels to set up reminders automatically, minimizing the steps you need to remember and simplifying the process.</p>
                </div>
            </div>
            <div className={styles.singleFeatureContainer}>
                <div className={styles.description}>
                    <h1>Accessible Medication Library</h1>
                    <p>Review all your medications in one clear, accessible library. Detailed descriptions and dosage instructions make it easy to understand what you’re taking.</p>
                </div>
                <div className={styles.img}>
                    <img src="/med_library.png" alt="Med library screen" />
                </div>
            </div>
        </section>
    )
}