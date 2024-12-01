import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import React Router components
import About from './-components/About';  // Adjust import based on your folder structure
import Contact from './-components/Contact';
import Home from './-components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
