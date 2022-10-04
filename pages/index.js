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

  // Ref Bloc Presentation
  const refLeftBloc = useRef()
  const refRightBloc = useRef()
  const refLeftBlocText = useRef()
  const refRightBlocText = useRef()

  // Ref skills
  const refsSkills = useRef([]);
  refsSkills.current = [];

  const addToSkillRefs = (el) => {
    // https://www.youtube.com/watch?v=ygPIjzhKB2s
    if (el && !refsSkills.current.includes(el)) {
      refsSkills.current.push(el);
    }
  }

  useEffect(() => {
    const elLeftBloc = refLeftBloc.current
    const elRightBloc = refRightBloc.current
    const elLeftBlocText = refLeftBlocText.current
    const elRightBlocText = refRightBlocText.current

    // Animation bloc left
    gsap.to(
      elLeftBloc,
      {
        display: 'flex',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '50%',
        ease: 'Power2.easeIn',
        duration: 1,
      })
    // Animation content left
    gsap.fromTo(
      elLeftBlocText,
      { opacity: 0 },
      { opacity: 1, duration: 2.5, ease: 'Power2.easeIn' },
    )

    // Animation bloc right
    gsap.to(
      elRightBloc,
      {
        display: 'flex',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        ease: 'Power2.easeIn',
        duration: 1,
        transformOrigin: 'center',
      })

    // Animation content right
    gsap.fromTo(
      elRightBlocText,
      { opacity: 0 },
      { opacity: 1, duration: 2.5, ease: 'Power2.easeIn' },
    )
  }, [])

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
      <div className={styles.containerBlocsHome}>
        <div className={styles.leftBloc} ref={refLeftBloc}>
          <Card
            classTextCard={styles.leftContent}
            textCard={'Frontend'}
            textRef={refLeftBlocText}
          />
        </div>
        <div className={styles.rightBloc} ref={refRightBloc}>
          <Card
            classTextCard={styles.rightContent}
            textCard={`My name is Benoît Thiennard. I am Frontend Developer with UX Skills.
            I speak Français, English und Deutsch. I am a fan of Xtrem Sports.`}
            textRef={refRightBlocText}
          />
        </div>
      </div>

      {/* SKILLS */}
      <div style={{ padding: '0 200px' }}>
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
        <div className={styles.listOfProjects}>
          <div>
            <h3 className={styles.titleContainer}>The Projects</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
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