import { useState } from 'react';
import './App.css';
import Navbar from './components/atoms/navbar/navbar';
import  InProgress  from './components/sections/InProgress/InProgress';
import TodoCard from './components/sections/todoCard/todoCard';
import TaskDone from './components/sections/TaskDone/TaskDone';

function App() {
  const[show1,setShow1]=useState(false)
  const[show2,setShow2]=useState(false)
  
  function handleClick1(){
    
    setShow1(true)

  }
  function handleClick2(){
    setShow2(true)
    

  }
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <div onClick={handleClick1}>

      <TodoCard />
      </div>
      {show1 && (
        <div onClick={handleClick2} className='content1'> 
      <InProgress/> 
      {show2 &&(
        <div>
      <TaskDone />
      </div>)}

      </div>

      )}
      </div>
    </div>
  );
}

export default App;
