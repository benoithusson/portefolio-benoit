import React, { useState, useRef, useEffect } from 'react'
import styles from './ProjectCard.module.scss'
import Tag from '../Tag/Tag'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectCard(props) {
  const { projectImage, projectTitle, projectDescription, projectStack, projectUrl } = props

  const refContainerImageAndStack = useRef()
  const refContainerTitleAndDescription = useRef()

  useEffect(() => {
    // const el_refContainerImageAndStack = refContainerImageAndStack.current
    // const el_containerTitleAndDescription =
    //   refContainerTitleAndDescription.current

    // el_refContainerImageAndStack.addEventListener('mouseenter', () => {
    // })

    // el_refContainerImageAndStack.addEventListener('mouseleave', () => {
    // })
  })

  return (
    <div className={styles.wrapperCard}>
      <div
        className={styles.containerImageAndStack}
        ref={refContainerImageAndStack}
      >
        <div className={styles.projectImage}>
          <Image src={projectImage} width={200} height={200} alt="todo" />
        </div>
      </div>
      <div
        className={styles.containerTitleAndDescription}
        ref={refContainerTitleAndDescription}
      >
        {projectTitle && (
          <div className={styles.projectTitle}>
            {projectUrl ?
              <a href={projectUrl}>
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
