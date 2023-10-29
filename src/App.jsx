import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen flex flex-col background'>
      <h1 className='bg-white rounded-sm'>RANDOM GIFS</h1>
      <div className='flex flex-col'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
