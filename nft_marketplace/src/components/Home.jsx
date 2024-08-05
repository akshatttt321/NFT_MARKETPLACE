import React from 'react'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Cards from './Cards';
import { useState,useRef,useEffect } from 'react';
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function Home(){

  function time(){    
    const t = Math.floor(Math.random()*11)+5;
    return t;
  }

  function x(){
    const x = Math.floor(Math.random()*51)+50;
    return x
  }
  function y(){
  const y = Math.floor(Math.random()*51)+50;
    return y
  }
  function z(){
    const y = Math.floor(Math.random()*51)+50;
      return y
    }

  function keyframes(){
    const keyframes = `
    @keyframes bounce{
     0%,100%{
    transform: translate3d(${x()}px,${y()}px,${z()}px,);
  }
    50%{
    transform: translate3d(0,0,0);
    }
    }`
    return keyframes;
    }

    let Keyframes = keyframes();

    const[hover,SetHover]=useState(true);
    const[hover1,SetHover1]=useState(true);
    const[hover2,SetHover2]=useState(true);
    const[hover3,SetHover3]=useState(true);
    const[hover4,SetHover4]=useState(true);
    const[hover5,SetHover5]=useState(true);
    const[hover6,SetHover6]=useState(true);

    const onMouseOver = ()=>{
      SetHover1(false)
      SetHover2(false)
      SetHover3(false)
      SetHover4(false)
      SetHover5(false)
      SetHover6(false)
    }

    const onMouseOut = ()=>{
      SetHover1(true)
      SetHover2(true)
      SetHover3(true)
      SetHover4(true)
      SetHover5(true)
      SetHover6(true)
    }

    const onMouseOver1 = ()=>{
      SetHover(false)
      SetHover2(false)
      SetHover3(false)
      SetHover4(false)
      SetHover5(false)
      SetHover6(false)
    }

    const onMouseOut1 = ()=>{
      SetHover(true)
      SetHover2(true)
      SetHover3(true)
      SetHover4(true)
      SetHover5(true)
      SetHover6(true)
    }

    const onMouseOver2 = ()=>{
      SetHover1(false)
      SetHover(false)
      SetHover3(false)
      SetHover4(false)
      SetHover5(false)
      SetHover6(false)
    }

    const onMouseOut2 = ()=>{
      SetHover1(true)
      SetHover(true)
      SetHover3(true)
      SetHover4(true)
      SetHover5(true)
      SetHover6(true)
    }

    const onMouseOver3 = ()=>{
      SetHover1(false)
      SetHover2(false)
      SetHover(false)
      SetHover4(false)
      SetHover5(false)
      SetHover6(false)
    }

    const onMouseOut3 = ()=>{
      SetHover1(true)
      SetHover2(true)
      SetHover(true)
      SetHover4(true)
      SetHover5(true)
      SetHover6(true)
    }

    const onMouseOver4 = ()=>{
      SetHover1(false)
      SetHover2(false)
      SetHover3(false)
      SetHover(false)
      SetHover5(false)
      SetHover6(false)
    }

    const onMouseOut4 = ()=>{
      SetHover1(true)
      SetHover2(true)
      SetHover3(true)
      SetHover(true)
      SetHover5(true)
      SetHover6(true)
    }
    
    const onMouseOver5 = ()=>{
      SetHover1(false)
      SetHover2(false)
      SetHover3(false)
      SetHover4(false)
      SetHover(false)
      SetHover6(false)
    }

    const onMouseOut5 = ()=>{
      SetHover1(true)
      SetHover2(true)
      SetHover3(true)
      SetHover4(true)
      SetHover(true)
      SetHover6(true)
    }

    const onMouseOver6 = ()=>{
      SetHover1(false)
      SetHover2(false)
      SetHover3(false)
      SetHover4(false)
      SetHover5(false)
      SetHover(false)
    }

    const onMouseOut6 = ()=>{
      SetHover1(true)
      SetHover2(true)
      SetHover3(true)
      SetHover4(true)
      SetHover5(true)
      SetHover(true)
    }

    useEffect(()=>{

      const boxes = gsap.utils.toArray('.cardDiv');

      const container = document.querySelector('.container');

      boxes.forEach((box)=>{
      gsap.to(box,{
        scrollTrigger:{
          trigger:container,
          start:'top center',
          end:'bottom center',
          toggleActions:'play reverse reverse reverse',
          scrub:false,
          markers:false,
        },
        marginLeft:0,
        duration:2,
        ease:'power1.inOut'
      })
    })
    const head = document.querySelector('.heading');

    gsap.to(head,{
      scrollTrigger:{
        trigger:container,
        start:'top center',
        end:'bottom center',
        toggleActions:'play reverse reverse reverse',
        scrub:false,
        markers:false,
      },
      opacity:1,
      duration:3,
      ease:'power1.inOut'
    }
  )

},[]);

    return (
      <>
      <div className=' bg-[url(cosmos-1853491_1280.jpg)] bg-cover bg-repeat'>
    <div className=' overflow-x-hidden home float h-[50vw] w-screen'>
      <div className='absolute'>
      <img src="/DeGods.png" alt="pudgy-penguins" className='absolute z-0 mt-20 bounce w-24 h-24 hover:cursor-pointer rounded-full ml-96' style={{ 
        animation: `bounce ${time()}s infinite ease-in-out`,}} />
        <img src='/pudgy-penguin-6873.png' alt="pudgy-penguins" className='bounce w-16 h-16 ml-20 mt-20 rounded-full border-gray hover:cursor-pointer' style={{
          Keyframes,
          animation: `bounce ${time()}s infinite ease-in-out`}} />
        <img src='/f3564ef33373939b024fb791f21ec37b.png' alt="pudgy-penguins" className='bounce w-20 h-20  hover:cursor-pointer rounded-full ml-36 mt-44' style={{
          Keyframes,
          animation: `bounce ${time()}s infinite ease-in-out`,}} />
      </div>
      <div className='flex flex-col justify-center items-center'>
      <img src='/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB.png' alt="pudgy-penguins" className='z-0 bounce w-24 h-24 mt-14 hover:cursor-pointer' style={{
        Keyframes,
        animation: `bounce ${time()}s infinite ease-in-out`,}} />
      <img src='/CreepsByOverworld.png' alt="pudgy-penguins" className='bounce w-20 h-20 hover:cursor-pointer rounded-full' style={{marginLeft:800,
        animation: `bounce ${time()}s infinite ease-in-out`
      }}/>
        <h1 className='text-white text-6xl font-playfair z-10 mt-28'>Explore Our NFT Marketplace</h1>
        <p className='text-white text-xl font-assistant z-10 pr-5 '>Buy,Trade,Sell or Collect one and only stop</p>
      </div>
      <div className='absolute'>
      <img src='/phaverup.png' alt="pudgy-penguins" className='bounce w-24 h-24 rounded-full hover:cursor-pointer' style={{marginLeft:1300,
        animation: `bounce ${time()}s infinite ease-in-out`,
      }}/>
      <img src='/Doodle.png' alt="pudgy-penguins" className=' mt-2 bounce w-20 h-20 rounded-full hover:cursor-pointer' style={{marginLeft:900,
        animation: `bounce ${time()}s infinite ease-in-out`,
      }}/>
      <img src='/MadLabs.png' alt="pudgy-penguins" className='bounce ml-4 -mt-14 w-16 h-16 rounded-full hover:cursor-pointer' style={{marginLeft:'500px',
        animation: `bounce ${time()}s infinite ease-in-out`,
      }}/>
      </div>
    </div>
    <div className='container flex flex-row items-center justify-around h-screen'>
    <div className=' pt-5 overflow-hidden flex flex-col justify-start items-center duration-700'>
      <div className=' -ml-[1700px] cardDiv flex items-center justify-start h-auto w-full' >
      <div className={` ml-44 cards ${hover? '': 'highlight'} duration-700 transition-all hover:ml-40 hover:m-7 pb-2 w-40 h-403xl`}
      onMouseOver={ onMouseOver }
      onMouseOut= {onMouseOut} >
        <img src='/giphy.gif' alt="pudgy-penguins" className='w-40 h-40 rounded-3xl' />
        </div>
        <div className={`cards ${hover1? '': 'highlight'} duration-700 transition-all hover:m-7 pb-2 pl-4 w-80 h-403xl`}
      onMouseOver={ onMouseOver1 }
      onMouseOut={ onMouseOut1 }>
        <img  src='/sandbox.png' alt="pudgy-penguins" className=' w-80 h-40 rounded-3xl' />
        </div>
      </div>
      <div className='cardDiv -ml-[1700px]  flex justify-center items-center'>
      <div className={`ml-10 cards  duration-700 ${hover2? '': 'highlight'} transition-all hover:m-9 hover:mr-8 pt-4 w-56 h-56 rounded-3xl`} onMouseOver={ onMouseOver2 }
      onMouseOut={ onMouseOut2 }>
        <img  src='/cryptopunks.gif' alt="pudgy-penguins" className=' w-56 h-56 rounded-3xl' />
        </div>
        <div className={`cards  duration-700 ${hover3? '': 'highlight'} transition-all hover:m-9 hover:mr-12 pl-4 pt-4 w-88 h-56 rounded-3xl`}onMouseOver={ onMouseOver3 }
      onMouseOut={ onMouseOut3 }>
        <img  src='/doodles-nft-pranksy-1-1-million-opensea-steve-aoki-snoop-dogg-1.png' alt="pudgy-penguins" className=' w-88 h-56 rounded-3xl' />
        </div>
        <div className={`cards  hover:m-9 duration-700 ${hover4? '': 'highlight'} transition-all pl-4 pt-4 w-56 h-56 rounded-3xl`}onMouseOver={ onMouseOver4 }
      onMouseOut={ onMouseOut4 }>
        <img  src='/cryptoPunksAlternative.gif' alt="pudgy-penguins" className=' w-56 h-56 rounded-3xl' />
        </div>
        </div>
        <div className=' cardDiv -ml-[1700px]  flex items-center justify-start h-auto w-full'>
      <div className={`cards ml-28 duration-700 ${hover5? '': 'highlight'} transition-all mb-14 hover:ml-28 hover:m-7 hover:mb-16 pt-8 pb-2 w-56 h-56 rounded-3xl`}onMouseOver={ onMouseOver5 }
      onMouseOut={ onMouseOut5 }>
        <img src='/degods.png' alt="pudgy-penguins" className='w-56 h-56 rounded-3xl' />
        </div>
        <div className={`cards  duration-700 ${hover6? '': 'highlight'} transition-all mb-14 hover:m-7 hover:mb-16 pt-8 pl-4 pb-2 w-56 h-56 rounded-3xl`} onMouseOver={ onMouseOver6 }
      onMouseOut={ onMouseOut6 }>
        <img  src='/miladyMilker.png' alt="pudgy-penguins" className='w-56 h-56 rounded-3xl' />
        </div>
      </div>
      </div>
      <div className=' heading flex flex-col items-center opacity-0'>
        <h1 className=" text-gray-300 text-8xl font-playfair italic">Envius</h1>
        <p className= ' text-gray-400 text-2xl font-assistant italic'>Connect with a vibrant community of artists</p>
        <p className= ' text-gray-400 text-2xl font-assistant italic'>Buy, sell, and discover exclusive digital assets.</p>
        <p className= ' text-gray-400 text-2xl font-assistant italic'>Explore the world of NFTs and blockchain technology.</p>
      </div>
      </div>
    </div>
    </>
  )
}
export default Home