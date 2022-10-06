import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger' // https://greensock.com/forums/topic/29801-getting-error-cannot-use-import-statement-outside-a-module-when-importing-flip/
import Card from '../components/01-atoms/Card/Card'
import ProjectCard from '../components/01-atoms/Project-card/ProjectCard'
import Title from '../components/01-atoms/Title/Title'
import List from '../components/02-molecules/List/List'
import styles from '../styles/pages/Index.module.scss'
import skills from '../data/skills'
import projects from '../data/projects'

gsap.registerPlugin(ScrollTrigger)


export default function Home() {

  // Ref bars
  const topBarRef = useRef();
  const rightBarRef = useRef();
  const leftBarRef = useRef();

  // Ref text
  const textPresentationLeftRef = useRef();
  const textPresentationRightRef = useRef();

  // Ref skill
  const wrapperListSkillsRef = useRef();

  useEffect(() => {
    let el_topBar = topBarRef.current;
    let el_rightBar = rightBarRef.current;
    let el_leftBar = leftBarRef.current;
    let el_textPresentationLeft = textPresentationLeftRef.current;
    let el_textPresentationRight = textPresentationRightRef.current;

    gsap.set(el_topBar, { transformOrigin: 'right' })
    gsap.set(el_rightBar, { transformOrigin: 'top right' })
    gsap.set(el_leftBar, { transformOrigin: 'bottom right' })

    gsap.fromTo(el_topBar, { scaleX: 0 }, { scaleX: 1, duration: 2, ease: 'Power4.easeOut' })
    gsap.fromTo(el_rightBar, { scaleY: 0 }, { scaleY: 1, duration: 2, ease: 'Power4.easeOut' })
    gsap.fromTo(el_leftBar, { scaleY: 0 }, { scaleY: 1, duration: 2, ease: 'Power4.easeOut' })

    gsap.fromTo(el_textPresentationLeft, { opacity: 0 }, { opacity: 1, duration: 3, ease: 'Power4.easeOut' })
    gsap.fromTo(el_textPresentationRight, { opacity: 0 }, { opacity: 1, duration: 3, ease: 'Power4.easeOut' })

  }, [])

  useEffect(() => {
    let el_listOfSkills = wrapperListSkillsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el_listOfSkills,
        start: 'top 75%',
        end: 'center 90%',
        scrub: 1,
      }
    })

    tl.fromTo(el_listOfSkills, { opacity: 0 }, { opacity: 1, duration: 1 })
    tl.fromTo(el_listOfSkills, { x: '-100%' }, { x: 0, duration: 2 })

  }, [])

  return (
    <>
      {/* Presentation Bloc */}
      <div className={styles.containerBlocPresentation}>
        <div className={`${styles.bar} ${styles.topBar}`} ref={topBarRef}></div>
        <div className={`${styles.bar} ${styles.rightBar}`} ref={rightBarRef}></div>
        <div className={`${styles.bar} ${styles.leftBar}`} ref={leftBarRef}></div>
        <div className={styles.BlocPresentation}>
          <Card
            title={"Welcome."}
            text={"I'm Benoît."}
            refCard={textPresentationRightRef}
          />
        </div>
      </div>

      <div className={styles.wrapper}>
        {/* Skills */}
        <div className={styles.wrapperListSkills} ref={wrapperListSkillsRef}>
          <Title
            title="Skills"
            containerMaxWidth='100px'
          />
          <div className={styles.containerList}>
            {
              skills.map(skill => {
                return (
                  <List
                    imageSrc={skill.path_logo}
                    text={skill.name}
                    key={skill.name}
                  />
                )
              })
            }
          </div>
        </div>
        {/* Projects */}
        <div className={styles.wrapperListProjects}>
          <Title
            title='Projects'
            containerMaxWidth='140px'
          />
          <div className={styles.containerProject}>
            {projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  projectImage={project.image_path}
                  projectTitle={project.name}
                  projectDescription={project.description}
                  projectStack={project.stacks}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}