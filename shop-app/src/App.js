import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import NoPage from './Components/NoPage/NoPage';
import { Layout } from './Components/Layout/Layout'
import BeerCard from './Components/BeerCard/BeerCard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main/>}/>
          <Route path='/:id' element={<BeerCard/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
    </>
  );
}


export default App;
