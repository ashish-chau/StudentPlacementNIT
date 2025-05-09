import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from './components/Login';
import AddPlacement from './components/AddPlacement';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add-placement" element={<AddPlacement />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
