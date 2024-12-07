import React from 'react'
import { useState,useRef,useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

function Collections() {

 const [selectedCollection,setSelectedCollection] = useState([]);  
 const [clickedIndex, setClickedIndex] = useState(0)
 const [isClicked,setisClicked] = useState(false)
 let initial = true
 const [isLoading,setisLoading] = useState(false)
 const [next,setNext] = useState('');
 const  options = {
    method: 'GET', 
    headers: {accept: 'application/json', 'x-api-key': '3fde54829e5e4fe2a4fab4e0813a81b9'}
  }
  const [collectionData1, setCollectionData1] = useState([]);
  const [collectionData2, setCollectionData2] = useState([]);
  const [collectionData3, setCollectionData3] = useState([]);
  const [collectionData4, setCollectionData4] = useState([]);

 const nextRef = useRef(''); 
 
 function getClicked(index){
  setisClicked(true)
  setClickedIndex (index)
 }

  useEffect(()=>{
     isLoading? document.body.style.overflow = "hidden":document.body.style.overflow = "auto"
  },[isLoading])

    const fetchData = async () => {
          try{
            setisLoading(true)
            const response = await fetch(`https://api.opensea.io/api/v2/collections?chain=ethereum${initial?`&limit=6&`:'&limit=7&'}${nextRef.current?`next=${nextRef.current}`:''}&order_by=seven_day_volume`, options)
            if(!response.ok){
                throw new Error('Something went wrong')
            }
        const data =  await response.json();
        setNext(data.next)
        nextRef.current = data.next;
        const response1 = await fetch(`https://api.opensea.io/api/v2/collections?chain=ethereum${initial?`&limit=4&`:'&limit=5&'}${nextRef.current?`next=${nextRef.current}`:''}&order_by=seven_day_volume`, options)
            if(!response1.ok){
                throw new Error('Something went wrong')
            }
        const data1 = await response1.json();
        setNext(data1.next)
        nextRef.current = data1.next;
        const response2 = await fetch(`https://api.opensea.io/api/v2/collections?chain=ethereum${initial?`&limit=6&`:'&limit=7&'}${nextRef.current?`next=${nextRef.current}`:''}&order_by=seven_day_volume`, options)
            if(!response2.ok){
                throw new Error('Something went wrong')
            }
        const data2 = await response2.json();
         setNext(data2.next)
        nextRef.current = data2.next;
        const response3 = await fetch(`https://api.opensea.io/api/v2/collections?chain=ethereum${initial?`&limit=4&`:'&limit=5&'}${nextRef.current?`next=${nextRef.current}`:''}&order_by=seven_day_volume`, options)
            if(!response3.ok){
                throw new Error('Something went wrong')
            }
        const data3 = await response3.json();
        setNext(data3.next)
        console.log(data3)
        nextRef.current = data3.next;

        setCollectionData1((prev)=>{
          if(prev.length===0)
         return [...prev,...data.collections]
          else
         return [...prev,...data.collections.slice(1)]});

        setCollectionData2((prev)=>{
          if(prev.length===0)
          return [...prev,...data1.collections]
          else
         return [...prev,...data1.collections.slice(1)]});

        setCollectionData3((prev)=>{
          if(prev.length==0)
         return [...prev,...data2.collections]
          else
         return [...prev,...data2.collections.slice(1)]});

        setCollectionData4((prev)=>{
          if(prev.length===0){
         return [...prev,...data3.collections]
          }
          else
          return [...prev,...data3.collections.slice(1)]});   
    }

          catch(error){
              console.log(error)
        }
        finally{
          setisLoading(false)
          initial = false
        }
    }
useEffect(()=>{
  fetchData()
},[]) 

  const handleScroll = async() => {
    const scrollHeight = document.querySelector('.main').scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = document.querySelector('.main').scrollTop;

    if(isLoading) return;

    try{ 
      if(windowHeight+scrollTop+1>=scrollHeight){
        fetchData();
      }
      }

    catch(error){
        console.log(error)
  }
  }

  useEffect(() => {
    document.querySelector('.main').addEventListener('scroll',handleScroll)
    return () => {
      document.querySelector('.main')?.removeEventListener('scroll',handleScroll)
    }
  },[])

function addAnimation(i,index){
  if(i=='potrait1')
  document.querySelector(`.potrait1${index}`)?.classList.add('-translate-y-[142px]')
  else if(i=='landscape1')
  document.querySelector(`.landscape1${index}`)?.classList.add('-translate-y-[218px]')
  else if(i=='potrait2')
  document.querySelector(`.potrait2${index}`)?.classList.add('-translate-y-[142px]')
 else if(i=='landscape2')
  document.querySelector(`.landscape2${index}`)?.classList.add('-translate-y-[218px]')

}
function removeAnimation(i,index){
  if(i=='potrait1')
    document.querySelector(`.potrait1${index}`)?.classList.remove('-translate-y-[142px]')
    else if(i=='landscape1')
    document.querySelector(`.landscape1${index}`)?.classList.remove('-translate-y-[218px]')
    else if(i=='potrait2')
    document.querySelector(`.potrait2${index}`)?.classList.remove('-translate-y-[142px]')
    else if(i=='landscape2')
    document.querySelector(`.landscape2${index}`)?.classList.remove('-translate-y-[218px]')
  

}

  return (
    <div className={` flex flex-col justify-between items-center h-screen overflow-scroll  bg-black scroll main`}>
    <div 
    className='flex bg-black justify-between mt-[68px] items-center h-full w-screen'>
    <div
    className='ml-2 flex flex-col cont justify-start items-center p-1 h-full w-[25vw] '>
       {
        collectionData1?.map((collection,index) => (<div 
          onClick={()=>{getClicked(index)
            setSelectedCollection(collectionData1)
          }}
          key={collection.id} 
          onMouseEnter={
            ()=>{
            addAnimation('potrait1',index)}}
          onMouseLeave={
            ()=>{
            removeAnimation('potrait1',index)}}
        className=' transition-all cursor-pointer overflow-clip w-[25w] h-[19vh] m-1'>
              <img src={collection.image_url} alt={collection.name} className='h-[19vh] w-full hover:shadow-sm hover:shadow-slate-100 border-2 border-gray-300 rounded-xl'/>
              <div
              data-collection={index}
              className={`potrait1${index} transition-all duration-300 flex justify-center bg-black items-center rounded-xl bg-opacity-5 border-2  border-gray-300 inset-0 h-[19vh] w-full backdrop-filter backdrop-blur-sm`}>
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
        collectionData2?.map((collection,index) => (<div 
          onClick={()=>{getClicked(index)
            setSelectedCollection(collectionData2)
          }}
          key={collection.id} 
          onMouseOver={
            ()=>{
            addAnimation('landscape1',index)}}
          onMouseOut={
            ()=>{
            removeAnimation('landscape1',index)}}
      className='overflow-clip cursor-pointer h-[29vh] hover:scale-[1.02] m-1 transition-all'>
            <img src={collection.banner_image_url? collection.banner_image_url:collection.image_url} alt={collection.name} className='rounded-xl hover:shadow-sm hover:shadow-slate-200 border-2 border-gray-300 w-[40vw] h-[29vh]'/>
            <div
            data-collection={index}
            className={`landscape1${index} transition-all duration-300 border-2  border-gray-300 flex justify-center bg-black items-center rounded-xl bg-opacity-30 inset-0 h-[29vh] w-full backdrop-filter backdrop-blur-sm`}>
            <h1 key={index} 
            className='text-xl font-bold  w-full text-center mix-blend-luminosity bg-opacity-10 text-white'
            style={{ textShadow: '0 4px 8px rgba(100, 100, 100, 0.5)' }}
            >{collection.name}</h1>
            </div>
            </div>
  ))
}
</div>
<div className='flex  flex-col cont justify-start items-center p-1 h-screen w-[25vw]'>
       {
        collectionData3?.map((collection,index) => (<div 
          onClick={()=>{getClicked(index)
            setSelectedCollection(collectionData3)
          }}
          key={collection.id}
          onMouseOver={
            ()=>{
            addAnimation('potrait2',index)}}
          onMouseOut={
            ()=>{
            removeAnimation('potrait2',index)}}
        className= {`hover:text-white  will-change-transform hover:text-center cursor-pointer transition-all w-full duration-200 hover:scale-105 overflow-clip text-black h-[19vh] m-1 flex-none`}>
              <img src={collection.image_url} alt={collection.name} className='h-[19vh] w-full hover:shadow-sm hover:shadow-slate-100 border-2 border-gray-300 rounded-xl'/>
              <div
              data-collection={index}
              className={`potrait2${index} transition-all duration-300 border-2  border-gray-300 flex justify-center bg-black items-center rounded-xl bg-opacity-5 inset-0 h-[19vh] backdrop-filter backdrop-blur-sm`}>
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
        collectionData4?.map((collection,index) => (<div 
          onClick={()=>{getClicked(index)
            setSelectedCollection(collectionData4)
          }}
          key={collection.id} 
          onMouseOver={
            ()=>{
            addAnimation('landscape2',index)}}
          onMouseOut={
            ()=>{
            removeAnimation('landscape2',index)}}
        className='overflow-clip cursor-pointer h-[29vh] hover:scale-[1.02] m-1 transition-all'>
              <img src={collection.banner_image_url? collection.banner_image_url:collection.image_url } alt={collection.name} className='rounded-xl hover:shadow-sm hover:shadow-slate-200 border-2 border-gray-300 w-[40vw] h-[29vh]'/>
              <div
              data-collection={index}
              className={`landscape2${index} transition-all duration-300 border-2  border-gray-300 flex justify-center bg-black items-center rounded-xl bg-opacity-30 inset-0 h-[29vh] w-full backdrop-filter backdrop-blur-sm`}>
              <h1 key={index} 
              className='text-xl font-bold  w-full text-center mix-blend-luminosity bg-opacity-10 text-white'
              style={{ textShadow: '0 4px 8px rgba(100, 100, 100, 0.5)' }}
              >{collection.name}</h1>
              </div>
      </div>
        
  ))
}
{isLoading && (<div className=' fixed flex items-center justify-center h-screen w-screen backdrop-blur-sm inset-0 text-white text-3xl z-50 '>
  <img src='loader.gif' alt='loading' className=' bg-blend-overlay h-20 w-20'/>
</div>)}
{isClicked && (<div className={`fixed flex bg-center bg-no-repeat bg-cover items-center justify-center backdrop-blur-sm inset-0 text-white text-3xl z-50`}
>
  <div className='w-[90%] grid bg-no-repeat bg-cover border-4 rounded-xl border-r-white border-b-white border-t-black border-l-black bg-center  mt-[30px] h-3/4'
  style={{
    gridTemplateColumns: "repeat(20,minmax(0,1fr))",
    gridTemplateRows: "repeat(20,minmax(0,1fr))",
    backgroundImage: `url("${selectedCollection[clickedIndex]?.banner_image_url.replace('&', '/&')}")`}}
  >
  <div className='col-span-full col-start-auto row-span-2 flex justify-end'>
  <FontAwesomeIcon
  onClick={()=>setisClicked(false)}
  className=' cursor-pointer text-[#12263f] absolute transform translate-x-1/2 -translate-y-1/2' icon={faXmarkCircle}/>
  </div>
  </div>

  </div>)}
</div> 
</div>
</div>
)}

export default Collections