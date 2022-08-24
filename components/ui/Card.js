import React from 'react'
import Image from 'next/image';

export default function Card(props) {

    return (
        <div className={props.classCard} ref={props.refCard} key={props.keyCard}>
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
                props.text &&
                <div className={props.classText} ref={props.refText}>
                    <p>{props.text}</p>
                </div>
            }
        </div>
    )
}
