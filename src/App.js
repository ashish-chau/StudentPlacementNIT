import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from './components/Login';
import AddPlacement from './components/AddPlacement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add-placement" element={<AddPlacement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
