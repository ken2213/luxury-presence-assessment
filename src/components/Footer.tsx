import { footerLogos } from '@/constants'
import { Facebook, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (

    <div className='flex justify-center bg-main text-[#eef8ff] pt-[200px]'>
      <div className='h-[100vh] w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%]  '>
        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-x-12'>
          <div className='min-h-[80vh] flex flex-col justify-between'>

            <div className='flex flex-col gap-y-8'>
              <h1 className='text-main-100 font-playfair-display text-[2rem]'>
                Julie Hansen Partnership
              </h1>
              <p className='text-main-400 font-light text-[1rem] leading-7'>
                An elite group of the East Bay’s most talented and visionary real estate professionals believed buyers and sellers deserved more from their real estate company. More service. More resources. More integrity. More global reach. In a word, more of everything people should expect when they buy or sell their homes.
              </p>
            </div>


            <div className='flex flex-col gap-y-10'>

              <div className='flex flex-col gap-y-4'>
                <h1 className='font-semibold text-[1.2rem] text-main-300'>
                  ADDRESS
                </h1>
                
                <div className='flex flex-col gap-y-1 text-main-500'>
                  <p className='text-[0.9rem] font-light'>
                    4733 Chabot Drive #100 Pleasanton, CA 94588
                  </p>
                  <p className='text-[0.9rem] font-light'>
                    Julie Hansen-Orvis | CA DRE# 00934447
                  </p>
                </div>
              </div>

              <div className='flex flex-col gap-y-4'>
                <h1 className='font-semibold text-[1.2rem] text-main-300'>
                  CONTACT INFORMATION
                </h1>

                <div className='flex flex-col gap-y-8'>
                  <div className='flex flex-col gap-y-1 text-main-500'>
                    <p className='text-[0.9rem] font-light'>
                      (925) 553-6707
                    </p>
                    <p className='text-[0.9rem] font-light'>
                      luxuryhomesinwc@icloud.com
                    </p>
                  </div>
                  
                  <div className='flex gap-x-5'>
                    <div className='w-[40px] h-[40px] flex justify-center items-center bg-blue-700 rounded-full'>
                      <Facebook size={25} />
                    </div>
                    
                    <div className='w-[40px] h-[40px] flex justify-center items-center bg-blue-700 rounded-full'>
                      <LinkedinIcon size={25} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p>Webpage Revamped by</p>
                <Link 
                  href={"https://www.kennethornieta.tech/"}

                >
                  <p>Kenneth Ornieta</p>
                </Link>
              </div>

            </div>


          </div>

          <div className=' flex flex-col justify-between'>
            <div className='flex flex-col gap-y-12'>
              <div className='flex flex-col gap-y-8'>
                <h1 className='font-playfair-display text-[2rem]'>
                  Newsletter
                </h1>
                <p className='text-[1.2rem] font-normal tracking-wider'>
                  Subscribe to our Newsletter for latest news and updates. Stay tuned!
                </p>
              </div>

              <div className='flex flex-col gap-y-8'>
                <div>
                  <input 
                    type='text'
                    className='w-full pl-2 py-4 bg-inherit border-b-2'
                    placeholder='Enter your email'
                  />
                </div>
                <div>
                  <button className='border px-10 py-4 text-semibold tracking-widest hover:shadow-lg hover:bg-main-50 hover:text-main transition-all'>
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-y-10'>
              <div className='flex gap-x-10'>
                {footerLogos.map((logo) => (
                  <div className='w-[70px] bg-[#eef8ff] flex justify-center items-center px-3 py-2 rounded-sm'>
                    <Image
                      key={logo.id}
                      src={logo.image}
                      alt={`${logo.image}'s image`}
                      title={`${logo.image}'s image`}
                      className='object-cover'
                    />
                  </div>
                ))}
              </div>

              <div>
                <p>Copyright 2024 | Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer