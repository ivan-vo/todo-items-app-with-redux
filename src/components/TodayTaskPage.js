import React, { useEffect, useState } from 'react'
import Task from './Task'

export default function TodayTaskPage(props) {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/collection/today")
          .then(res => res.json())
          .then(setTasks)
      }, [])
    const removeTask = (task) => {
        setTasks(tasks.filter(t => t.itemId !== task.itemId));
    }
    const setCheckbox = (task, oldtask) => {
        let list = tasks;
        let index = list.indexOf(oldtask);
        list[index] = task;
        setTasks([...list])
    }
    return (
        <>
            <h1>TodayTaskPage!!!</h1>
            {
                tasks.map(task => (<Task key={task.itemId} taskLists={props.taskLists} today={true} setCheckbox={setCheckbox} removeTask={removeTask} task={task}></Task>))
            }
        </>
    )
}
