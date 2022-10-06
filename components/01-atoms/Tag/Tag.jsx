import React from 'react'
import styles from './Tag.module.scss'

export default function Tag(props) {

    const {
        stackName,
        padding,
        margin,
        maxWidth,
        backgroundColor,
        color,
        borderRadius
    } = props;

    const tagStyle = {
        padding: padding ? padding : '5px 10px',
        margin: margin ? margin : '10px 0 0 0',
        maxWidth: maxWidth ? maxWidth : '50%',
        backgroundColor: backgroundColor ? backgroundColor : 'white',
        color: color ? color : 'black',
        borderRadius: borderRadius ? borderRadius : '50px',
    }

    return (
        <div style={tagStyle}>
            {stackName}
        </div>
    )
}
