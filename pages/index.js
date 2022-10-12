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

  // Ref contacts
  const refE = useRef();
  const refM = useRef();
  const refA = useRef();
  const refI = useRef();
  const refL = useRef();
  const wrapperContactsRef = useRef();

  // Animation bars
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

  // Animation skills
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

  // Animation projects
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

  useEffect(() => {
    const el_E = refE.current;
    const el_M = refM.current;
    const el_A = refA.current;
    const el_I = refI.current;
    const el_L = refL.current;
    const el_wrapperContacts = wrapperContactsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el_wrapperContacts,
        start: 'top 60%',
        end: 'center 80%',
        markers: true,
        scrub: 1
      }
    })

    tl.to(el_E, { opacity: 1, bottom: 0, duration: 0.10 })
    tl.to(el_M, { opacity: 1, bottom: 0, duration: 0.11 })
    tl.to(el_A, { opacity: 1, bottom: 0, duration: 0.12 })
    tl.to(el_I, { opacity: 1, bottom: 0, duration: 0.13 })
    tl.to(el_L, { opacity: 1, bottom: 0, duration: 0.14 })

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
        <div className={styles.wrapperContacts} ref={wrapperContactsRef}>
          <Title
            title='Wanna get in touch ?'
            containerMaxWidth='300px'
          />
          <div style={{ backgroundColor: 'red', display: 'flex', justifyContent: 'center' }}>
            <div style={{ backgroundColor: 'green', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <span>Telephone</span>
              <span className={styles.email}>
                <span ref={refE}>E</span>
                <span ref={refM}>m</span>
                <span ref={refA}>a</span>
                <span ref={refI}>i</span>
                <span ref={refL}>l</span>
              </span>
            </div>
            <div style={{ backgroundColor: 'skyblue', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <span>Linkedin</span>
              <span>GitHub</span>
              <span>Resume</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}