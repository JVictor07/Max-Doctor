import React from 'react'

import './Select.scss'

const UISelect = ( {name, options, onChange, selected, msg_default} ) => {
  return (  
    <label className="select">
      <span className="select__name">{name}</span>
      <select className="select__field" value={selected} onChange={onChange}>
        {!selected && <option value="">{msg_default}</option>}
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

export default UISelect
