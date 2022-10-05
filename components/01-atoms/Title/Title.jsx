import React from 'react'

export default function Title(props) {
  const {
    title,
    containerPadding,
    containerMaxWidth,
    containerBorderB,
    containerBgColor,
    titleFontWeight,
    titleFontSize,
    titleMargin,
    titleColor,
  } = props

  const styleContainer = {
    padding: containerPadding ? containerPadding : '0 0 20px 0',
    maxWidth: containerMaxWidth ? containerMaxWidth : '150px',
    borderBottom: containerBorderB ? containerBorderB : '1px solid red',
    backgroundColor: containerBgColor ? containerBgColor : 'none',
  }

  const styleTitle = {
    fontWeight: titleFontWeight ? titleFontWeight : '100',
    fontSize: titleFontSize ? titleFontSize : '1.875rem',
    margin: titleMargin ? titleMargin : '0',
    color: titleColor ? titleColor : 'white',
  }

  return (
    <div style={styleContainer}>
      <h3 style={styleTitle}>{title}</h3>
    </div>
  )
}
