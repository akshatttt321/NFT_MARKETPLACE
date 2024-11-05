import React, { useEffect, useState } from 'react'
import Select from 'react-select'

function Mint() {

  const Dummy = ["dummy7.png","dummy2.png","dummy3.png","dummy4.png","dummy8.png"]
  const MintName = ['Mint1','Mint2','Mint3','Mint4','Mint5']
  const Creator = ['0x1234...','0x5678...','0x9abc...','0xdef0...','0x1234...']
  const [dummy, setDummy] = useState([Dummy[0]])
  const [creator, setCreator] = useState([Creator[0]])
  const [mintName, setMintName] = useState([MintName[0]])
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [i, setI] = useState(0); 
  const [hour,setHour]= useState('1 hour')
  const hours = ['1 hour','6 hours','24 hours','1 week','1 month']
  const [numberOfMints, setNumberOfMints] = useState(10)
  const [click, setClick] = useState(false)
  const [options,setOptions] =useState([
    { value: 'Ethereum', label: <div className='flex justify-around items-center'><h1 className=' font-semibold text-xl font-playfair'>ETH</h1><img className='w-5 h-5' src="Ethereum.png" alt="ETH" /> </div>,selected:true },
    { value: 'Base', label: <div className='flex justify-around  items-center'><h1 className=' font-semibold text-xl font-playfair'>Base</h1><img className='w-5 h-5' src="Base.png" alt="Base" /> </div>,selected:false },
    { value: 'Optimism', label:<div className='flex justify-around  items-center'><h1 className=' font-semibold text-xl font-playfair'>OP</h1><img className='w-5 h-5' src="Optimism.png" alt="Optimism" /></div>,selected:false },
    { value: 'Arbitrum', label: <div className='flex justify-around  items-center'><h1 className=' font-semibold text-xl font-playfair'>ARB</h1><img className='w-5 h-5' src="Arbitrum.png" alt="Arbitrum" /></div>,selected:false },
    { value: 'Linea', label: <div className='flex justify-around  items-center'><h1 className=' font-semibold text-xl font-playfair'>Linea</h1><img className='w-5 h-5' src="Linea.png" alt="Arbitrum" /> </div>,selected:false }
  ])

  const selectStyles = {
    control: (styles,state) => ({
      ...styles,
      backgroundColor: 'zinc',
      border: '1px solid white',
      width: '150px',
      height: '40px',
      fontSize: '20px',
      fontFamily: 'Playfair Display',
      fontWeight: '400',
      borderRadius: '10px',
      cursor: 'pointer',
      '&:hover': {
        border: '1px solid white',
        boxShadow: '0px 0px 10px 0px gray',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white', 
      fontWeight: '400', 
      fontStyle: 'italic', 
      fontSize: '1.25rem',
    }),

    option: (styles,state) => ({
      ...styles,
      backgroundColor: state.isSelected ? 'gray' : 'white',
      color: state.isSelected ? 'white' : 'black', 
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'gray',
        color: 'white',
      },
    })
  }
  function cardHandler() {
    setI((prevI) => {
      const newI = prevI + 1 > 4 ? 0 : prevI + 1;
      setHour(hours[newI]);
      setCreator(Creator[newI]);
      setMintName(MintName[newI]);
      setDummy(Dummy[newI]);
      return newI;
    });
  }

  useEffect(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 4500);
  },[hour])


  useEffect(() => {
    const interval = setInterval(() => {
      cardHandler();
    }, 5000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className='bg-black mt-[68px] h-screen'>
      <div className='h-[65vh] bg-custom-radial bg-center p-6 flex justify-between text-white'>
        <div className='flex flex-col items-center'>
        <h1 className=' m-4 mb-0 font-semibold text-3xl font-playfair '>Mint Terminal</h1>
        <p className='text-sm font-assistant font-medium'>New Public Mints</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='m-4 mb-0 font-semibold text-xl font-playfair'>Trending Mint</p>
          <div className='overflow-hidden bg-gradient-to-r from-[#6b7280] to-[#000000] bg-clip-text m-2 mt-0'>
          <p className={`${isTransitioning?'slideIn':'slideOut'} text-center bg-gradient-to-r  from-blue-200 to-blue-300 bg-clip-text text-lg font-assistant font-bold text-transparent transition-all`}>{hour}</p>
          </div>
          <div className='m-2 mt-1 rounded-2xl'>
          <div className='overflow-hidden w-60 border-2 border-gray-400 bg-white backdrop-filter back bg-opacity-10 rounded-2xl flex justify-center'>
          <button className={`${isTransitioning?'slideIn':'slideOut'} text-gray-200 text-lg font-sans font-semibold transition-all`}>{numberOfMints} Mints</button>
          </div>
          </div>
          <div className={`m-4 mt-6 ${isTransitioning? "cardSlideIn":"cardSlideOut"} bg-gray-900 border-[1px] border-gray-600 shadow-lg shadow-slate-600 rounded-2xl h-[43vh] w-[30vw]`}>
            <div className='flex flex-col'>
              <div className='flex'>
                <img className='h-32 w-[120px] m-4 rounded-2xl border-4 border-gray-400' src={`${dummy}`} alt="ETH" />
                <div className='flex justify-center items-start flex-col'>
                  <p className='font-bold text-2xl font-playfair'>{mintName}</p>
                  <p className='font-medium text-gray-300 text-sm font-playfair'>Creator: {creator}</p>
                  </div>
              </div>
              <div className='mx-2 flex rounded-md backdrop-filter backdrop-blur-xl bg-white bg-opacity-10 flex-col'>
                <div className='flex my-1 justify-between'>
                  <p className='mx-2 text-sm text-white  font-playfair font-medium'>Limited Edition</p>
                  <p className='mx-2 text-sm text-white font-playfair font-medium'>Total Supply: 1000/2000</p>
                </div>
                <div className='flex my-1 justify-between'>
                  <button className='mx-2 text-white text-sm font-medium font-playfair rounded-md'>End Date: *End Date*</button>
                  <button className='mx-2 text-white text-sm font-medium font-playfair rounded-md'>Mint Price : Free</button>
                </div>
              </div>
              <p className='mx-3 my-2 text-gray-400 text-semibold text-[10px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque sed molestias dicta quasi facilis nesciunt officiis in, obcaecati non, nisi error magnam repellendus, beatae sapiente sit voluptatibus ipsam soluta numquam.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <Select className='m-4 mb-0 text-white font-semibold text-xl font-playfair'
          options={options}
          defaultValue={options[0]}
          styles={selectStyles}
          ></Select>
        </div>
      </div>
      <div className='flex mt-10 flex-col'>
      <div className='flex bg-gray-800 backdrop-filter backdrop-blur-lg bg-opacity-20 border-y-[1px] border-gray-400 w-[100vw] justify-start items-center'>
      {options.map((option,index) => (
        <div key={index} className= {`flex justify-center px-8 mx-2 rounded-md items-center ${option?.selected?'bg-white backdrop-filter backdrop-blur-lg bg-opacity-10':""} hover:grayscale-0   ${option?.selected?'grayscale-0':""}grayscale-[100%] hover:backdrop-blur-lg hover:backdrop-filter hover:bg-white hover:bg-opacity-10 cursor-pointer`}
        onClick={() =>{
         let updatedOptions = options.map((option,i) => {
            return{
            ...option,
            selected: i===index
            }})
          console.log(updatedOptions)
          updatedOptions?setOptions(updatedOptions):''
        }}
        >
        <img key={index} className={`h-6 w-6 my-2 bg-clip-content `}src={`${option?.value}.png`}></img>
        {options[index]?.selected?<p className='text-white ml-2 font-bold text-lg font-playfair'>{option?.value}</p>:''}
        </div>
      ))}
      </div>
      </div>
      </div>
  )
}

export default Mint