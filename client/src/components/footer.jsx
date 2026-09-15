import React from 'react'

const footer = () => {
  return (
    <div className='bg[#f3f3f3] flex justify-center  px-4 pb-10 py-10'>
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow=sm border border-gray-200 py-8 px-3 text-center">

        <div className='flex justify-center items-center gap-3 mb-3'>
          <div className=' bg-black text-white p-2 rounded-lg'>
            <BsRobot size={16}/>
          </div>
          <h2 className='font-semibold'> AI Mock-Interview</h2>
             </div>
             <p className='text-gray-500 text-sm max-w-xl mx-auto'>
              AI powered interview preparation designed to improve communication
              skills, technical knowledge, and confidence. Get personalized feedback and guidance to help you succeed in your next interview.
             </p>

      </div>
    </div>
  )
}

export default footer
