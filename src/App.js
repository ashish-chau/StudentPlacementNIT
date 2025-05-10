import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from './components/Login';
import AddPlacement from './components/AddPlacement';
import Header from './components/Header';
import Footer from './components/Footer';
// import PrivateRoute from './utils/PrivateRoute';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/add-placement"
          element={
            <PrivateRoute>
              <AddPlacement />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
