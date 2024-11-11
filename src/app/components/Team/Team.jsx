import styles from './Team.module.css'

export default function Team() {
    return(
        <section className={styles.teamContainer} id='team'>
            <h1 className={styles.title}>Meet Remedify Team</h1>
            <div className={styles.membersContainer}>
                <div className={styles.member}>
                    <img src='/brian.png' alt='Brian Paragas' />
                    <h3>Brian Paragas</h3>
                    <p>Project Manager</p>
                    <p>Lead Graphic Designer</p>
                    <a className={styles.linkedin} href='' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
                <div className={styles.member}>
                    <img src='/crystal.png' alt='Crystal Cheung' />
                    <h3>Crystal Cheung</h3>
                    <p>Lead UI/UX Designer</p>
                    <a className={styles.linkedin} href='' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
                <div className={styles.member}>
                    <img src='/nathan.png' alt='Nathan Yee' />
                    <h3>Nathan Yee</h3>
                    <p>Lead Developer</p>
                    <a className={styles.linkedin} href='' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
                <div className={styles.member}>
                    <img src='/madoka.png' alt='Madoka Nogaki' />
                    <h3>Madoka Nogaki</h3>
                    <p>UI/UX Designer</p>
                    <a className={styles.linkedin} href='' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
            </div>
            <div className={styles.membersContainer}>
                <div className={styles.member}>
                    <img src='/kenny.png' alt='Kenny Harman' />
                    <h3>Kenny Harman</h3>
                    <p>Graphic Designer</p>
                    <a className={styles.linkedin} href='' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
                <div className={styles.member}>
                    <img src='/deluka.png' alt='Deluka LGH' />
                    <h3>Deluka LGH</h3>
                    <p>Developer</p>
                    <a className={styles.linkedin} href='' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
                <div className={styles.member}>
                    <img src='/jillian.png' alt='Jillian Gonzales' />
                    <h3>Jillian Gonzales</h3>
                    <p>UX/UI Designer</p>
                    <a className={styles.linkedin} href='' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
                <div className={styles.member}>
                    <img src='/yeongtaek.png' alt='Yeongtaek Lee' />
                    <h3>Yeongtaek Lee</h3>
                    <p>Developer</p>
                    <a className={styles.linkedin} href='' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
            </div>
        </section>
    )
}