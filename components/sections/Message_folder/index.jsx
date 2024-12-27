"use client"


import Image from 'next/image'
import React from 'react'

const Message = () => {
  return (
<section className='' >
      <div className='container'>
        <div className=' flex'>
<div className="sm:w-[500px] h-[500px]">
    <Image src="/saleem.png" fill className="w-full h-full"/>
</div>
<div className="">
    <h1 className="text-4xl font-bold text-gray-800">Saleem</h1>
    <p className="text-gray-700">Software Engineer</p>
</div>
</div>
      </div>

</section>
  )
}

export default Message