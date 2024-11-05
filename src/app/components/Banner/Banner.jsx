import styles from './Banner.modules.css';

export default function Header() {
    return (
        <div className="banner">
            <div className="banner-image">
               <img src="/banner-image.png" alt="Remedify logo" className="image"/>
            </div>
            <div className="banner-text">
                <h1 className="banner-title">Never Miss Your Medication Again</h1>
                <div>
                    <p>Simple, Smart, and Reliable </p>
                    <p>Medication Reminders for a Healthier You</p>
                </div>
                <button className="cta">Get Started Now</button>
            </div>
            
        </div>
    );
}
