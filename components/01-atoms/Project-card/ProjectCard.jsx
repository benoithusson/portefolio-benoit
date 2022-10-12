import React, { useRef, useEffect } from 'react'
import styles from './ProjectCard.module.scss'
import Tag from '../Tag/Tag'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectCard(props) {
  const {
    projectImage,
    projectTitle,
    projectDescription,
    projectStack,
    projectUrl
  } = props;

  const projectTitleRef = useRef();
  const projectUrlRef = useRef();

  useEffect(() => {
    const el_projectTitle = projectTitleRef.current;
    const el_projectUrl = projectUrlRef.current;

    if (projectUrl) {
      el_projectUrl.addEventListener("mouseenter", () => {
        el_projectUrl.classList.add(styles['projectTitleOnHover']);
      })
      el_projectUrl.addEventListener("mouseleave", () => {
        el_projectUrl.classList.remove(styles['projectTitleOnHover']);
      })
    }
  })

  return (
    <div className={styles.wrapperCard}>
      <div
        className={styles.containerImageAndStack}
      >
        <div className={styles.projectImage}>
          <Image src={projectImage} width={200} height={200} alt="todo" />
        </div>
      </div>
      <div
        className={styles.containerTitleAndDescription}
      >
        {projectTitle && (
          <div className={styles.projectTitle} ref={projectTitleRef}>
            {projectUrl ?
              <a href={projectUrl} ref={projectUrlRef}>
                {projectTitle} <span className={styles.visitProject}>
                  <Image src="/arrow.svg" width={20} height={20} alt="todo" />
                </span>
              </a>
              :
              <p>{projectTitle}</p>
            }
          </div>
        )}
        {projectDescription && (
          <div className={styles.projectDescription}>
            <p>{projectDescription}</p>
          </div>
        )}
        <div className={styles.projectStack}>
          {projectStack.map((stack) => (
            <Tag key={stack.name} stackName={stack.name} />
          ))}
        </div>
      </div>
    </div >
  )
}
