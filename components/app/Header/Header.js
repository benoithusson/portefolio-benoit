import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import gsap from 'gsap'

const Header = () => {

  const ref_header = useRef(null)

  useEffect(() => {
    const el_header = ref_header.current

    gsap.fromTo(el_header,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: 'Power2.easeIn' }
    )

  }, [])


  return (
    <>
      <div className={styles.header__container} ref={ref_header}>
        <div className={styles.header}>
          <div className={styles.header__brand}>
            <Link href="/">
              <a>Benoît Thiennard</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
