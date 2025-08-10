import React from 'react'

const Hero = () => {
  return (
    <div className='my-40 w-full flex-col items-center  flex justify-center '>
      <h1 className='text-5xl font-bold tracking-tight max-w-xl leading-tight text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500'>
      Unleash the power of intuitive finance
      

      </h1>
      <p className='max-w-2xl text-neutral-500 text-center mt-8 text-xl tracking-tight selection:bg-white '>
        Say goodbye to the outdated financial tools. Every small business owner,regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring
      </p>
      <div className='flex justify-center mt-8 w-full max-w-lg'>
          <input
          type='text'
          className='rounded-2xl flex-1 mr-4 px-4 py-2 border border-neutral-600 placeholder:text-neutral-500 text-white focus:outline-none focus:ring-1 focus:ring-sky-500 transition-duration-200'
          placeholder="Enter your Email"
          >
          
          </input>
        <button className='relative rounded-2xl py-2 px-4 border border-neutral-700 text-white cursor-pointer'>
          <div className='absolute inset-x-0 -bottom-px  h-px w-full bg-gradient-to-r from-transparent via-sky-600 to-transparent '>
          </div>
           Join the Waitlist
          </button> 
      </div>
    
    </div>
  )
}

export default Hero
