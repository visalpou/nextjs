import React from 'react'
import Link from 'next/link'
import {useEffect } from 'react'
import {useRouter} from 'next/router'

function NotFound() {
    const router = useRouter();
    useEffect(()=>{
       setTimeout(()=>{
           router.push('/');
       },3000) 
    }, [])

    return (
    <div className='text-center'>
        <h1>Ooooooops.......</h1>
        <h2>That page cannot be found</h2>
        <p className='text-primary-300 no-underline'>Go to back to the <Link href='/'> Homepage  </Link> </p>
    </div>
    )
}

export default NotFound