import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomePage from './pages/HomePage';
import Footer from './component/Footer';

const App = () => {
  return (
    <div>
       <Navbar />
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage />} />
       </Routes>
      </BrowserRouter>
       <Footer />
    </div>
  )
}

export default App;