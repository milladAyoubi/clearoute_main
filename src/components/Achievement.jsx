import React from 'react'
import WhyImage from "../WhyImage.png"
import { reviews } from '../constants';
import { FaRegStar } from 'react-icons/fa';


import People from "../assets/img/People.png"
import Github from "../assets/img/Github.png"

const Achievement = () => {
  return (
    <section className='h-screen lg:h-[40vh] flex items-center' id='home'>
        <div className="container mx-auto">
        <div className='flex flex-col gap-[45px] lg:flex-row  ' data-aos="fade-up" data-aos-delay="3900" data-aos-duration="1200"   >

          
          <div className='py-12 px-6 shadow-primary cursor-pointer w-[400px] border-2 border-gray rounded-[20px]'  >
            
          <div className='flex flex-col justify-center gap-y-5'>


           <div className='flex items-center gap-x-4'>
              <FaRegStar className='text-[2rem]  text-accent'/>
              <h3 className='text-[20px]'>4.8 Rating</h3>
           </div>
            

         
             
              <div className='flex items-center gap-x-4'>
               <img src={People} alt="people" /> 
                <div><span className='text-accent font-bold text-[20px]'>+836K</span> Members</div>
              </div>
      

            <div>
              <div className='text-[20px] text-slate-500'>More than 2 billion we people over countries use socibooks we to stay in touch with friends.</div>
            </div>

            <div className='my-4'>
              <div className='text-accent font-medium'>Join Our Community</div>
            </div>

          </div>
        
          </div>


          <div className='py-12 px-6 shadow-primary cursor-pointer w-[400px] border-2 border-gray rounded-[20px]'  >
            
          <div className='flex flex-col justify-center gap-y-5'>


           <div className='flex items-center gap-x-4'>
              <FaRegStar className='text-[2rem]  text-accent'/>
              <h3 className='text-[20px]'>4.8 Rating</h3>
           </div>
            

         
             
              <div className='flex items-center gap-x-4'>
               <img src={People} alt="people" /> 
                <div><span className='text-accent font-bold text-[20px]'>+836K</span> Members</div>
              </div>
      

            <div>
              <div className='text-[20px] text-slate-500'>More than 2 billion we people over countries use socibooks we to stay in touch with friends.</div>
            </div>

            <div className='my-4'>
              <div className='text-accent font-medium'>Join Our Community</div>
            </div>

          </div>
        
          </div>
          
        
      
            <div className='flex flex-col gap-y-8'>
              <div className='lg:max-w-[520px]'>
                <p className=' text-accent/90 font-medium my-4 flex gap-x-1 text-[20px]'>Our Achievement</p>
                <h2 className='h2'>We are Connecting You The Digital Life.</h2>
                <p>The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.</p>
              </div>
              <button className=' bg-accent hover:bg-accent-hover rounded-[15px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[224px]'>
                  <div className='flex items-center justify-center gap-x-2'>
                    View Collection
                  </div>
              </button>
            </div>


          </div>
    
        </div>
    </section>
  )
}

export default Achievement