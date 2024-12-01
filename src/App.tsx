import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LandingPage from './-components/LandingPage';
import Home from './-components/Home';
import About from './-components/About';
import Contact from './-components/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-blue-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Ayub Oketch</h1>
            <div className="space-x-4">
              <button style={{margin: '20px'}}>
                <a href="/home" className="text-white hover:text-blue-200">
                  Home
                </a>
              </button>
              <button style={{margin: '20px'}}>
                <a href="/about" className="text-white hover:text-blue-200">
                  About
                </a>
              </button>
              <button style={{margin: '20px'}}>
                <a href="/contact" className="text-white hover:text-blue-200">
                  Contact
                </a>
              </button>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
