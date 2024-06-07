import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/Lavy_Ngo_Resume.pdf'
import { useTheme } from '../../common/ThemeContext'


function Hero() {

    const { theme, toggleTheme } = useTheme()

    const themeIcon = theme === 'light' ? sun : moon
    const githubIcon = theme === 'light' ? githubLight : githubDark
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark

    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile picture" />
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
            </div>

            <div className={styles.info}>
                <h1>Lavy Ngo</h1>
                <h2>Front End Developer</h2>
                <span>
                    <a href="https://gitHub.com/" target="_blank">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://linkedin.com/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <p className={styles.description}>Aspiring to be a front-end developer involves mastering HTML, CSS, and JavaScript, and using frameworks like React or Angular to build user-friendly interfaces. Practice through projects, enhance your design skills, and stay updated with industry trends to create captivating digital experiences.</p>
                <a href={CV} download>
                    <button className='hover'>Resume</button>
                </a>
            </div>

        </section>
    )
}

export default Hero