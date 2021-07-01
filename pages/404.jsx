import React,{useEffect} from 'react'
import {useRouter} from 'next/router';

export default function Notfound() {


    const router=useRouter();


useEffect(() => {
   setTimeout(()=> {
    router.push('/')
   },3000)
 
}, [])


    return (
        <div>
            <h3>page not found</h3>
            <p>Go to <a href='/'>home page</a></p>
        </div>
    )
}
