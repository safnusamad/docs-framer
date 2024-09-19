import React from 'react'
import Foreground from './Foreground'

const Background = () => {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
      <h5 className=' absolute mt-9 left-1/2 -translate-x-[50%] text-sm text-white'>Documents.</h5>
      <h1 className=' absolute tracking-tight left-1/2 top-1/2 -translate-y-[50%] -translate-x-[50%] text-9xl'>Docs.</h1>
    </div>
    
    </>
  )
}

export default Background