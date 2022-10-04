import React from 'react';

const Card = (props) => {

    const {
        classCard,
        containerRef,
        classTextCard,
        textCard
    } = props;

    return (
        <>
            <div className={classCard} ref={containerRef}>
                <p className={classTextCard}>{textCard}</p>
            </div>
        </>
    )
}

export default Card;