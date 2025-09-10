import { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
export const Navbar = () => {
  const [mobilemenu , setmobilemenu] = useState(false) ; 
  useEffect(()=>{
    if(mobilemenu){
      document.body.style.overflow = "hidden"   
    }else{
      document.body.style.overflow = "auto"
    }
    return ()=>{
      document.body.style.overflow = "auto"
    }
  },[mobilemenu])
  return (
    <div className="absolute top-0 left-0 w-full z-0">
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo}/>
        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a href="#Testmonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
        <img src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' onClick={()=>setmobilemenu(true)} />
      </div>
      {/* {mobile menu} */}
      <div className=  {`  md:hidden  ${mobilemenu ?  'fixed w-full' : 'h-0 w-0' }   right-0 top-0 bottom-0 overflow-hidden  bg-white transition-all `}>
        <div>
          <img src={assets.cross_icon} alt=""  className='w-6 ms-auto pt-4 me-3 cursor-pointer' onClick={()=>setmobilemenu(false)} />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-4 px-5 text-lg font-medium'>
          <a href="#Header" className='px-4 py-2 rounded-full inline-block '  onClick={()=>setmobilemenu(false)}>
          Home</a>
          <a href="#About" className='px-4 py-2 rounded-full inline-block '  onClick={()=>setmobilemenu(false)}>
          About</a>
          <a href="#Porjects" className='px-4 py-2 rounded-full inline-block '  onClick={()=>setmobilemenu(false)}>
          Porjects</a>
          <a href="#Testmonials" className='px-4 py-2 rounded-full inline-block '  onClick={()=>setmobilemenu(false)}>
          Testmonials</a>
        </ul>
      </div>
    </div>
  )
}
