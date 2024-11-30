import React from 'react'
import {useState,useEffect} from 'react'
  

function Trending() {

    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-api-key': '3fde54829e5e4fe2a4fab4e0813a81b9'}
      };
    const [stats,setStats]= useState([])  
    const [stats1,setStats1]= useState([])
    const [trending,setTrending] = useState([])
    const [top,setTop]= useState([])
    const[view,setView]= useState(trending)
    const[slideImages,setSlideImages]= useState([])

    const[buttonBg,setButtonBg]= useState('#18181b')

    const[checkClick,setCheckClick]= useState('true')

    const[checkClick1,setCheckClick1]= useState('false')

    const[checkClick2,setCheckClick2]= useState('false')

    const[buttonBg1,setButtonBg1]= useState('')

    const[buttonBg2,setButtonBg2]= useState('')

    function changeButtonBg(){
        setButtonBg ('#18181b')
        setButtonBg1 ('')
        setButtonBg2 ('')
        setCheckClick('true')
        setCheckClick1('false')
        setCheckClick2('false')
    }

    function changeButtonBg1(){
        setButtonBg1 ('#18181b')
        setButtonBg ('')
        setButtonBg2 ('')
        setCheckClick1('true')
        setCheckClick('false')
        setCheckClick2('false')
    }

    function changeButtonBg2(){
        setButtonBg2 ('#18181b')
        setButtonBg1 ('')
        setButtonBg ('')
        setCheckClick2('true')
        setCheckClick1('false')
        setCheckClick('false')
    }

    const[collectionData,setCollectionData] = useState([])
      
      useEffect(()=>{
        const fetchData = async () => {
              try{
                const response = await fetch('https://api.opensea.io/api/v2/collections?chain=ethereum&limit=20&order_by=seven_day_volume', options)
                const image = await fetch('https://api.opensea.io/api/v2/collections?chain=ethereum&limit=20&order_by=market_cap', options)
                if(!response.ok && !image.ok){
                    throw new Error('Something went wrong')
                }
            const data =  await response.json();
            const data1 =  await image.json();
            setCollectionData(data);
            setSlideImages(data1);
        }
              catch(error){
                  console.log(error)
            }
        }
        fetchData();
},[]) 

    useEffect(()=>{
        if(checkClick==='true'){
            setView(trending)
        }
        else if(checkClick1==='true'){
            setView(top)
        }
    },[checkClick, checkClick1,trending,top])

    useEffect(()=>{
        setStats()
        let volume1=[]
        const fetchVolume = async () => {
            for(let i=0;i<10;i++){
                const volume =  await fetch(`https://api.opensea.io/api/v2/collections/${view.collections[i].collection}/stats`, options)
                if(!volume.ok){
                    throw new Error('Something went wrong')
                }
                const data =  await volume.json();
                data.name = view.collections[i].collection;
                volume1[i]=data
            }
            setStats1(volume1)
            // console.log(stats1)   
        }
        fetchVolume();
    },[view])

    useEffect(() => {
        if (collectionData?.collections) {  
          setTrending(collectionData);
          setTop(slideImages);
        }
        setStats(stats1)
         console.log(stats)
      }, [collectionData,slideImages,stats1]);

  return (

    <div className=' w-screen mt-[68px] bg-black'>
        <div className=' overflow-x-hidden flex flex-col bg-black'>
            <div className=' mt-10 flex justify-end items-start'>
            { trending.collections?.map((name) => (
                <img key={slideImages.collection} src={name.image_url} alt={name} 
                className=' m-2 h-[14vh] w-[22vw] rounded-lg border-2 aspect-video border-solid border-gray-400'
                style={{animation: `slide 45s infinite ease-in-out`}}
                />
            ))}
        </div>
        <div className=' flex justify-start items-start'>
            {slideImages.collections?.map((name) => (
                <img key={name.collection} src={name.image_url} alt={name} 
                className=' m-2 h-[14vh] w-[22vw] rounded-lg border-2 aspect-video border-solid border-gray-400'
            style={{animation: `slide1 45s infinite ease-in-out`}}
                />
            ))}
        </div>
    </div>
    <div className='top-20 z-10 flex justify-center items-center bg-black'>
        <button className= {`font-semibold text-2xl font-playfair rounded-lg px-4 py-2 m-4 `}
         style={{backgroundColor:buttonBg}} 
         onClick={()=>{changeButtonBg()}} >
            <h1 className={`${checkClick==='true'?'pointer-events-none':''} ${checkClick==='true'?'text-white':'text-gray-400'} hover:text-white`}>Trending</h1>
        </button>
        <button className= 'font-semibold text-2xl font-playfair rounded-lg px-4 py-2 m-4'
        style={{backgroundColor:buttonBg1}} 
        onClick={()=>{changeButtonBg1()}}
        >
              <h1 className={`${checkClick1==='true'?'pointer-events-none':''} ${checkClick1==='true'?'text-white':'text-gray-400'} hover:text-white`}>Top</h1>
        </button>
        <button className=' font-semibold text-2xl font-playfair rounded-lg px-4 py-2 m-4'
        style={{backgroundColor:buttonBg2}}
        onClick={changeButtonBg2} 
        >
              <h1 className={`${checkClick2==='true'?'pointer-events-none':''} ${checkClick2==='true'?'text-white':'text-gray-400'} hover:text-white`}>Wishlist</h1>
        </button>
    </div>
    <div className='flex justify-between'>
        <div className='flex'>
            <div className=' border-solid border-r-2 border-t-2 border-gray-500 bg-zinc-900 rounded-lg mt-2 m-4'>
            <select className=" appearance-none rounded-lg bg-zinc-900 text-center text-gray-400 font-playfair font-semibold text-lg px-4 py-4">
                <option>Categories</option>
                <option>Low to High</option>
                <option>High to Low</option>
                </select>
                </div>
                <div>
                <select className='  border-solid border-r-2 border-t-2 border-gray-500 bg-zinc-900 appearance-none text-center text-gray-400 font-playfair font-semibold text-lg rounded-lg px-4 py-4 mt-2 m-4'>
                <option>All Chains</option>
                <option>Low to High</option>
                <option>High to Low</option>
                </select>
                </div>
            </div>
        <div>
            <div className='flex justify-center items-center mr-4 bg-zinc-900 rounded-lg'>
                <button className=' text-gray-400 font-semibold text-lg font-playfair rounded-lg px-4 py-2 m-2'> 1D </button>
                <button className=' text-gray-400 font-semibold text-lg font-playfair rounded-lg px-4 py-2 m-2'> 1W </button>
                <button className=' text-gray-400 font-semibold text-lg font-playfair rounded-lg px-4 py-2 m-2'> 1M </button>
                <button className='text-gray-400 font-semibold text-lg font-playfair rounded-lg px-4 py-2 m-2'> 1Y </button>
                </div>
        </div>
    </div>
    <div className='flex w-screen justify-between items-center'>
        <div className='flex border-b-[1px] pb-2 px-2 border-gray-600 w-[45%] justify-between text-white my-2 m-8 items-center'>
            <div className='flex gap-6'>
            <h1 className='text-base font-playfair'>Rank</h1>
            <h1 className='text-base font-playfair'>Collection</h1>
            </div>
            <div className='flex gap-24'>
            <h1 className='text-base font-playfair'>Floor price</h1>
            <h1 className='text-base font-playfair'>Volume</h1>
            </div>
        </div>
        <div className=' border-b-[1px] pb-2 px-2 border-gray-600 flex w-[45%] justify-between text-white my-2 m-8 items-center'>
            <div className='flex gap-6'>
            <h1 className='text-base font-playfair'>Rank</h1>
            <h1 className='text-base font-playfair'>Collection</h1>
            </div>
            <div className='flex gap-24'>
            <h1 className='text-base font-playfair'>Floor price</h1>
            <h1 className='text-base font-playfair'>Volume</h1>
            </div>
        </div>
    </div>
    <div className='flex flex-col'>
    <div>
            <div className='flex mb-6 mt-2 items-center justify-between'>
                <div className='flex w-[47%] flex-col gap-6 justify-center mr-16'>
                {view.collections?.slice(0,5).map((name,index) => (
                    <div key={name.collection} className='flex justify-between'>
                    <div  className='flex items-center gap-10'>
                    <h1  className='text-xl ml-[50px] text-white font-playfair'>{index+1}</h1>
                    <img src={name.image_url} alt={name.collection} 
                    className='  self-center h-[10vh] w-[5vw] rounded-2xl border-2 border-solid border-gray-400'/>
                    <h1  className='text-[20px] text-white font-playfair'>{name.name}</h1>
                    </div>
                    <div key={name.collection} className='flex justify-start items-center'>
                    <div className='flex items-center text-center gap-[60px]'>
                    <h1 className={`text-[18px] text-white font-playfair  ${stats?([index]?.total?.floor_price>0.001?'':'text-center'):''}`}>{stats?stats[index]?.total?.floor_price>0.01? 
                    stats[index]?.total?.floor_price.toPrecision(4)+' '+(stats[index]?.total?.floor_price_symbol?stats[index]?.total?.floor_price_symbol:"ETH"):
                    "-":"Fetching..."}</h1>
                    <h1 className='text-[18px] text-white font-playfair'>{stats?stats[index]?.intervals?.[0]?.volume.toPrecision(4)+' '+(stats[index]?.total?.floor_price_symbol? stats[index]?.total?.floor_price_symbol:"ETH"):"Fetching..."}</h1>
                    </div>
                    </div>
                    </div>
                    ))}
                </div>
                <div className='flex w-[47%] flex-col gap-6 justify-center mr-10'>
                {view.collections?.slice(5,10).map((name,index) => (
                    <div key={name.collection} className='flex justify-between'>
                    <div className={`flex items-center gap-10`}>
                    <h1 className='text-xl ml-[50px] text-white font-playfair'>{index+6}</h1>
                    <img src={name.image_url} alt={name} 
                    className={`${(index+6)===10?"-ml-2":""} self-center h-[10vh] w-[5vw] rounded-2xl border-2 border-solid border-gray-400`}/>
                    <h1 className='text-[20px] text-white font-playfair'>{name.name}</h1>
                    </div>
                    <div key={name.collection} className='flex justify-center items-center'>
                    <div className='flex items-center gap-[60px]'>
                    <h1 className={`text-[18px] text-white font-playfair ${stats?[index+5]?.total?.floor_price>0.001?'':'text-center':''}`}>{stats?stats[index+5]?.total?.floor_price>0.001? 
                    stats[index+5]?.total?.floor_price.toPrecision(4)+' '+stats[index+5]?.total?.floor_price_symbol:
                    "-":"Fetching..."}</h1>                   
                    
                    <h1 className='text-[18px] text-white font-playfair'>{stats?stats[index+5]?.intervals?.[0]?.volume.toPrecision(4)+' '+stats[index+5]?.total?.floor_price_symbol:"Fetching..."}</h1>
                    </div>
                    </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trending