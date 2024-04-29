import React,{ useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SelfieIn from './pages/SelfieIn';
import Sidebar from './components/Sidebar';
import SelfieOut from './pages/SelfieOut';
import Overtime from './pages/Overtime';
import './App.css'

const App =() =>  {
 

  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path="selfiein" element={<SelfieIn/>}/>
      <Route path="selfieout" element={<SelfieOut/>}/>
      <Route path="overtime" element={<Overtime/>}/>
      </Routes> 
    </Sidebar>
    </BrowserRouter>
    
  );
};

export default App
