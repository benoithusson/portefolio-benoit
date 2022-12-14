import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger' // https://greensock.com/forums/topic/29801-getting-error-cannot-use-import-statement-outside-a-module-when-importing-flip/
import Card from '../components/01-atoms/Card/Card'
import ProjectCard from '../components/01-atoms/Project-card/ProjectCard'
import Title from '../components/01-atoms/Title/Title'
import List from '../components/02-molecules/List/List'
import PhotoshopPortefolio from '../components/03-organisms/photoshop-portefolio/PhotoshopPortefolio'
import styles from '../styles/pages/Index.module.scss'
import skills from '../data/skills'
import projects from '../data/projects'

gsap.registerPlugin(ScrollTrigger)


export default function Home() {

  // https://stackoverflow.com/questions/70492841/react-add-a-component-after-main-component-has-loaded
  const [renderMainComponent, setRenderMainComponent] = useState(false);

  // Ref bars
  const topBarRef = useRef();
  const rightBarRef = useRef();
  const bottomBarRef = useRef();
  const leftBarRef = useRef();

  // Ref text
  const textPresentationLeftRef = useRef();
  const textPresentationRightRef = useRef();

  // Ref skill
  const wrapperListSkillsRef = useRef();

  // Ref project
  const wrapperListProjectsRef = useRef();

  // Ref contacts
  const wrapperContactsRef = useRef();

  // Animation bars
  useEffect(() => {

    // When componentDidMount
    // I set renderMainComponent to true
    // To avoid loading component before page is load
    setRenderMainComponent(true);

    let el_topBar = topBarRef.current;
    let el_rightBar = rightBarRef.current;
    let el_bottomBar = bottomBarRef.current;
    let el_leftBar = leftBarRef.current;
    let el_textPresentationLeft = textPresentationLeftRef.current;
    let el_textPresentationRight = textPresentationRightRef.current;

    const tl = gsap.timeline();

    gsap.set(el_topBar, { transformOrigin: 'right' });
    gsap.set(el_rightBar, { transformOrigin: 'top right' });
    gsap.set(el_bottomBar, { transformOrigin: 'left' });
    gsap.set(el_leftBar, { transformOrigin: 'bottom right' });
    gsap.fromTo(el_topBar, { scaleX: 0 }, { scaleX: 1, duration: 2, ease: 'Power4.easeOut' });
    gsap.fromTo(el_rightBar, { scaleY: 0 }, { scaleY: 1, duration: 2, ease: 'Power4.easeOut' });
    gsap.fromTo(el_bottomBar, { scaleX: 0 }, { scaleX: 1, duration: 2, ease: 'Power4.easeOut' });
    gsap.fromTo(el_leftBar, { scaleY: 0 }, { scaleY: 1, duration: 2, ease: 'Power4.easeOut' });

    tl.fromTo(el_textPresentationLeft, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'Power4.easeOut' });
    tl.fromTo(el_textPresentationRight, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'Power4.easeOut' });
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

  // Animation contacts
  useEffect(() => {
    const el_wrapperContacts = wrapperContactsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el_wrapperContacts,
        start: 'top 70%',
        end: 'center 90%',
      }
    })
    tl.fromTo(el_wrapperContacts, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  }, [])

  return (
    <>
      {/* Presentation Bloc */}
      <div className={styles.wrapperBlocPresentation}>
        <div className={`${styles.bar} ${styles.topBar}`} ref={topBarRef}></div>
        <div className={`${styles.bar} ${styles.rightBar}`} ref={rightBarRef}></div>
        <div className={`${styles.bar} ${styles.bottomBar}`} ref={bottomBarRef}></div>
        <div className={`${styles.bar} ${styles.leftBar}`} ref={leftBarRef}></div>
        {renderMainComponent &&
          <div className={styles.BlocPresentation} ref={textPresentationRightRef}>
            <Card
              title={"Welcome."}
              text={"I'm Beno??t."}
            />
          </div>
        }
      </div>
      <div className={styles.pageWrapper}>
        {/* Skills */}
        <div className={styles.wrapperListOfSkills} ref={wrapperListSkillsRef}>
          <Title
            title="Stack"
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
        <div className={styles.wrapperListOfProjects} ref={wrapperListProjectsRef}>
          <Title
            title='Projects'
            containerMaxWidth='140px'
          />
          <div className={styles.containerListOfProject}>
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
            {/* Photoshop Portefolio */}
            <div className={styles.wrapperPhotoshopPortefolio}>
              <Title
                title='Photoshop Portefolio'
                containerMaxWidth='300px'
              />
              <PhotoshopPortefolio />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}