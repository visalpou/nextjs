import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { MoonIcon , SunIcon , BeakerIcon } from '@heroicons/react/solid'
import {useState, useEffect} from'react' 

function Navbar() {
 const {systemTheme, theme, setTheme} = useTheme()
 const [mounted,setMounted] = useState(false);

 useEffect( () => {
    setMounted(true)
 }, [] )

// Darkmode
 const renderThemeChange = () => {
  if(!mounted) return null;

   const currentTheme = theme === 'system' ? systemTheme : theme;

   if(currentTheme === 'dark') {
     return ( 
       <SunIcon className="icon" role="button" onClick={() => setTheme('light')} />  
     )
   }else{
     return(
       <MoonIcon className="icon" role="button" onClick={() => setTheme('dark')} />
     )
   }

 }

  return (
    <div className='test'>
      <div className='logo'>
          <BeakerIcon className="icon" />
          <Link href='/'>តោះមើល</Link>
          {renderThemeChange()}
      </div>
      <nav>   
          <Link href='/tag/slug'><a className='text-primary-100'>កីទ្បា</a></Link>    
          <Link href='/tag/slug'><a className='text-primary-100'>បាល់ទាត់ជាតិ</a></Link>    
          <Link href='/tag/slug'><a className='text-primary-100'>ប្រដាល់ជាតិ</a></Link>    
      </nav>
    </div>
  )
}

export default Navbar