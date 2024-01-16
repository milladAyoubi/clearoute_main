import React from 'react'
import WhyImage from "../WhyImage.png"
const Why = () => {
  return (
    <section className='h-screen lg:h-[50vh] flex items-center' id='home'>
        <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:gap-x-8 lg:justify-between'>
            <div className='flex-1 flex items-center lg:justify-center'>
              <div className='lg:max-w-[520px]'>
                <p className=' text-accent/90 font-medium my-4 flex gap-x-1 text-[20px]'>Whats Netboks?</p>
                <h2 className='h2'>Why Join to Netbook Social Network?</h2>
                <p>Recent surveys have indicated that small  businesses <br></br> recognise the need they have to connect with consumer.</p>
              </div>
            </div>

            <div className='flex-1 mb-8 lg:mb-0'>
            <img src={WhyImage} alt="" />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Why