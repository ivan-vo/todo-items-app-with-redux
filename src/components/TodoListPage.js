import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import NewTaskForm from './NewTaskForm'
import Task from './Task'

export default function TodoListPage(props) {
    let { id } = useParams()
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/lists/${id}/tasks`)
            .then(res => res.json())
            .then(setTasks)
    }, [id])
    const addTask = (task) => {
        setTasks([...tasks, task]);
        fetch(`http://localhost:5000/lists/${id}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(task)
        })
    }
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
            {
                tasks.map(task => (<Task key={task.itemId} setCheckbox={setCheckbox} removeTask={removeTask} task={task}></Task>))
            }
            <NewTaskForm onSubmit={addTask} />
        </>
    )
}
