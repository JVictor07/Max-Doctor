import React from 'react'
import Ink from 'react-ink'
import './Button.scss'

const Button = ({text, type}) => (
  <button type={type} class="button">
    {text}
    <Ink />
  </button>
)

export default Button