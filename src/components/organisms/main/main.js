import { useState } from "react";
import InProgress from "../../sections/InProgress/InProgress";
import TaskDone from "../../sections/TaskDone/TaskDone";
import Navbar from "../../atoms/navbar/navbar";
import TodoCard from '../../sections/todoCard/todoCard'
import styles from './main.module.css'


export default function Main() {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)

  function handleClick1() {
    setShow1(true)
  }
  function handleClick2() {
    setShow2(true)
  }
  return (
    <div className="App">
      <Navbar />

      <div className={styles.content}>
        <div onClick={handleClick1}>

          <TodoCard />
        </div>
        {show1 && (
          <div onClick={handleClick2} className={styles.content1}>
            <InProgress />
            {show2 && (
              <div>
                <TaskDone />
              </div>
            )}
          </div>

        )}
      </div>
    </div>
  )
}