import React from 'react'

const CallToAction = () => {
  return (
    <div className='h-[70vh] bg-cta-img bg-cover text-white'>

      <div className='bg-cta-gradient backdrop-blur-sm w-[100%] h-[100%] px-20 flex flex-col items-center justify-center gap-y-10 text-center'>
        <div>
          <h1 className='capitalize font-playfair-display text-[3.5rem]'>
            work with us
          </h1>
        </div>
          
        <div>
          <p>
            With decades of experience in luxurious Tri Valley real estate, our team is here to ensure that your dreams are a reality. Let us guide you through your home buying journey, contact us today!
          </p>
        </div>

        <div>
          <button className='capitalize bg-white text-main px-8 py-2 rounded-sm font-bold'>contact us</button>
        </div>
      </div>
    </div>
  )
}

export default CallToAction