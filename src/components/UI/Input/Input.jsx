import React from 'react'

import './Input.scss'

const UIInput = ( {input_name, value, input_type, input_placeholder, onChange} ) => {
  return (  
    <label className="input">
      <span className="input__name">{input_name}</span>
      <input 
        className="input__field"
        type={input_type}
        value={value}
        onChange={onChange}
        placeholder={input_placeholder}/>
    </label>
  )
}

export default UIInput
