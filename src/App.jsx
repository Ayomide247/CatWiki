import { useState } from 'react';
import { FaCat } from 'react-icons/fa';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import More from './pages/More';
import About from './pages/About';
import 'react-loading-skeleton/dist/skeleton.css';




function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/More" element={<More />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
