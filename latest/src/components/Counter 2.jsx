import React, { useState } from 'react'

const Counter2 = () => {
    const[count,setCount]=useState(0)

    const TwiceClick=()=>{
        setCount((p)=>p+1)
        setCount((p)=>p+1)
    }

  return (
    <>
    <div className='bg-cyan-100 h-50 w-40  align-items:centre flex  flex-col items-center justify-center'>
      <p>{count}</p>
    <button className='bg-black text-white' onClick={TwiceClick}>increase</button>
    </div>
    
    </>
  )
}

export default Counter2