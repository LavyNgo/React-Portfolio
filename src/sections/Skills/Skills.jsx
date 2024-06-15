import styles from './SkillsStyles.module.css'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext';
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';


function Skills() {

    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillsList}>
                <SkillList src={checkMarkIcon} skill='HTML' />
                <SkillList src={checkMarkIcon} skill='CSS' />
                <SkillList src={checkMarkIcon} skill='JavaScript' />
                <SkillList src={checkMarkIcon} skill='TypeScript' />
                <SkillList src={checkMarkIcon} skill='Node' />
            </div>
            <hr />
            <div className={styles.skillsList}>
                <SkillList src={checkMarkIcon} skill='React' />
                <SkillList src={checkMarkIcon} skill='Angular' />
                <SkillList src={checkMarkIcon} skill='SQL' />
                <SkillList src={checkMarkIcon} skill='Python' />
                <SkillList src={checkMarkIcon} skill='Java' />
            </div>
            <hr />
            <div className={styles.skillsList}>
                <SkillList src={checkMarkIcon} skill='AWS' />
                <SkillList src={checkMarkIcon} skill='GCP' />
                <SkillList src={checkMarkIcon} skill='Git' />
                <SkillList src={checkMarkIcon} skill='PHP' />
            </div>
        </section>
    )
}

export default Skills