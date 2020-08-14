import React from 'react'
import Ink from 'react-ink'
import './Button.scss'

const Button = ({text, type}) => (
  <button type={type} className="button">
    {text}
    <Ink />
  </button>
)

export default Button