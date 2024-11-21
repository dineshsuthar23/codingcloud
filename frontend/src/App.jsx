import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Registration from './components/registration'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Router from './Router'

function App() {
  

  return (
    <>
        <Router>

        </Router>

      {/* <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      </BrowserRouter> */}

    </>
  )
}

export default App
