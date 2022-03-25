import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Navbar() {
  return (
    <nav>
        <div className='logo'>
            <Image src='/apple_logo.png' width={150} height={100} />
        </div>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href='/contact'><a>Contact Us</a></Link>
    </nav>
  )
}

export default Navbar