import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { buyingProcesses, sellingProcesses } from '@/constants'

gsap.registerPlugin(ScrollTrigger)

const ProcessSelling = () => {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const leftElement = leftRef.current;
    const rightElement = rightRef.current;

    // Pinning the left div while the right div scrolls
    ScrollTrigger.create({
      trigger: leftElement,
      start: 'top top',
      end: 'bottom bottom',
      pin: rightElement,
    })



  }, [])


  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-[95%] md:w-[90%] lg:w-[1000px] xl:w-[1100px]'>
        <div className='h-[10vh]'>
        </div>

        <div className='grid grid-cols-2 gap-x-4'>

          <div 
            className='overflow-auto' 
            ref={leftRef}
          >
            {buyingProcesses.map((process) => (
              <div 
                className='h-screen flex flex-col justify-center items-center gap-y-5 px-2 sm:px-8 lg:px-20'
                key={process.stepNumber}
              >
                <div className='min-h-[50vh] w-[95%] text-main hover:bg-main hover:text-white transition-all flex flex-col justify-evenly border-[1px] rounded-lg'>
                  <div className='flex justify-center items-center'>
                    <h1 className='text-[4rem] sm:text-[5rem] font-playfair-display font-bold'>{process.stepNumber}</h1>
                  </div>

                  <div className='flex justify-center text-center px-10 '>
                    <h3 className='capitalize font-playfair-display font-bold text-[1rem] sm:text-[1.5rem]'>{process.stepTitle}</h3>
                  </div>
                </div>
              
              </div>
            ))}
          </div>

          <div 
            className='h-screen bg-main flex flex-col justify-center items-center '
            id='left'
            ref={rightRef}
          >
            <h1 className='font-playfair-display font-bold text-[2rem] sm:text-[4rem] text-center text-white px-2 sm:px-4'>The Buying Process</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProcessSelling