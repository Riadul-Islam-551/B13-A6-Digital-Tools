import React from 'react'

const States = () => {
  return (
    <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa]'>
      <div className='max-w-300 mx-auto p-12 text-white grid grid-cols-1 md:grid-cols-3 gap-3 text-center'>
        <div>
            <h1 className='font-extrabold text-5xl lg:text-7xl my-5'>50K+</h1>
            <p className='text-lg text-[#E6E6E6]'>Active Users</p>
        </div>
        <div>
            <h1 className='font-extrabold text-5xl lg:text-7xl my-5'>200+</h1>
            <p className='text-lg text-[#E6E6E6]'>Premium Tools</p>
        </div>
        <div>
            <h1 className='font-extrabold text-5xl lg:text-7xl my-5'>4.9</h1>
            <p className='text-lg text-[#E6E6E6]'>Rating</p>
        </div>
      </div>
    </div>
  )
}

export default States
