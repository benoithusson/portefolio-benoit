import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import styles from '../styles/pages/Home.module.scss'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import skills from '../data/skills'
import Card from '../components/ui/Card'
import Image from 'next/image';
// https://greensock.com/forums/topic/29801-getting-error-cannot-use-import-statement-outside-a-module-when-importing-flip/

gsap.registerPlugin(ScrollTrigger)

export default function Home(props) {
  // Ref Hero Card
  const ref_left_home_card = useRef()
  const ref_right_home_card = useRef()
  const ref_left_home_card_content = useRef()
  const ref_right_home_card_content = useRef()
  const ref_scroll = useRef()

  // Ref Skills part
  const ref_skills_container = useRef()
  const ref_skill_container_logo = useRef()
  const ref_skill_container_text = useRef()

  useEffect(() => {
    const el_left_home_card = ref_left_home_card.current
    const el_right_home_card = ref_right_home_card.current
    const el_left_home_card_content = ref_left_home_card_content.current
    const el_right_home_card_content = ref_right_home_card_content.current
    const el_scroll = ref_scroll.current

    // Animation bloc left
    gsap.to(
      el_left_home_card,
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
      el_left_home_card_content,
      { opacity: 0 },
      { opacity: 1, duration: 2.5, ease: 'Power2.easeIn' },
    )

    // Animation bloc right
    gsap.to(
      el_right_home_card,
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
      el_right_home_card_content,
      { opacity: 0 },
      { opacity: 1, duration: 2.5, ease: 'Power2.easeIn' },
    )

    // Animation scroll element
    gsap.fromTo(el_scroll,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'Power2.easeIn' }
    )

  }, [])

  return (
    <>
      <div className={styles.homeContainer}>
        {/* HERO CARDS*/}
        <Card
          classCardContainer={styles.leftPresentationBloc}
          refCardContainer={ref_left_home_card}
          titleClass={styles.leftContent}
          titleRef={ref_left_home_card_content}
          title={['Frontend &', <br />, 'UX']}
        />
        <Card
          classCardContainer={styles.rightPresentationBloc}
          refCardContainer={ref_right_home_card}
          titleClass={styles.rightContent}
          titleRef={ref_right_home_card_content}
          title={`
            My name is Benoît Thiennard. I am Frontend Developer with UX Skills.
            I speak Français, English und Deutsch. I am a fan of Xtrem Sports.
          `}
        />
      </div>
      {/* SCROLL */}
      < Card
        classCardContainer={styles.scrollContainer}
        pathImage="/arrow-down.svg"
        widthImage={15}
        heightImage={15}
        altImage="arrow to indicate you to scroll down to continue to visit the page"
        textContainerClass={styles.scrollTextContainer}
        textCard="Scroll"
      />
      {/* SKILLS LIST */}
      {
        skills.map((skill, id) => (
          <Card
            classCardContainer={styles.skillsContainer}
            refCardContainer={ref_skills_container}
            keyElement={id}
            pathImage={`${skill.path_logo}`}
            altImage={`${skill.alt}`}
            widthImage={100}
            heightImage={100}
            classContainerTextCard={styles.skillContainerText}
            refContainerTextCard={ref_skill_container_text}
            textCard={`${skill.name}`}
          />
        ))
      }
    </>
  )
}