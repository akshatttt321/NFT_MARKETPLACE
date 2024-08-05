import React,{useEffect,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const[background,setBackground]= useState("url(cosmos-1853491_1280.jpg)");
  useEffect(()=>{
    const HandleScroll = ()=>{
      if(window.scrollY>1){
        setBackground("black")
      }
      else{
        setBackground("url(cosmos-1853491_1280.jpg)")
      }
    }
    window.addEventListener('scroll',HandleScroll);
    return ()=>{
      window.removeEventListener('scroll',HandleScroll);
    }
  },[])

  return (
    <header className="w-screen bg-gray-400 shadow sticky z-50 top-0">
          <nav className="transition duration-0 ease-in-out bg-cover px-4 lg:px-6 py-2.5 flex justify-between items-center"style={background.startsWith('url') ? { backgroundImage: background } : { backgroundColor: background }}>
            <div className='flex flex-row justify-around items-center'>
              <img src='/ede3ce4167d2d82579219784bbb55b6a.png' alt="logo" className='px-2 h-10 w-13 backdrop-blur-sm border-r-2 border-gray-500'/>
              <h1 className='p-2 text-xl text-slate-200 font-serif italic line-through transion ease in out duration-100 hover:scale-105 hover:cursor-pointer'>AKSHAT</h1>
              <input type='search' className='py-1 bg-slate-200 bg-opacity-20 px-2 ml-10 mr-1 border-solid-2 rounded-lg border-gray-500 focus:outline-none focus: text-slate-200 focus:font-normal focus:italic backdrop-blur-lg backdrop-filter' placeholder='Search...'/>
              <FontAwesomeIcon icon={faSearch} className="size-4 text-gray-400 pl-1 hover:scale-110 hover:cursor-pointer" />
            </div>
            <div className='flex'>
            <h1 className='head font-semibold font-playfair hover:animate-pulse cursor-pointer'>Trending</h1>
            <h1 className='head font-semibold font-playfair hover:animate-pulse cursor-pointer'></h1>
            <h1 className='head font-semibold font-playfair hover:animate-pulse cursor-pointer'>Collections</h1>
            </div>
            <div className='flex'>
            <FontAwesomeIcon icon={faShoppingCart} className="mx-1 py-4 bg-white bg-opacity-20 text-slate-200 font-semibold rounded-lg px-5 shadow-md backdrop-filter backdrop-blur-lg hover:bg-opacity-30 transition-colors duration-300" />
          <FontAwesomeIcon icon={faUser} className="mx-1 py-4 bg-white bg-opacity-20 text-slate-200 font-semibold rounded-lg px-5 shadow-md backdrop-filter backdrop-blur-lg hover:bg-opacity-30 transition-colors duration-300" />
            <button className='mx-1 py-3 bg-white bg-opacity-20 text-slate-200 font-semibold rounded-lg px-4 shadow-md backdrop-filter backdrop-blur-lg hover:bg-opacity-30 transition-colors duration-300'>
            Connect
          </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar