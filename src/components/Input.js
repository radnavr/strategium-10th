import React from 'react'

const Input = (
  {
    id, 
    inputContainer, 
    inputLayout, 
    inputStyle, 
    label, 
    labelStyle, 
    onChange,
    onClick, 
    placeholder, 
    type, 
    value
  }
) => 
{
  return (
    <div className={inputContainer}>
      <div className={inputLayout}>
          <label
              htmlFor={id}
              className={labelStyle}
          >{label}</label>
          <input
            autoComplete='off'
            className={inputStyle}
            id={id}
            onChange={onChange}
            onClick={onClick}
            placeholder={placeholder} 
            type={type}
            value={value}
          />
      </div>
    </div>
  )
}

export default Input