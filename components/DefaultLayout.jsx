import React from 'react'
import Footer from './04-templates/Footer/Footer'
import styles from './Default.module.scss'

const DefaultLayout = (props) => {
  return (
    <>
      <div className={styles.page_wrapper}>{props.children}</div>
      <Footer />
    </>
  )
}

export default DefaultLayout
