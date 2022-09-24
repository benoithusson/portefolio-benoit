import React from 'react';

const Card = (props) => {

    const {
        classCard,
        containerRef,
        classTextCard,
        textRef,
        textCard
    } = props;

    return (
        <>
            <div className={classCard} ref={containerRef}>
                <p className={classTextCard} ref={textRef}>{textCard}</p>
            </div>
        </>
    )
}

export default Card;