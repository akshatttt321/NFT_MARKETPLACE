import React from 'react'

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
      return z
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
  
    return (
    <div className=' overflow-x-hidden home float bg-[url(cosmos-1853491_1280.jpg)] bg-cover h-screen w-screen bg-no-repeat'>
      <div className='absolute'>
      <img src="/DeGods.png" alt="pudgy-penguins" className='absolute z-50 mt-20 bounce w-24 h-24 hover:cursor-pointer rounded-full ml-96' style={{ 
        animation: `bounce ${time()}s infinite ease-in-out`,}} />
        <img src='/pudgy-penguin-6873.png' alt="pudgy-penguins" className='bounce w-16 h-16 ml-20 mt-20 rounded-full border-gray hover:cursor-pointer' style={{
          Keyframes,
          animation: `bounce ${time()}s infinite ease-in-out`}} />
        <img src='/f3564ef33373939b024fb791f21ec37b.png' alt="pudgy-penguins" className='bounce w-20 h-20  hover:cursor-pointer rounded-full ml-36 mt-44' style={{
          Keyframes,
          animation: `bounce ${time()}s infinite ease-in-out`,}} />
      </div>
      <div className='flex flex-col justify-center items-center'>
      <img src='/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB.png' alt="pudgy-penguins" className='z-50 bounce w-24 h-24 mt-14 hover:cursor-pointer' style={{
        Keyframes,
        animation: `bounce ${time()}s infinite ease-in-out`,}} />
      <img src='/CreepsByOverworld.png' alt="pudgy-penguins" className='bounce w-20 h-20 hover:cursor-pointer rounded-full' style={{marginLeft:800,
        animation: `bounce ${time()}s infinite ease-in-out`
      }}/>
        <h1 className='text-white text-6xl font-playfair z-10 mt-28'>Explore Our Vast Collection Of NFTs</h1>
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
  )
}

export default Home