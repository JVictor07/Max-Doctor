import React from 'react'
import './Icon.scss'

const UIIcon = ({text, img_src, img_alt}) => (
  <div className="icon">
    <img className="icon__image" src={img_src} alt={img_alt} />
    <span className="icon__text">{text}</span>
  </div>
)

export default UIIcon