import React from 'react'
import styles from './Footer.module.scss'
import Card from '../../01-atoms/Card/Card'
import Title from '../../01-atoms/Title/Title'

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer__top}>
          <ul className={styles.footer_nav}>
            <li className={styles.nav__item}>
              <Card hrefLink="mailto:benoit.husson.tours@gmail.com" textLink="benoit.husson.tours@gmail.com" />
            </li>
            <li className={styles.nav__item}>
              <Card hrefLink="tel:+33762218503" textLink="+33 7 62 21 85 03" />
            </li>
            <li className={styles.nav__item}>
              <Card hrefLink="https://www.linkedin.com/in/benoit-husson-de-fr/" textLink="Linkedin" />
            </li>
            <li className={styles.nav__item}>
              <Card hrefLink="https://github.com/benoithusson" textLink="GitHub" />
            </li>
          </ul>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.footer__copyright}>
            <span>&copy; 2022 Benoît Husson / Thiennard</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
