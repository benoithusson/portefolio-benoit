import React from 'react';

const Card = (props) => {

    const {
        classCard,
        containerRef,
        classTextCard,
        textCard,
        refCard
    } = props;

    return (
        <>
            <div className={classCard} ref={containerRef} ref={refCard}>
                <p className={classTextCard}>{textCard}</p>
            </div>
        </>
    )
}

export default Card;