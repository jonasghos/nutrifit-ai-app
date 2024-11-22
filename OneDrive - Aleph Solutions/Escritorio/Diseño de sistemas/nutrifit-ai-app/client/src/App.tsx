import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PlanWithAI from './pages/PlanWithAI';
import Activities from './pages/Activities';
import Profile from './pages/Profile';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/planwithai" element={<PlanWithAI/>} />
        <Route path="/activities" element={<Activities/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;