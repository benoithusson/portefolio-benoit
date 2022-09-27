import React from 'react';
import styles from './ProjectCard.module.scss'

const ProjectCard = (props) => {

    const {
        classCard,
        containerRef,
        classTextCard,
        textRef,
        textCard
    } = props;

    return (
        <>
            <div className={styles.container} ref={containerRef}>
                <div className={styles.containerImage}>
                    <p>Image</p>
                </div>
                <div className={styles.containerName}>
                    <p>Name</p>
                </div>
                <div className={styles.containerDescription}>
                    <p>Description</p>
                </div>
                <div className={styles.containerStacks}>
                    <p>Stacks</p>
                </div>
            </div>
            {/*
                Name
                Description
                Image / logo
                Stack utilisées sous forme de tags ? Créer un composant pour ?
                Si pas d'image : prévoir une imge par défaut
            */}
        </>
    )
}

export default ProjectCard;