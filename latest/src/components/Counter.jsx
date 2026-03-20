import React from 'react'
import { useState } from 'react'


const Counter = () => {
    const [count,setCount]=useState(0)

    const IncreaseClick=()=>{
        setCount((prev)=>prev+1)
    }
    const DecreaseClick=()=>{
        setCount((prev)=>prev-1)
    }

  return (
 <>
 <div className='bg-amber-200 h-50 w-40  align-items:centre flex  flex-col items-center justify-center '>
   
    <h2 className='bg-olive-800 p-5 rounded-2xl mb-5 text-white'>{count}</h2>
 <button className='bg-black text-white' onClick={IncreaseClick} >increase</button>
 <button  className='bg-black text-white flex flex-col mt-10' onClick={DecreaseClick}>decrease</button>
    </div>

 
 </>
  )
}

export default Counter