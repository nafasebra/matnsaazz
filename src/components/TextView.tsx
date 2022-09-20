import React from 'react'

function TextView() {
  return (
    <>
      <textarea className='w-full resize-none border-3' readOnly></textarea>
      <button className='w-full py-3'>کپی کن!</button>
    </>
  )
}

export default TextView