import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {

    const {
        textCard,
        refCard
    } = props;

    return (
        <>
            <div className={styles.containerCard} ref={refCard}>
                <p className={styles.textCard}>{textCard}</p>
            </div>
        </>
    )
}

export default Card;