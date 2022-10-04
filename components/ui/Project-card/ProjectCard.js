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
            <div className={styles.container} ref={containerRef}>
                <div className={styles.containerImage}>
                    <img src={projectImage} width={120} height={120} alt="todo" />
                </div>
                <div className={styles.containerTitle}>
                    <p>{projectTitle}</p>
                </div>
                <div className={styles.containerDescription}>
                    <p>{projectDescription}</p>
                </div>
                <div className={styles.containerStacks}>
                    {projectStack.map(stack => (
                        <Tag
                            stackName={stack.name}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}