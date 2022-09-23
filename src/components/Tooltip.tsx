import React from 'react'

type PropType = {
    text: string;
}

function Tooltip() {
  return (
    <div className='hidden md:flex absolute group -top-5 left-[50%] -translate-x-1/2 translate-y-1 text-sm ronded-md bg-dark text-white py-1 px-2 group-hover:translate-y-0 group-hover:opacity-100'>Tooltip</div>
  )
}

export default Tooltip