import React from 'react'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Cards from './Cards';
import { useState } from 'react';

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
    <div className=' pt-5 overflow-hidden flex flex-col justify-center items-center h-screen w-full duration-700'>
      <div className='flex items-center justify-center h-auto w-[1200px]' >
      <div className={`cards ${hover? '': 'highlight'} duration-700 transition-all hover:m-7 pb-2 w-48 h-48 rounded-lg`}
      onMouseOver={ onMouseOver }
      onMouseOut= {onMouseOut} >
        <img src='/giphy.gif' alt="pudgy-penguins" className='w-48 h-48 rounded-3xl' />
        </div>
        <div className={`cards ${hover1? '': 'highlight'} duration-700 transition-all hover:m-7 pb-2 pl-4 w-96 h-48 rounded-lg`}
      onMouseOver={ onMouseOver1 }
      onMouseOut={ onMouseOut1 }>
        <img  src='/sandbox.png' alt="pudgy-penguins" className=' w-96 h-48 rounded-3xl' />
        </div>
      </div>
      <div className='flex items-center justify-center'>
      <div className={`cards duration-700 ${hover2? '': 'highlight'} transition-all hover:m-9 hover:mr-8 pl-4 pt-4 w-64 h-64 rounded-3xl`} onMouseOver={ onMouseOver2 }
      onMouseOut={ onMouseOut2 }>
        <img  src='/cryptopunks.gif' alt="pudgy-penguins" className=' w-64 h-64 rounded-3xl' />
        </div>
        <div className={`cards duration-700 ${hover3? '': 'highlight'} transition-all hover:m-9 hover:ml-11 hover:mr-12 pl-4 pt-4 w-96 h-64 rounded-3xl`}onMouseOver={ onMouseOver3 }
      onMouseOut={ onMouseOut3 }>
        <img  src='/doodles-nft-pranksy-1-1-million-opensea-steve-aoki-snoop-dogg-1.png' alt="pudgy-penguins" className=' w-96 h-64 rounded-3xl' />
        </div>
        <div className={`cards hover:m-9 duration-700 ${hover4? '': 'highlight'} transition-all pl-4 pt-4 w-64 h-64 rounded-3xl`}onMouseOver={ onMouseOver4 }
      onMouseOut={ onMouseOut4 }>
        <img  src='/cryptoPunksAlternative.gif' alt="pudgy-penguins" className=' w-64 h-64 rounded-3xl' />
        </div>
        </div>
        <div className='flex items-center justify-center h-auto w-[1200px]'>
      <div className={`cards duration-700 ${hover5? '': 'highlight'} transition-all hover:m-7 pt-8 pb-2 w-64 h-64 rounded-lg`}onMouseOver={ onMouseOver5 }
      onMouseOut={ onMouseOut5 }>
        <img src='/degods.png' alt="pudgy-penguins" className='w-64 h-64 rounded-3xl' />
        </div>
        <div className={`cards duration-700 ${hover6? '': 'highlight'} transition-all hover:m-12 pt-8 pl-4 pb-2 w-64 h-64 rounded-3xl`} onMouseOver={ onMouseOver6 }
      onMouseOut={ onMouseOut6 }>
        <img  src='/miladyMilker.png' alt="pudgy-penguins" className=' w-64 h-64 rounded-3xl' />
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
export default Home