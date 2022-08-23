import React, { useEffect } from 'react'
import Header from './app/Header'
import Footer from './app/Footer'
import styles from '../styles/layouts/Default.module.scss'

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
