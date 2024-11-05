import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
 import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

function Footer() {
  return (
    <div className=" flex flex-col justify-center items-center w-svw h-svh bg-[url(footerBg.jpeg)] bg-cover bg-center">
      <div className=' flex flex-col justify-between w-[85%] h-[85%] bg-gradient-to-br from-gray-200 via-gray-400 to-gray-700 rounded-lg shadow-lg'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-32'>
        <div className='flex justify-between'>
        <div className='ml-[5rem] mt-[1.5rem]'>
        <h1 className=' font-playfair text-[6rem] p-0'>Envius</h1>
        <p className=' font-mono text-[16px] -mt-7 ml-1 '>Your one shop stop for u to trade,mint and explore Nfts<br></br>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>
      </div>
      <div className='ml-[5rem] flex gap-32'>
        <div className='flex flex-col gap-3'>
        <h1 className=' font-playfair text-[20px] font-semibold mb-[8px] p-0'>Connect</h1>
        <p className='font-assistant'>Wallet</p>
        <p className='font-assistant'>Sign-In</p>
        <p className='font-assistant'>Log-In</p>
        </div>
        <div className='flex flex-col  gap-3'>
        <h1 className=' font-playfair font-semibold text-[20px] mb-[8px] p-0'>Trending</h1>
        <p className='font-assistant'>Lorem ipsum</p>
        <p className='font-assistant'>Lorem ipsum</p>
        <p className='font-assistant'>Lorem ipsum</p>
        </div>
        <div className='flex flex-col  gap-3'>
        <h1 className=' font-playfair font-semibold text-[20px] mb-[8px] p-0'>Mint</h1>
        <p className='font-assistant'>Lorem ipsum</p>
        <p className='font-assistant'>Lorem ipsum</p>
        <p className='font-assistant'>Lorem ipsum</p>
        </div>
        <div className='flex flex-col  gap-3'>
        <h1 className=' font-playfair font-semibold text-[20px] mb-[8px] p-0'>Contact</h1>
        <p className='font-assistant hover:backdrop-blur-lg'>sakshat1905@gmail.com</p>
        <p className='font-assistant'>akshatpersonal321@gmail.com</p>
        </div>
        </div>
      </div>
      <div className='flex flex-col mr-[4rem] mt-[4rem]'>
      <FontAwesomeIcon icon={faInstagram} className=" transition-all size-10 pb-28 text-gray-400 pl-1 hover:scale-110 hover:pb-28  hover:cursor-pointer" />
      <FontAwesomeIcon icon={faXTwitter} className=" transition-all size-10 pb-28 text-gray-700 pl-1 hover:scale-110 hover:pb-28  hover:cursor-pointer" />
      <FontAwesomeIcon icon={faEnvelope} className=" transition-all size-10 pb-28 text-gray-700 pl-1 hover:scale-110 hover:pb-28 hover:cursor-pointer" />
      <FontAwesomeIcon icon={faPaperPlane} className=" transition-all size-10 text-gray-400 pl-1 hover:scale-110 hover:cursor-pointer" />
      </div>
      </div>
      <div className='flex justify-center items-center w-full h-7 mt-18 bg-zinc-800 text-gray-300 text-xs'>© 2024 Envius. All rights reserved</div>
      </div>
      </div>

  )
}

export default Footer