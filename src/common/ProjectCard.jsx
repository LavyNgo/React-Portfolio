function ProjectCard({ src, link, h3, para }) {
    return (
        <a href={link} target='_blank'>
            <img className='hover' src={src} alt={'${h3} logo'} />
            <h3>{h3}</h3>
            <p>{para}</p>
        </a>
    )
}

export default ProjectCard  