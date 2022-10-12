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

  // Ref project
  const wrapperListProjectsRef = useRef();

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

    gsap.fromTo(el_textPresentationLeft, { opacity: 0 }, { opacity: 1, duration: 4, ease: 'Power4.easeOut' })
    gsap.fromTo(el_textPresentationRight, { opacity: 0 }, { opacity: 1, duration: 4, ease: 'Power4.easeOut' })

  }, [])

  useEffect(() => {
    let el_listOfSkills = wrapperListSkillsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el_listOfSkills,
        start: 'top 50%',
        end: 'bottom 80%',
      }
    })
    tl.fromTo(el_listOfSkills, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  }, [])

  useEffect(() => {
    const el_wrapperListProjects = wrapperListProjectsRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el_wrapperListProjects,
        start: 'top 50%',
        end: 'center 80%',
      }
    })
    tl.fromTo(el_wrapperListProjects, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  }, [])

  return (
    <>
      {/* Presentation Bloc */}
      <div className={styles.wrapperBlocPresentation}>
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
        <div className={styles.wrapperListProjects} ref={wrapperListProjectsRef}>
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
                  projectUrl={project.project_url}
                />
              )
            })}
          </div>
        </div>
        {/* Contacts */}
        <div className={styles.wrapperContacts}>
          <Title
            title='Wanna get in touch ?'
            containerMaxWidth='300px'
          />
          <div style={{ backgroundColor: 'red', display: 'flex', justifyContent: 'center' }}>
            <div style={{ backgroundColor: 'green', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <span>Telephone</span>
              <span>
                <span>E</span>
                <span>m</span>
                <span>a</span>
                <span>i</span>
                <span>l</span>
              </span>
            </div>
            <div style={{ backgroundColor: 'skyblue', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <span>Linkedin</span>
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}