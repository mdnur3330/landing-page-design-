import React from 'react'

export default function CustomButton({
  label,
  className = '',
  type = 'button',

}) {
  return (
    <div>
      <button
      type={type}
      className={`${className}`}
    >
      {label}
    </button>
       
    </div>
  )
}
