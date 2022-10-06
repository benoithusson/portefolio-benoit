import React from 'react'
import Image from 'next/image'
import styles from './List.module.scss'

export default function List(props) {
  const { imageSrc, alt, text } = props

  return (
    <div className={styles.wrapperSkill}>
      {imageSrc && (
        <div className={styles.containerImage}>
          <Image
            src={imageSrc}
            width={90}
            height={70}
            alt={alt ? alt : 'no description available'}
            quality={100}
          />
        </div>
      )}
      {text && (
        <div className={styles.containerText}>
          <p className={styles.text}>{text}</p>
        </div>
      )}
    </div>
  )
}
