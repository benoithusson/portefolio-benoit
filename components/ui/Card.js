import React from 'react'
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

export default function Card(props) {

    return (
        <div className={props.classCard} ref={props.refCard} key={uuidv4()}>
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
