import React, { useState } from 'react';
import styles from "./InProgress.module.css";
import { SlOptions } from "react-icons/sl";
import { RiDeleteBin5Fill, RiSave3Fill } from "react-icons/ri";
import { GrEdit } from 'react-icons/gr'
import { BiCommentAdd } from "react-icons/bi";
import { ClockLoader } from 'react-spinners';
import { GiProgression } from "react-icons/gi";
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';

export default function InProgress({ item }) {
  const [wantToSeeList, setWantToSeeList] = useState(false);
  const [workinProgress, setWorkinProgress] = useState("");
  const [lis, setLis] = useState([]);
  const [title, setTitle] = useState("")
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editValue, setEditValue] = useState("");

  function handleChange(e) {
    let datum = e.target.value;
    setWorkinProgress(datum);
  }

  function handleToDelete(indexNum) {
    const filteredData = lis.filter((ele, index) => index !== indexNum);
    setLis(filteredData);
    localStorage.setItem("Task_In_Progress", JSON.stringify(filteredData));
  }

  function handleToView() {
    setWantToSeeList(!wantToSeeList);
  }

  function handleAdd() {
    if (workinProgress === "") {
      alert("Write the Task Please");
      setWorkinProgress("");
    } else if (lis.includes(workinProgress)) {
      alert("Already");
      setWorkinProgress("");
    } else {
      const data = [workinProgress, ...lis];
      setLis(data);
      setWorkinProgress("");
      localStorage.setItem("Task_In_Progress", JSON.stringify(data));
    }
  }

  function handleEdit(index) {
    setEditingIndex(index);
    setEditValue(lis[index]);
  }

  function handleEditChange(e) {
    setEditValue(e.target.value);
  }

  function handleEditSave(index) {
    const editedData = lis.map((item, i) =>
      i === index ? editValue : item
    );
    setLis(editedData);
    setEditingIndex(-1);
    setEditValue("");
    localStorage.setItem("Task_In_Progress", JSON.stringify(editedData));
  }
  function handleTitle(e){
    setTitle(e.target.value)
  }

  function handleEnter(e) {
    if (e.keyCode === 13) {
      if (workinProgress === "") {
        alert("Write the Task Please");
        setWorkinProgress("");
      } else if (lis.includes(workinProgress)) {
        alert("Already");
        setWorkinProgress("");
      } else {
        const data = [workinProgress, ...lis];
        setLis(data);
        setWorkinProgress("");
        localStorage.setItem("Task_In_Progress", JSON.stringify(data));
      }
    }
  }

  return (
    <div className={styles.main}>
      {!wantToSeeList ? (
        <div className={styles.bluff_container}>
          <button className={styles.bluffbutton} onClick={handleToView}>
            Add a List
          </button>
          <br />
          <ClockLoader color="#36d7b7" className={styles.clock} />
        </div>
      ) : (
        <div className={styles.container}>
          <GiProgression className={styles.logo} />

          <div className={styles.container1}>
         
            <input value={title}
              placeholder="    In Progress "
              className={styles.field1}
              onChange={handleTitle}
            />
            
           
            <button className={styles.moreoption}>
              <SlOptions />
            </button>
            <h1> {title}</h1>
          </div>

          <span className={styles.taskContainer}>
            {lis.map((ele, index) => {
              return (
                
                <div key={uuidv4()} className={styles.singleTaskContainer}>
                  
                  {editingIndex === index ? (
                    
                    <>
                     
                      <input
                        type="text"
                        value={editValue}
                        onChange={handleEditChange}
                      />
                     
                      
                      <button
                        onClick={() => handleEditSave(index)}
                        className={styles.delButton}
                      >
                        <RiSave3Fill/>
                      </button>
                      
                    </>
                  ) : (
                    <>
                      <p className={styles.singleTask}><Link to="/details/item2" className={styles.singleTask}>{ele}</Link></p>
                      <GrEdit
                        onClick={() => handleEdit(index)}
                        className={styles.editButton}
                        />
                      <button
                        onClick={() => handleToDelete(index)}
                        className={styles.delButton}
                      >
                        <RiDeleteBin5Fill />
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </span>
          <div>
            <input
              className={styles.field}
              type="text"
              onChange={handleChange}
              value={workinProgress}
              onKeyDown={handleEnter}
              placeholder="    + Add Task"
            ></input>
            <button onClick={handleAdd} className={styles.addbutton}>
              <BiCommentAdd />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
