import React from 'react'
import Header from './app/Header/Header'
import Footer from './app/Footer/Footer'
import styles from './Default.module.scss'

const DefaultLayout = (props) => {
  return (
    <>
      <Header />
      <div className={styles.page_wrapper}>{props.children}</div>
      <Footer />
    </>
  )
}

export default DefaultLayout
