//import { useState } from 'react';
import './App.css';
//import Navbar from './components/atoms/navbar/navbar';
//import  InProgress  from './components/sections/InProgress/InProgress';
//import TodoCard from './components/sections/todoCard/todoCard';
//import TaskDone from './components/sections/TaskDone/TaskDone';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/organisms/main/main';
import Cool from './components/organisms/details/details';


function App() {
  return(
    <div>
      {/* <Cool/> */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/details/:itemId" element={<Cool />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
