import React from 'react'
import CheckMark from './CheckMark'

const CheckBox = ({action, inputContainer, inputLayout, id, label, labelStyle}) => {
  return (
    <div className={inputContainer}>
      <div 
        className={inputLayout}
        onClick={action}
      >
        <span
            className={labelStyle}
        >{label}</span>
        <div className='check-box'>
          {id && <CheckMark />}
        </div>
      </div>
    </div>
  )
}

export default CheckBox