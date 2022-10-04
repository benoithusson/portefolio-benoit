import React from 'react'
import styles from './Tag.module.scss'

export default function Tag(props) {

    const { stackName } = props;

    return (
        <div className={styles.tag}>
            {stackName}
        </div>
    )
}
