import styles from './CTA.module.css';

export default function CTA() {
    return (
        <div>
            {/* <div className={styles.graphicContainer}>
                <div className={styles.ctaGraphic}>
                    <img src='/cta-graphic.svg' alt='CTA graphic' className={styles.graphic} width="420"/>
                </div>
            </div> */}
            
            <div className={styles.cta} id='cta'>
                <div className={styles.ctaGraphic}>
                    <img src='/cta-graphic.png' alt='CTA graphic' className={styles.graphic} width="420"/>
                </div>
                <div className={styles.ctaText}>
                    <p>Join Us in Making Medication Management Easier and More Accessible</p>
                    {/* <button>Get Started Now</button> */}
                </div>
            </div>
        </div>
        
    );
}
