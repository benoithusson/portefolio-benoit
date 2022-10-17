import React from 'react';
import styles from './Card.module.scss';
import CustomLink from '../Link/Link'

const Card = (props) => {

    const {
        text,
        title,
        ref,
        textLink,
        hrefLink
    } = props;

    return (
        <>
            <div className={styles.containerCard} ref={ref}>
                {title &&
                    <div className={styles.containerTitle}>
                        <h2 className={styles.title}>{title}</h2>
                    </div>
                }
                {text &&
                    <div className={styles.containerText}>
                        <p className={styles.text}>{text}</p>
                    </div>
                }
                {hrefLink &&
                    <div className={styles.containerLink}>
                        <CustomLink hrefLink={hrefLink} textLink={textLink} />
                    </div>
                }
            </div>
        </>
    )
}

export default Card;