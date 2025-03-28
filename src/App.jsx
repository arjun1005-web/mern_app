import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo'
import GridView from './GridView';
import Navbar from './assets/components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Todo/>

    <Routes>
      <Route path='/' element={<Todo/>}/>
      <Route path='/gridview' element={<GridView/>}/> 
      <Route path='/profile' element={<GridView/>}/>
    </Routes>
    </BrowserRouter>
    
  
  
);
}

export default App;

