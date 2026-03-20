import React from 'react'
import { useState } from 'react';

const Toggle = () => {
     const [show, setShow] = useState(true);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };
return (
       <div className='bg-amber-300 h-50 w-40  align-items:centre flex  flex-col items-center justify-center'>
      <button className='bg-black text-white' onClick={handleToggle}>
        {show ? "Hide" : "Show"}
      </button >

      {show && <p>This is the text to show and hide.</p>}
    </div>
  )
}

export default Toggle
