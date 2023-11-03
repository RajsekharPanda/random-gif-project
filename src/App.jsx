import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative w-screen flex flex-col items-center background -mx-[355px] -my-[35px]'>
      <h1 className='bg-white rounded-lg text-4xl font-bold w-11/12 text-center mt-[40px]'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
