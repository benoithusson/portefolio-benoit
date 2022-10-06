import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {

    const {
        text,
        refCard,
        title
    } = props;

    return (
        <>
            <div className={styles.containerCard} ref={refCard}>
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
            </div>
        </>
    )
}

export default Card;