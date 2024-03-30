import React from 'react'

const WhyUs = () => {
  return (
    <div className='h-[100vh] bg-emerald-300'>
      <div>
        <h1 className='text-center font-playfair-display capitalize text-[2rem]'>
          we market your home to the world
        </h1>
      </div>

      <div className='flex justify-center'>
        <div className='bg-red-500 w-[95%] md:w-[80%] lg:w-[900px] '>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-10'>
            <div className='px-4 flex flex-col justify-center items-center gap-y-4 text-main'>
              <h1 className='text-center capitalize text-[1.2rem] font-playfair-display font-semibold'>
                our online marketing strategy
              </h1>
              <p className='text-center text-sm'>
                The Bay Area remains one of the world's most sought-after regions to live in, and when looking to sell, it is vital that your home be marketed online to audiences locally, nationally, and internationally.
              </p>
            </div>

            <div className='px-4 flex flex-col justify-center items-center gap-y-4 text-main'>
              <h1 className='text-center capitalize text-[1.2rem] font-playfair-display font-semibold'>
              local exposure
              </h1>
              <p className='text-center text-sm'>
                Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all Bay Area neighborhoods, we make sure your home receives targeted local exposure. When you list your home with Hansen Partners it will automatically appear on Nextdoor in your neighborhood.
              </p>
            </div>
          </div>


          <div>
            <div>
              <h1>
                national exposure
              </h1>
              <p>
                We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure. We  will receive every inquiry about your property directly.
              </p>
            </div>

            <div>
              <h1>
                International exposure
              </h1>
              <p>
                To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real estate portals, including: Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, China.apr.com, Caimeiju, Juwai, Country Life UK
              </p>
            </div>
          </div>

          
        </div>

      </div>
    </div>
  )
}

export default WhyUs