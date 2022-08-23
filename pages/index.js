import { useRef, useEffect, useState } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger' // https://greensock.com/forums/topic/29801-getting-error-cannot-use-import-statement-outside-a-module-when-importing-flip/
import gsap from 'gsap'
import styles from '../styles/pages/Home.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function Home(props) {
  // Ref
  const ref_presentation_bloc_left = useRef()
  const ref_presentation_bloc_right = useRef()
  const ref_title_bloc_left = useRef()
  const ref_title_bloc_right = useRef()
  const ref_button = useRef()

  // Animation switch
  const [stateAnimation, setStateAnimation] = useState('off')

  const handleClick = () => {
    stateAnimation === 'off' ? setStateAnimation('on') : setStateAnimation(null)
  }

  useEffect(() => {
    // const el_home_container = ref_home_container.current
    const el_presentation_bloc_left = ref_presentation_bloc_left.current
    const el_presentation_bloc_right = ref_presentation_bloc_right.current
    const el_title_bloc_left = ref_title_bloc_left.current
    const el_title_bloc_right = ref_title_bloc_right.current
    const el_button = ref_button.current

    // Display button on page load
    gsap.to(
      el_button,
      {
        opacity: 1,
        duration: 1,
        ease: 'Power2.easeIn',
      },
    )

    // Trigger animation if click on btn
    if (stateAnimation === 'on') {
      // Make btn disappears on click
      gsap.to(
        el_button,
        {
          opacity: 0,
          display: 'none',
          duration: 0.2,
        })

      // Animation bloc left
      gsap.to(
        el_presentation_bloc_left,
        {
          display: 'flex',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          ease: 'Power2.easeIn',
          duration: 1,
        })

      // Animation title left
      gsap.fromTo(
        el_title_bloc_left,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: 'Power2.easeIn' },
      )

      // Animation bloc right
      gsap.to(
        el_presentation_bloc_right,
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

      // Animation title right
      gsap.fromTo(
        el_title_bloc_right,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: 'Power2.easeIn' },
      )
    }
  }, [stateAnimation])

  return (
    <div className={styles.homeContainer}>
      <div
        className={styles.leftPresentationBloc}
        ref={ref_presentation_bloc_left}
      >
        <h3 className={styles.leftContent} ref={ref_title_bloc_left}>
          Frontend & <br />UX
        </h3>
      </div>
      <div
        className={styles.rightPresentationBloc}
        ref={ref_presentation_bloc_right}
      >
        <h3 className={styles.rightContent} ref={ref_title_bloc_right}>
          My name is Benoît Thiennard. I am Frontend Developer with UX Skills.
          I speak Français, English und Deutsch. I am a fan of Xtrem Sports.
        </h3>
      </div>
      <button className={styles.button} ref={ref_button} onClick={handleClick}>
        CLICK
      </button>
    </div>
  )
}