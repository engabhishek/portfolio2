import React from 'react'

const Box = (data) => {
  return (
    <>
    <div className='box bg-blue-950 inline-block py-1 px-2 rounded-md text-white text-xl '>
        <p>{data.text}</p>
    </div>
    </>
  )
}

export default Box