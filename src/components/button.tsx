import React from 'react'

const Button = ({ text, type, onClick }: { text: string; type: string; onClick: () => void }) => {
  return (
    <div
      className={`rounded-sm py-1 px-2 text-sm outline-none w-24 text-gray-100 font-normal cursor-pointer flex items-center justify-center ${
        type === 'primary' && 'bg-darkCyan'
      }`}
      onClick={onClick}
      aria-hidden='true'
    >
      {text}
    </div>
  )
}

export default Button
