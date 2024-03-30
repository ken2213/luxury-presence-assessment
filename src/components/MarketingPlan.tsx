"use client"

import { Flag, ImageIcon, Mail, MailCheck, MapPinnedIcon } from 'lucide-react'
import Image from 'next/image'
import page3 from '/public/page-3.webp'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { homeDecorImages } from '@/constants'
import testPano from '/public/panoramic/Test_Pano.jpg'
import dynamic from 'next/dynamic'
import openHouse from '/public/open_house.webp'
import propertySearch from "/public/property_search.jpg";

const ReactPhotoSphereViewer = dynamic(
  () =>
    import('react-photo-sphere-viewer').then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false,
  }
);

const MarketingPlan = () => {
  return (
    <div 
      className='min-h-[100vh] bg-white pt-20 text-main'
      id='marketingPlan'
    >
      <div className='w-full flex flex-col justify-center '>
        <div className='flex justify-center text-center'>
          <h1 className='font-playfair-display text-[1.5rem] sm:text-[2.5rem] py-20 font-semibold tracking-wider text-main'>
            COMPREHENSIVE MARKETING PLAN
          </h1>
        </div>

        <div className='w-full flex justify-center'>
          <div className='w-[95%] md:w-[80%] lg:w-[900px] flex flex-col gap-y-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 text-center'>

              <div className='rounded-md border-[1px] shadow-sm hover:shadow-lg transition-all'>

                <div className='w-full flex justify-center py-5'>
                  <MailCheck size={60} />
                </div>

                <div className='py-4 px-2 flex flex-col gap-y-4'>
                  <div className='flex justify-center text-[1.5rem]'>
                    <h2 className='font-playfair-display tracking-wider'>Responsive</h2>
                  </div>

                  <div className='flex justify-center min-h-[10vh]'>
                    <p className='text-sm'>
                      I am always available via phone, text, or email
                    </p>
                  </div>
                </div>

              </div>

              <div className='rounded-md border-[1px] shadow-sm hover:shadow-lg transition-all'>

                <div className='w-full flex justify-center py-5'>
                  <Flag size={60} />
                </div>

                <div className='py-4 px-6 flex flex-col gap-y-4'>
                  <div className='flex justify-center text-[1.5rem]'>
                    <h2 className='font-playfair-display tracking-wider'>Syndication</h2>
                  </div>

                  <div className='flex justify-center min-h-[10vh]'>
                    <p className='text-sm'>
                    I market your property locally, nationally, and internationally
                    </p>
                  </div>
                </div>
                
              </div>
            </div>

            <div className='rounded-xl shadow-md hover:shadow-lg transition-all'>
              <Image 
                src={page3}
                alt='Realtor Image'
                className='rounded-xl'
              />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 text-center'>
              <div className='rounded-md border-[1px] shadow-sm hover:shadow-lg transition-all'>
                <div className='w-full flex justify-center py-5'>
                  <MapPinnedIcon size={60} />
                </div>

                <div className='py-4 px-6 flex flex-col gap-y-4'>
                  <div className='flex justify-center text-[1.5rem]'>
                    <h2 className='font-playfair-display tracking-wider'>Virtual Tour</h2>
                  </div>

                  <div className='flex justify-center min-h-[10vh]'>
                    <p className='text-sm'>
                      Let&apos;s make your home stand out with a high quality virtual tour.
                    </p>
                  </div>
                </div>
              </div>

              <div className='rounded-md border-[1px] shadow-sm hover:shadow-lg transition-all'>

                <div className='w-full flex justify-center py-5'>
                  <ImageIcon size={60} />
                </div>

                <div className='py-4 px-6 flex flex-col gap-y-4'>
                  <div className='flex justify-center  text-[1.5rem]'>
                    <h2 className='font-playfair-display tracking-wider'>Photography</h2>
                  </div>

                  <div className='flex justify-center min-h-[10vh]'>
                    <p className='text-sm'>
                    Beatiful, high-end photography is a central part of our marketing plan for your property.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center py-20'>
        <div className='w-[95%] md:w-[80%] lg:w-[900px] '>
          
          <div className='grid grid-cols-1 grid-rows-[300px] sm:grid-cols-2 text-center '>

            <div className='bg-main text-white text-[2rem] tracking-wide flex justify-center items-center hover:bg-white hover:text-main transition-all hover:text-[2.5rem] hover:tracking-wider'>
              <h1 className='font-playfair-display font-bold'>Decor Guidance</h1>
            </div>

            <div className=''>
              <Carousel 
                infiniteLoop
                autoPlay
                showThumbs
                showArrows={false}
                showIndicators
                className=''
                
              >
                {homeDecorImages.map((homeDecorImage) => (
                    <Image
                      key={homeDecorImage.id}
                      src={homeDecorImage.image}
                      alt={`${homeDecorImage.image}'s image`}
                      className='object-cover w-[100px] h-[300px]'
                    />
                ))}
              </Carousel>
            </div>
          </div>



          <div className='grid grid-cols-1 grid-rows-[300px] sm:grid-cols-2 text-center'>

            <div className='bg-main text-white text-[2rem]  tracking-wide flex justify-center items-center hover:bg-white hover:text-main transition-all hover:text-[2.5rem] hover:tracking-wider'>
              <h1 className='font-playfair-display font-bold'>Virtual Tours</h1>
            </div>

            <div className='sm:order-first '>
              <ReactPhotoSphereViewer 
                src='/panoramic/living-room-panoramic.jpg'
                height={'300px'}
                width={'100%'}
                littlePlanet={false}

              >
              </ReactPhotoSphereViewer>
            </div>
          </div>



          <div className='grid grid-cols-1 grid-rows-[300px] sm:grid-cols-2 text-center '>

            <div className='bg-main text-white text-[2rem]  tracking-wide flex justify-center items-center hover:bg-white hover:text-main transition-all hover:text-[2.5rem] hover:tracking-wider'>
              <h1 className='font-playfair-display font-bold'>Open House</h1>
            </div>

            <div className='bg-red-800'>
              <Image 
                src={openHouse}
                alt='Open House Image'
                className='object-cover h-[300px]'
              />
            </div>
          </div>



          <div className='grid grid-cols-1 grid-rows-[300px] sm:grid-cols-2 text-center'>

            <div className='bg-main text-white text-[2rem]  tracking-wide flex justify-center items-center hover:bg-white hover:text-main transition-all hover:text-[2.5rem] hover:tracking-wider'>
              <h1 className='font-playfair-display font-bold'>Property Search</h1>
            </div>

            <div className='sm:order-first'>
              <Image 
                src={propertySearch}
                alt='Property Search Image'
                className='object-cover h-[300px]'
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MarketingPlan