import React from 'react';
import styles from './ProjectCard.module.scss'
import Tag from '../Tag/Tag'

export default function ProjectCard(props) {

    const {
        containerRef,
        projectImage,
        projectTitle,
        projectDescription,
        projectStack
    } = props;

    return (
        <>
            <div className={styles.ProjectContainer} ref={containerRef}>
                <div className={styles.test}></div>
                <div className={styles.projectImage}>
                    {/* TODO : Image component */}
                    <img src={projectImage} width={120} height={120} alt="todo" />
                </div>
                <div className={styles.projectTitle}>
                    <p>{projectTitle}</p>
                </div>
                <div className={styles.projectDescription}>
                    <p>{projectDescription}</p>
                </div>
                <div className={styles.projectStacks}>
                    {projectStack.map(stack => (
                        <Tag
                            key={stack.name}
                            stackName={stack.name}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}