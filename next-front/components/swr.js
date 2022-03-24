import useSWR from "swr"
import env from './../env'

const fetcher = async ()=>{
    const response = await fetch(`${env.apiUrl}/categories_list`)
    const data = await response.json()
    return data
}

function GetCategory(){
   const {data,error} = useSWR('getcategory', fetcher)
   if (error) return 'error'
   if (!data) return 'loading...'
}