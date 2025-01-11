import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUS from './components/contactUs/ContactUs';
import Dashboard from './components/dashboard/DashBoard';
import Hero from './components/hero/Hero';
import NavBar from './components/navBar/NavBar';

const App: React.FC = () => {

  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<ContactUS />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  </Router>
  )
}

export default App
