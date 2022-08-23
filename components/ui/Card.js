import React from 'react'

export default function Card(props) {
    return (
        <div className={props.classNameContainer} ref={props.refContainer}>
            {props.title && <h3 className={props.ClassNameTitle}>{props.title}</h3>}
        </div>
    )
}
