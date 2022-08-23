import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import styles from '../styles/pages/Home.module.scss'
import Image from 'next/image';
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
// https://greensock.com/forums/topic/29801-getting-error-cannot-use-import-statement-outside-a-module-when-importing-flip/

gsap.registerPlugin(ScrollTrigger)

export default function Home(props) {
  // Ref
  const ref_left_home_card = useRef()
  const ref_right_home_card = useRef()
  const ref_left_home_card_content = useRef()
  const ref_right_home_card_content = useRef()
  const ref_scroll = useRef()

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
      { opacity: 1, duration: 2, ease: 'Power2.easeIn' },
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
      { opacity: 1, duration: 2, ease: 'Power2.easeIn' },
    )

    // Animation scroll element
    gsap.fromTo(el_scroll,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'Power2.easeIn' }
    )

  }, [])

  return (
    <>
      {/* Créer composant global pour chaque page ? */}
      <div className={styles.homeContainer}>
        {/* Créer composant réutilisable */}
        <div className={styles.leftPresentationBloc} ref={ref_left_home_card}>
          <h3 className={styles.leftContent} ref={ref_left_home_card_content}>
            Frontend & <br />UX
        </h3>
        </div>
        {/* Même composant */}
        <div className={styles.rightPresentationBloc} ref={ref_right_home_card}>
          <h3 className={styles.rightContent} ref={ref_right_home_card_content}>
            My name is Benoît Thiennard. I am Frontend Developer with UX Skills.
            I speak Français, English und Deutsch. I am a fan of Xtrem Sports.
        </h3>
        </div>
      </div>
      {/* Créer composant réutilisable */}
      <div className={styles.scrollContainer} ref={ref_scroll}>
        <div className={styles.scrollText}>Scroll</div>
        <div className={styles.scrollArrow}>
          <Image src="/arrow-down.svg" width={15} height={15} alt="arrow to indicate you to scroll down to continue to visit the page" />
        </div>
      </div>
    </>
  )
}