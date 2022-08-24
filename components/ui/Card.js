import React from 'react'
import Image from 'next/image';

export default function Card(props) {
    return (
        <div className={props.classCardContainer} ref={props.refCardContainer} key={props.keyElement}>
            {
                props.pathImage &&
                <Image
                    src={props.pathImage}
                    width={props.widthImage}
                    height={props.heightImage}
                    alt={props.altImage}
                />
            }
            {
                props.textCard &&
                <div className={props.classContainerTextCard} ref={props.refContainerTextCard}>
                    <p>{props.textCard}</p>
                </div>
            }
            {
                props.title &&
                <h3 className={props.titleClass} ref={props.titleRef}>{props.title}</h3>
            }
        </div >
    )
}
