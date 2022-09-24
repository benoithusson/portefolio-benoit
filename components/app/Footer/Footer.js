import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer__top}>
          <div className={styles.footer__brand}>Brand</div>
          <ul className={styles.footer_nav}>
            <li className={styles.nav__item}>
              <a>Lien 1</a>
            </li>
            <li className={styles.nav__item}>
              <a>Lien 2</a>
            </li>
            <li className={styles.nav__item}>
              <a>Lien 3</a>
            </li>
            <li className={styles.nav__item}>
              <a>Lien 4</a>
            </li>
          </ul>
          <div className={styles.footer__socials}>
            <a>Linkedin</a>
            <a>Twitter</a>
            <a>Facebook</a>
            <a>Instagram</a>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.footer__copyright}>
            <span>&copy; 2022 Name of the company</span>
          </div>
          <div className={styles.footer__legals}>
            <a>Impressum</a>
            <a>Legals</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
