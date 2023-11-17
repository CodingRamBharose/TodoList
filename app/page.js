"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleOnClick = (e) => {
    e.preventDefault();
    if(task.length>0 && desc.length>0){
      setTodoList([...todoList, { task, desc}])
      setTask("")
      setDesc("")
    }
  }

  const deleteTask = (index)=>{
    let copyTodoList = [...todoList]
    copyTodoList.splice(index,1)
    setTodoList(copyTodoList);
  }


  let taskContainer = <h3>No Task Available</h3>
  if (todoList.length > 0) {
    taskContainer = todoList.map((item, index) => {
      return <div key={index} className='taskcontainer'>
        <li className='first'>{item.task}</li>
        <li className='second'>{item.desc}</li>
        <button onClick={()=>{deleteTask(index)}}>Delete</button>
      </div>
    })
  }

  return (
    <>
      <div className="containner">
        <div className="header">
          <h1>My Todo List</h1>
        </div>
        <div className="maincontainer">
          <form>
            <input type="text" placeholder='Enter Task Here' value={task} onChange={(e) => {
              setTask(e.target.value)
            }} />
            <input type="text" required placeholder='Enter Description Here' value={desc} onChange={(e) => {
              setDesc(e.target.value)
            }} />
            <button onClick={(e) => { handleOnClick(e) }}>Add Task</button>
          </form>
        </div>
        <div className='tdcontiner'>
          <ul>
            {taskContainer}
          </ul>
        </div>
      </div>
    </>
  )
}

export default page
