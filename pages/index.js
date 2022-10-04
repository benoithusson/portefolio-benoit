import { useRef, useEffect } from 'react'
import Image from 'next/image';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger' // https://greensock.com/forums/topic/29801-getting-error-cannot-use-import-statement-outside-a-module-when-importing-flip/
import styles from '../styles/pages/Index.module.scss'
import Card from '../components/ui/Card/Card'
import ProjectCard from '../components/ui/Project-card/ProjectCard'
import skills from '../data/skills'
import projects from '../data/projects'

gsap.registerPlugin(ScrollTrigger)


export default function Home(props) {

  // Ref bars
  const topBarRef = useRef();
  const rightBarRef = useRef();
  // const bottomBarRef = useRef();
  const leftBarRef = useRef();

  // Ref skills
  const refsSkills = useRef([]);
  refsSkills.current = [];

  // Ref text
  const textPresentationLeftRef = useRef();
  const textPresentationRightRef = useRef();

  useEffect(() => {
    let el_topBar = topBarRef.current;
    let el_rightBar = rightBarRef.current;
    // let el_bottomBar = bottomBarRef.current;
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

  const addToSkillRefs = (el) => {
    // https://www.youtube.com/watch?v=ygPIjzhKB2s
    if (el && !refsSkills.current.includes(el)) {
      refsSkills.current.push(el);
    }
  }

  useEffect(() => {
    refsSkills.current.forEach(skill => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skill,
          start: 'center 65%',
          end: 'bottom 70%',
          scrub: 1
        }
      })
      tl.to(skill, { opacity: 0, duration: 1 })
      tl.to(skill, { opacity: 1, duration: 1 })
    })
  }, [])

  return (
    <>
      <div className={styles.containerBlocPresentation}>

        <div className={`${styles.bar} ${styles.topBar}`} ref={topBarRef}></div>
        <div className={`${styles.bar} ${styles.rightBar}`} ref={rightBarRef}></div>
        <div className={`${styles.bar} ${styles.leftBar}`} ref={leftBarRef}></div>

        {/* Presentation */}
        <div className={styles.BlocPresentation}>
          <Card
            title={"Welcome."}
            text={"I'm Benoît."}
            refCard={textPresentationRightRef}
          />
        </div>
      </div>

      {/* Skills */}
      <div style={{ padding: '0 200px', backgroundColor: 'black' }}>
        <div className={styles.listOfSkills}>
          <h3 className={styles.title}>The skills</h3>
          {
            skills.map(skill => {
              return (
                <div className={styles.skill} key={skill.name} ref={addToSkillRefs}>
                  <div className={styles.imageSkill}>
                    <Image
                      src={skill.path_logo}
                      width={90}
                      height={70}
                      alt={skill.alt}
                      quality={100}
                    />
                  </div>
                  <div className={styles.nameSkill}>
                    <p>{skill.name}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* Projects */}
        {/* <div className={styles.listOfProjects}>
          <div>
            <h3 className={styles.title}>The Projects</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
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
        </div> */}
      </div>
    </>
  )
}