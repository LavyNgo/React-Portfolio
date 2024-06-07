import React from 'react'
import styles from './ProjectStyles.module.css'
import wtml from '../../assets/WTML.png'
import sps from '../../assets/SPS.png'
import imdb from '../../assets/IMDB.png'
import pokedex from '../../assets/POKEDEX.png'
import gta from '../../assets/GTA.png'
import t3 from '../../assets/T3.png'
import portfolio from '../../assets/PORTFOLIO.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard src={portfolio} link={'https://github.com/LavyNgo/React-Portfolio.git'} h3='Portfolio' para='React+Vite/JSX' />
                <ProjectCard src={pokedex} link={'https://github.com/LavyNgo/Pokedex.git'} h3='Pokedex' para='React/JSX' />
                <ProjectCard src={t3} link={'https://github.com/LavyNgo/React-TicTacToe.git'} h3='TicTacToe' para='React+Vite/JSX' />
                <ProjectCard src={wtml} link={'https://github.com/LavyNgo/WorldThroughMyLens.git'} h3='WorldThroughMyLens' para='HTML/CSS/JavaScript/Firebase' />
                <ProjectCard src={sps} link={'https://github.com/bcd7c/Fall2023_UMKC__IOT_Group3.git'} h3='SmartParkingSystem' para='HTML/CSS/JavaScript/MySQL/Python' />
                <ProjectCard src={gta} link={'https://github.com/LavyNgo/GTAHelper.git'} h3='GTAHelper' para='HTML/CSS/JavaScript/ApacheTomcat/Java' />
                <ProjectCard src={imdb} link={'https://github.com/Bao-Thien-Ngo/IMDB_250.git'} h3='IMDB-Analysis' para='Python' />
            </div>
        </section>
    )
}

export default Projects