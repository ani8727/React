import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black mb-4'>Tailwind test</h1>
    <Card username="code" btnText="Visit Me"/>
    <Card username="props" btnText="click me"/>
    </>
  )
}

export default App
