import Image from 'next/image'
import React from 'react'

import realtorExp from '/public/realtor-exp.webp';
import realtorStrategy from '/public/realtor-strategy.webp';
import realtorTablet from '/public/realtor-tablet.webp';

const RealtorInfo = () => {
  return (
    <div className='min-h-[100vh] bg-white py-[150px]'>
      <div className='w-full flex flex-col items-center'>
        <div className='w-[95%] md:w-[80%] lg:w-[900px] '>

          <div className='grid grid-cols-1 sm:grid-cols-2 mb-12 rounded-md bg-main-50 min-h-80 shadow-lg gap-x-4'>
            <div className='px-4 py-10 flex flex-col items-center gap-y-6'>

              <div>
                <h1 className=' font-playfair-display text-[2rem] font-semibold text-main text-center'>Over 33 Years of Real Estate Success</h1>
              </div>

              <div className='flex flex-col gap-y-4'>
                <p className='text-main-800 text-center'>
                  We provide every one of our clients with a level of service they won’t find anywhere else. We give them what they need, often before they know they need it. 
                </p>
                <p className='text-main-800 text-center'>
                  ​​​​​​​In real estate, almost everything can be negotiated. When you choose Hansen Partners It is experience is 100% nonnegotiable. ​​​​​​​ ​​​​​​​And it’s an experience like no other.
                </p>
              </div>

            </div>

            <div className='pr-4 flex justify-center items-center'>
              <Image 
                src={realtorExp}
                alt='realtor experience'
                className='object-contain object-right rounded-lg shadow-xl'
              />
            </div>
          </div>

          
          <div className='grid grid-cols-1 sm:grid-cols-2 mb-12 rounded-md bg-main-50 min-h-80 shadow-lg gap-x-4'>

            <div className='pl-4 flex justify-center items-center'>
              <Image 
                src={realtorStrategy}
                alt='realtor experience'
                className='object-contain object-right rounded-lg shadow-xl'
              />
            </div>

            <div className='px-4 py-10 flex flex-col items-center gap-y-6'>

              <div>
                <h1 className=' font-playfair-display text-[2rem] font-semibold text-main text-center capitalize'>committed For your memorable experience</h1>
              </div>

              <div className='flex flex-col gap-y-4'>
                <p className='text-main-800 text-center'>
                  We provide every one of our clients with a level of service they won’t find anywhere else. We give them what they need, often before they know they need it. 
                </p>
                <p className='text-main-800 text-center'>
                  ​​​​​​​In real estate, almost everything can be negotiated. When you choose Hansen Partners It is experience is 100% nonnegotiable. ​​​​​​​ ​​​​​​​And it’s an experience like no other.
                </p>
              </div>

            </div>


          </div>
          

          <div className='grid grid-cols-1 sm:grid-cols-2 mb-12 rounded-md bg-main-50 min-h-80 shadow-lg gap-x-4'>
            <div className='px-4 py-10 flex flex-col items-center gap-y-6'>

              <div>
                <h1 className=' font-playfair-display text-[2rem] font-semibold text-main text-center'>The Hansen Partners Communications Tablet</h1>
              </div>

              <div className='flex flex-col gap-y-5'>
                <p className='text-main-800 text-center'>
                  We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available at the with a click of your tablet. 
                </p>

                <div className='flex flex-col gap-y-2'>
                  <p className='text-main-800 text-center'>Benefits:</p>

                  <ul className='text-main-800 list-disc px-4 text-[0.9rem]'>
                    <li>
                      Review all documents and sign in the comfort of your home or anywhere.
                    </li>
                    <li>
                      Stay up to date on all marketing activities, review materials, photos, etc. in real time.
                    </li>
                    <li>
                      Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.
                    </li>
                    <li>
                      You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video message to us for fast communication using our Bomb bomb video messaging system.
                    </li>
                  </ul>
                </div>

                

                <p className='text-main-800 text-center'>
                  We will be here to handle your needs during the Real Estate process. We think of it before a need even arises. Because, that is just what we do. Who you work with does matter!
                </p>
              </div>

            </div>

            <div className='pr-4 flex justify-center items-center'>
              <Image 
                src={realtorTablet}
                alt='realtor experience'
                className='object-contain object-right rounded-lg shadow-xl'
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default RealtorInfo