import React from 'react'
import styles from './Link.module.scss'

export default function CustomLink(props) {
    const {
        hrefLink,
        textLink,
        ref
    } = props;

    return (
        <>
            <a className={styles.link} href={hrefLink} target="_blank" rel="noopener noreferrer" ref={ref}>
                {textLink}
            </a>
        </>
    )
}
