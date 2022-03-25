import React from 'react'
import styles from '../../styles/User.module.css'
import Link from 'next/link'
export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
      props:{user:data}
    }
}
// fetch data
function users({user}) {
  return (
    <>
        {user.map(users => (
          <Link href={'/users/' + users.id} key={users.id}>  
             <h2> <a className={styles.user} >{users.name}</a> </h2>           
          </Link>
        ))}
    </>
  )
}

export default users