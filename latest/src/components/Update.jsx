import React from 'react'
import { useState } from 'react';

const Update = () => {
      const [user, setUser] = useState({
    name: "Bharath",
    age: 20,
  });

  const increaseAge = () => {
    setUser((prev) => ({
      ...prev,
      age: prev.age + 1,
    }));
  };



  return (
   <>
      <div className='bg-amber-200 h-50 w-40  align-items:centre flex  flex-col items-center justify-center '>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>

      <button className='bg-black text-white' onClick={increaseAge}>Increase Age</button>
    </div>
   
   </>
  )
}

export default Update
