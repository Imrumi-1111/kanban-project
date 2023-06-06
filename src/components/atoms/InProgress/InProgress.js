import React, { useState } from 'react'
import styles from "./InProgress.module.css"
import {SlOptions} from "react-icons/sl"
import {RiDeleteBin5Fill} from "react-icons/ri"
import {BiCommentAdd} from "react-icons/bi" 
import {GiProgression} from "react-icons/gi"
import { ClockLoader } from 'react-spinners'


export function InProgress() {
  const[wantToSeeList,setWantToSeeList]=useState(false)
  //const[moreAdd,setMoreAdd]=useState(false)
    const[workinProgress,setWorkinProgress]=useState("")
    const[lis,setLis]=useState([])
    function handleChange(e){
       let datum= e.target.value
       setWorkinProgress(datum)
     
 }
 
    function handleToDelete(indexNum){
      const filteredData=lis.filter((ele,index)=>index!==indexNum);
        setLis(filteredData);
        localStorage.setItem("Task_In_Progress",filteredData)
        

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
      else{const data=[workinProgress,...lis]
      setLis(data)
      setWorkinProgress("")
      localStorage.setItem("Task_In_Progress",data)
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
        else{const data=[workinProgress,...lis]
        setLis(data)
        setWorkinProgress("")
        localStorage.setItem("Task_In_Progress",data)
        }   
  

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
        <div className={styles.container1}>    
      <p>In Progress <GiProgression/></p>
      <button className={styles.moreoption}><SlOptions/></button>
      </div>

        <div >
                <input className={styles.field} type='text' onChange={handleChange} value={workinProgress} onKeyDown={handleEnter} placeholder='    + Add Task'></input>
                <button onClick={handleAdd} className={styles.addbutton}> <BiCommentAdd/></button>
        </div>
        <span className={styles.taskContainer}>
          {
        lis.map((ele,index)=>{
          return(
            <div key={index} className={styles.singleTaskContainer}>
              
              <p  className={styles.singleTask} >{ele}</p>
              <button onClick={()=>handleToDelete(index)} className={styles.delButton}><RiDeleteBin5Fill/></button>
              
              </div>
              
            
          )
        })}</span>
        
        </div>
        
    }
    
    </div>
  )
}


