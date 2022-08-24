import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger' // https://greensock.com/forums/topic/29801-getting-error-cannot-use-import-statement-outside-a-module-when-importing-flip/
import styles from '../styles/pages/Home.module.scss'
import skills from '../data/skills'
import List from '../components/ui/List'
import Card from '../components/ui/Card'
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger)

export default function Home(props) {
  // Ref Bloc Presentation
  const ref_left_home_card = useRef()
  const ref_right_home_card = useRef()
  const ref_left_home_card_content = useRef()
  const ref_right_home_card_content = useRef()
  const ref_scroll = useRef()
  const ref_skills_container = useRef()

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

  }, [])

  return (
    <>
      <div className={styles.homeContainer}>
        {/* HERO CARDS */}
        <div className={styles.leftPresentationBloc} ref={ref_left_home_card}>
          {/* <Card
            classCard={ref_left_home_card}
            classText={styles.leftContent}
            refText={ref_left_home_card_content}
            text={['Frontend &', <br />, 'UX']}
          /> */}
        </div>
        <div className={styles.rightPresentationBloc} ref={ref_right_home_card}>
          {/* <Card
            classCard={ref_right_home_card}
            classText={styles.rightContent}
            refText={ref_right_home_card_content}
            text={`My name is Benoît Thiennard. I am Frontend Developer with UX Skills.
            I speak Français, English und Deutsch. I am a fan of Xtrem Sports.`}
          /> */}
        </div>
      </div>

      {/* SCROLL */}
      <div className={styles.scrollContainer} ref={ref_scroll}>
        {/* <Card
          pathImage="/arrow-down.svg"
          widthImage={15}
          heightImage={15}
          altImage="arrow to indicate you to scroll down to continue to visit the page"
          classText={styles.scrollTextContainer}
          text="Scroll"
        /> */}
      </div>

      {/* SKILLS LIST */}
      <div className={styles.skillsContainer} ref={ref_skills_container}>
        {
          skills.map((skill, id) => (
            <List
              listItemContainer={styles.skill}
              listItemKey={id}
              pathImage={skill.path_logo}
              widthImage={60}
              heightImage={60}
              altImage={skill.alt}
              listItemName={styles.skillContainerText}
              item={skill.name}
              key={id}
            />
          ))
        }
      </div>
    </>
  )
}