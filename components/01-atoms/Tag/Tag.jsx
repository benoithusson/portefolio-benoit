import React from 'react'

export default function Tag(props) {
  const {
    stackName,
    padding,
    margin,
    minWidth,
    height,
    backgroundColor,
    color,
    borderRadius,
  } = props

  const tagStyle = {
    padding: padding ? padding : '0 15px',
    margin: margin ? margin : '0 5px 5px 0',
    minWidth: minWidth ? minWidth : '15%',
    height: height ? height : '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor ? backgroundColor : 'white',
    color: color ? color : 'black',
    borderRadius: borderRadius ? borderRadius : '50px',
  }

  return <div style={tagStyle}>{stackName}</div>
}
