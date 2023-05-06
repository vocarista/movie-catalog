import { useState, useEffect, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home"
import Description from "./pages/Description"
import NotFound from './pages/NotFound'
import Form from "./pages/Form"
import Confirm from './pages/Confirm'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all')
      const json = await response.json()
      setData(json)
    }
    fetchData()
  }, [])

  const memoizedData = useMemo(() => data, [data])

  return (
    <div className = "App ease duration-200 bg-slate-900 flex flex-col place-items-center min-h-full justify-center">
    <Routes>
      <Route path = "/" element = { <Home showList = { memoizedData }/> } />
      <Route path = "/desc/:id" element = { <Description showList = { memoizedData }/>} />
      <Route path = "/*" element = { <NotFound /> } />
      <Route path = "/form/:id" element = { <Form showList  = { memoizedData }/>} />
      <Route path = "/confirm" element = { <Confirm /> } />
    </Routes>
    </div>
  )
}

export default App
