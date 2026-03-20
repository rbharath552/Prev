import React from 'react'

import Counter from './components/Counter'
import Counter2 from './components/Counter 2'
import Toggle from './components/Toggle'
import Skills from './components/Skills'
import Update from './components/Update'

const App = () => {
  return (
    
    <>
    <div className='flex flex-col items-center'>
        <Counter/>
       <Counter2/>
       <Toggle/>
       <Skills/>
       <Update/>
        </div>
    
    
    
    </>
  )
}

export default App
