import Image from 'next/image'
import React from 'react'
import { ArrowRight, Search } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
  useGSAP(() => {
    gsap.to('.animated-circle', {
      y: 30,
      repeat: -1,
      yoyo: true,
      duration: 0.9,
      yoyoEase: true
    })
  })

  return (
    <div className='h-[100vh] bg-white'>
      <div className='bg flex flex-col pt-28 gap-y-4 items-center h-full'>
        <div className='w-full text-center'>
          <h1 className='text-[3rem] md:text-[6rem] font-playfair-display font-bold text-main tracking-wider'>
            SERVICES
          </h1>
        </div>

        <div className='bg-[#f1f4f9] relative z-10 top-12 grid grid-cols-[50%_10%_40%] w-[80%] md:w-[650px] h-[60px] rounded-full shadow-lg'>
          <div className='items-center rounded-full pl-2 sm:pl-4 gap-x-1 sm:gap-x-2 grid grid-cols-[10%_80%]'>
            <div className=''>
              <Search 
                size={20}
                className='hidden sm:flex' 
              />
            </div>

            <div className='w-[100%]'>
              <input 
                type="text"
                className='rounded-full text-[0.8rem] sm:text-[1rem] py-2 px-4 shadow-md w-[100%] sm:w-[100%]'
                placeholder='Enter property' 
              />
            </div>

          </div>

          <div className='flex justify-center items-center'>
            <p>or</p>
          </div>

          <div className='flex justify-center items-center '>
            <button className='bg-main text-white py-2 px-2 sm:px-5 mx-1 text-[0.6rem] md:text-sm flex items-center gap-x-2 rounded-full shadow-md line-clamp-4'>
              BOOK AN APPOINTMENT
              <ArrowRight 
                size={20}
                className='hidden sm:flex' 
              />
            </button>
          </div>
        </div>

        <div className='w-[95%] md:w-[90%] rounded-lg h-[350px] shadow-xl bg-hero bg-cover bg-center'>

        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center'>
        <a href="#marketingPlan">
          <div className='w-[35px] h-[64px] opacity-90 rounded-3xl border-4 border-main flex justify-center items-start p-2'>
            <div className='w-3 h-3 opacity-90 rounded-full bg-main mb-1 animated-circle'></div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero