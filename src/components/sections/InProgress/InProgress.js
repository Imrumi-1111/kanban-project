import React, { useState } from 'react'
import styles from "./InProgress.module.css"
import {SlOptions} from "react-icons/sl"
import {RiDeleteBin5Fill} from "react-icons/ri"
import {BiCommentAdd} from "react-icons/bi" 
import { ClockLoader } from 'react-spinners'
import {GiProgression} from "react-icons/gi"
import { v4 as uuidv4 } from "uuid";

export default function InProgress() {
  const[wantToSeeList,setWantToSeeList]=useState(false)
  const[moreAdd,setMoreAdd]=useState(false)
  const[head,setHead]=useState("")
    const[workinProgress,setWorkinProgress]=useState("")
    const[lis,setLis]=useState([])
    function handleChange(e){
       let datum= e.target.value
       setWorkinProgress(datum)
     
 }
 
    function handleToDelete(indexNum){
      const filteredData=lis.filter((ele,index)=>index!==indexNum);
        setLis(filteredData);
        localStorage.setItem("Task_In_Progress",JSON.stringify(filteredData))
        

    }
    function handleToView(){
      setWantToSeeList(!wantToSeeList)
    }
    function handleAdd(){
      if(workinProgress===""){
        alert("Write the Task Please")
        setWorkinProgress("")
      }
      else if(lis.includes(workinProgress)){
        alert("Already")
        setWorkinProgress("")
      }
      else{const data=[...lis,workinProgress]
      setLis(data)
      setWorkinProgress("")
      localStorage.setItem("Task_In_Progress",JSON.stringify(data))
      }   

    }
    function handleEnter(e){
      if(e.keyCode===13){
        if(workinProgress===""){
          alert("Write the Task Please")
          setWorkinProgress("")
        }
        else if(lis.includes(workinProgress)){
          alert("Already")
          setWorkinProgress("")
        }
        else{
          
          const data=[...lis,workinProgress]

        setLis(data)
        setWorkinProgress("")
        localStorage.setItem("Task_In_Progress",JSON.stringify(data))
        }   
  

      }
    }
    function handleHead(e){

      setHead(e.target.value)
    }
    function handleheader(){
      
      setMoreAdd(!moreAdd)
    }
    function handleEnterhead(e){
      if(e.keyCode===13){
        setMoreAdd(!moreAdd)
      }


    }
  return (
    <div className={styles.main} >
      
     { !wantToSeeList ?<div className={styles.bluff_container}>
     <button className={styles.bluffbutton} onClick={handleToView}>Add a List</button>
     <br/>
     <ClockLoader color="#36d7b7" className={styles.clock} />
     </div>
     :
     <div className={styles.container}>
      <GiProgression className={styles.logo}/>
      
        <div className={styles.container1}>    
      {!moreAdd?  <div><input placeholder="    In Progress " onChange={handleHead} value={head} onKeyDown={handleEnterhead} className={styles.field1}></input>
      <button className={styles.moreoption} onClick={handleheader}><SlOptions/></button></div>:
      <h1>{head}</h1>}
      </div>

        <span className={styles.taskContainer}>
          {
        lis.map((ele,index)=>{
          return(
            <div key={uuidv4()} className={styles.singleTaskContainer}>
              
              <p  className={styles.singleTask} >{ele}</p>
              <button onClick={()=>handleToDelete(index)} className={styles.delButton}><RiDeleteBin5Fill/></button>
              
              </div>
              
            
          )
        })}</span>
        <div >
                <input className={styles.field} type='text' onChange={handleChange} value={workinProgress} onKeyDown={handleEnter} placeholder='    + Add Task'></input>
                <button onClick={handleAdd} className={styles.addbutton}> <BiCommentAdd/></button>
        </div>
        
        
        </div>
        
    }
    
    </div>
  )
}