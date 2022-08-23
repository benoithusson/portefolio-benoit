import React from 'react'
import Link from 'next/link'
import styles from '../../styles/components/Header.module.scss'

const Header = () => {
  return (
    <>
      <div className={styles.header__container}>
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
