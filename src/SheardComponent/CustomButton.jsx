import React from 'react'

export default function CustomButton({
  label,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) {
  return (
    <div>
      <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className}`}
    >
      {label}
    </button>
       
    </div>
  )
}
