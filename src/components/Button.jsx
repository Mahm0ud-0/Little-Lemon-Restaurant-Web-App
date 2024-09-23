import React from 'react'

function Button( {text, size, onClick, type, disabled, className} ) {
  return (
    <button onClick={onClick} type={type || 'button'} disabled={disabled} className={`${className} bg-secondary text-accent hover:bg-accent hover:text-secondary disabled:opacity-60 disabled:hover:bg-secondary disabled:hover:text-accent py-3 px-4 rounded-2xl flex justify-center items-center text-lg font-semibold transition ${size === 'lg' ? 'w-[300px] text-xl' : size === 'sm' ? 'w-[90px] py-2 px-3' : 'w-[200px]'}`}>
        {text}
    </button>
  )
}

export default Button