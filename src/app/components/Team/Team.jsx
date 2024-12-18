import styles from './Team.module.css'

export default function Team() {
    return(
        <section className={styles.teamContainer} id='team'>
            <h1 className={styles.title}>Meet Remedify Team</h1>
            <div className={styles.membersContainer}>
                <div className={styles.member}>
                    <img src='/team/brian.png' alt='Brian Paragas' />
                    <h3>Brian Paragas</h3>
                    <p>Project Manager</p>
                    <p>Lead Graphic Designer</p>
                    <a className={styles.linkedin} href='https://www.linkedin.com/in/brianparagas/' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
                <div className={styles.member}>
                    <img src='/team/crystal.png' alt='Crystal Cheung' />
                    <h3>Crystal Cheung</h3>
                    <p>Lead UX/UI Designer</p>
                    <a className={styles.linkedin} href='https://www.linkedin.com/in/crystal-cheunghtc/' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
                <div className={styles.member}>
                    <img src='/team/nathan.png' alt='Nathan Yee' />
                    <h3>Nathan Yee</h3>
                    <p>Lead Developer</p>
                    <a className={styles.linkedin} href='https://www.linkedin.com/in/yeenathan/' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
                <div className={styles.member}>
                    <img src='/team/madoka.png' alt='Madoka Nogaki' />
                    <h3>Madoka Nogaki</h3>
                    <p>UX/UI Designer</p>
                    <a className={styles.linkedin} href='https://www.linkedin.com/in/madoka-nogaki/' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
            </div>
            <div className={styles.membersContainer}>
                <div className={styles.member}>
                    <img src='/team/kenny.png' alt='Kenny Harman' />
                    <h3>Kenny Harman</h3>
                    <p>Graphic Designer</p>
                    <a className={styles.linkedin} href='https://www.linkedin.com/in/kennyharman/' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
                <div className={styles.member}>
                    <img src='/team/deluka.png' alt='Deluka LGH' />
                    <h3>Deluka LGH</h3>
                    <p>Developer</p>
                    <a className={styles.linkedin} href='https://www.linkedin.com/in/delukalgh/' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
                <div className={styles.member}>
                    <img src='/team/jillian.png' alt='Jillian Gonzales' />
                    <h3>Jillian Gonzales</h3>
                    <p>UX/UI Designer</p>
                    <a className={styles.linkedin} href='https://www.linkedin.com/in/jilliangz' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
                <div className={styles.member}>
                    <img src='/team/yeongtaek.png' alt='Yeongtaek Lee' />
                    <h3>Yeongtaek Lee</h3>
                    <p>Developer</p>
                    <a className={styles.linkedin} href='https://www.linkedin.com/in/yeongtaek-lee' target="_blank"><img src='/linkedin.svg' alt='Linkedin Link' /></a>
                </div>
            </div>
        </section>
    )
}