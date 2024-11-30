import React from 'react'
import { useState,useRef,useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Collections() {

 const [next,setNext] = useState();
 const  options = {
    method: 'GET', 
    headers: {accept: 'application/json', 'x-api-key': '3fde54829e5e4fe2a4fab4e0813a81b9'}
  }
  const [collectionData, setCollectionData] = useState([]);



  useEffect(()=>{
    const fetchData = async () => {
          try{
            const response = await fetch('https://api.opensea.io/api/v2/collections?chain=ethereum&limit=16&order_by=seven_day_volume', options)
            if(!response.ok){
                throw new Error('Something went wrong')
            }
        const data =  await response.json();
        setCollectionData(data.collections);
        setNext(data.next)
        console.log(data.next)
        console.log(next)
        
    }
          catch(error){
              console.log(error)
        }
    }
    fetchData();
},[]) 

  const handleScroll = async() => {
    const scrollHeight = document.querySelector('.main').scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = document.querySelector('.main').scrollTop;
    try{ 
      if(windowHeight+scrollTop+1>=scrollHeight){
        const response = await fetch(`https://api.opensea.io/api/v2/collections?chain=ethereum&include_hidden=false&limit=16&next=${next}&order_by=seven_day_volume`, options)

        if(!response.ok){
            throw new Error('Something went wrong')
        }
        const data =  await response.json();
        console.log(data)
        setCollectionData([...collectionData,...data.collections]);
      }
    }

    catch(error){
        console.log(error)
  }
  }

  useEffect(() => {
    document.querySelector('.main').addEventListener('scroll',handleScroll)
  }, [])

function addAnimation(index){
  if(index<15 || (index>=25 && index<40))
  document.querySelector(`.H${index}[data-collection="${index}"]`)?.classList.add('-translate-y-[142px]')
  else
  document.querySelector(`.H${index}[data-collection="${index}"]`)?.classList.add('-translate-y-[218px]')

}
function removeAnimation(index){
  if(index<15 || (index>=25 && index<40))
  document.querySelector(`.H${index}[data-collection="${index}"]`)?.classList.remove('-translate-y-[142px]')
  else
  document.querySelector(`.H${index}[data-collection="${index}"]`)?.classList.remove('-translate-y-[218px]')

}

  return (
    <div className='h-screen overflow-scroll scroll main'>
    <div 
    className='flex bg-black justify-between mt-[68px] items-center h-[100vh] w-screen'>
    <div
    className='ml-2 mb-[70px] flex flex-col cont justify-center items-center p-1 h-full w-[25vw] '>
       {
        collectionData.slice(0,4).map((collection,index) => (<div key={collection.id} 
          onMouseOver={()=>addAnimation(index)}
          onMouseOut={()=>removeAnimation(index)}
        className=' transition-all  will-change-transform hover:scale-105 cursor-pointer overflow-clip w-full h-[19vh] m-1'>
              <img src={collection.image_url} alt={collection.name} className='h-[19vh] hover:shadow-sm hover:shadow-slate-100 border-2 border-gray-300 rounded-xl'/>
              <div
              data-collection={index}
              className={`H${index} transition-all duration-300 flex justify-center bg-black items-center rounded-xl bg-opacity-5 border-2  border-gray-300 inset-0 h-[19vh] w-full backdrop-filter backdrop-blur-sm`}>
              <h1 key={index} 
              className='text-md font-semibold py-2 w-full bg-black text-center mix-blend-luminosity bg-opacity-10 text-white backdrop-blur-lg '
              style={{ textShadow: '0 4px 8px rgba(100, 100, 100, 0.5)' }}
              >{collection.name}</h1>
              </div>
      </div>
  ))
}
</div>
<div className='flex flex-col justify-start items-center my-2 p-1 h-screen w-full'>
       {
        collectionData.slice(4,7).map((collection,index) => (<div key={collection.id} 
          onMouseOver={()=>addAnimation(index+15)}
        onMouseOut={()=>removeAnimation(index+15)} 
      className='overflow-clip cursor-pointer h-[29vh] hover:scale-[1.02] m-1 transition-all'>
            <img src={collection.banner_image_url? collection.banner_image_url:collection.image_url} alt={collection.name} className='rounded-xl hover:shadow-sm hover:shadow-slate-200 border-2 border-gray-300 w-[40vw] h-[29vh]'/>
            <div
            data-collection={index+15}
            className={`H${index+15} transition-all duration-300 border-2  border-gray-300 flex justify-center bg-black items-center rounded-xl bg-opacity-30 inset-0 h-[29vh] w-full backdrop-filter backdrop-blur-sm`}>
            <h1 key={index} 
            className='text-xl font-bold  w-full text-center mix-blend-luminosity bg-opacity-10 text-white'
            style={{ textShadow: '0 4px 8px rgba(100, 100, 100, 0.5)' }}
            >{collection.name}</h1>
            </div>
            </div>
  ))
}
</div>
<div className='flex flex-col mb-[70px] cont justify-center items-center p-1 h-screen w-[25vw]'>
       {
        collectionData.slice(7,11).map((collection,index) => (<div key={collection.id}
        onMouseOver={()=>addAnimation(index+25)}
        onMouseOut={()=>removeAnimation(index+25)} 
        className= {`hover:text-white  will-change-transform hover:text-center cursor-pointer transition-all w-full duration-200 hover:scale-105 overflow-clip text-black h-[19vh] m-1 flex-none`}>
              <img src={collection.image_url} alt={collection.name} className='h-[19vh] w-full hover:shadow-sm hover:shadow-slate-100 border-2 border-gray-300 rounded-xl'/>
              <div
              data-collection={index+25}
              className={`H${index+25} transition-all duration-300 border-2  border-gray-300 flex justify-center bg-black items-center rounded-xl bg-opacity-5 inset-0 h-[19vh] backdrop-filter backdrop-blur-sm`}>
              <h1 key={index} 
              className='text-md font-semibold w-full text bg-black text-center mix-blend-luminosity bg-opacity-10 text-white backdrop-blur-lg '
              style={{ textShadow: '0 4px 8px rgba(100, 100, 100, 0.5)' }}
              >{collection.name}</h1>
              </div>
      </div>
  ))
}
</div>
<div className='flex flex-col justify-start items-center my-2 p-1 h-screen w-full mr-4'>
       {
        collectionData.slice(11,14).map((collection,index) => (<div key={collection.id} 
          onMouseOver={()=>addAnimation(index+40)}
          onMouseOut={()=>removeAnimation(index+40)} 
        className='overflow-clip cursor-pointer h-[29vh] hover:scale-[1.02] m-1 transition-all'>
              <img src={collection.banner_image_url? collection.banner_image_url:collection.image_url } alt={collection.name} className='rounded-xl hover:shadow-sm hover:shadow-slate-200 border-2 border-gray-300 w-[40vw] h-[29vh]'/>
              <div
              data-collection={index+40}
              className={`H${index+40} transition-all duration-300 border-2  border-gray-300 flex justify-center bg-black items-center rounded-xl bg-opacity-30 inset-0 h-[29vh] w-full backdrop-filter backdrop-blur-sm`}>
              <h1 key={index} 
              className='text-xl font-bold  w-full text-center mix-blend-luminosity bg-opacity-10 text-white'
              style={{ textShadow: '0 4px 8px rgba(100, 100, 100, 0.5)' }}
              >{collection.name}</h1>
              </div>
      </div>
  ))
}
</div>
</div>
</div>
)}

export default Collections