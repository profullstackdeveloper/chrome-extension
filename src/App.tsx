import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Login from './pages/Login';
import Tracking from './pages/Tracking';

function App() {

  return (
    <MemoryRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/tracking' element={<Tracking></Tracking>}></Route>
        </Routes>
      </Layout>
    </MemoryRouter>
  );
}

export default App;
