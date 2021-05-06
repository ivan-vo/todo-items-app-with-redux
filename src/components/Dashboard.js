import React from 'react'
import  { NavLink } from "react-router-dom";

export default function Dashboard(props) {
    return (
        <aside className='todo-list-sidebar'>
            <div>
                <h1>Dashboard</h1>
                <nav>
                    <ul>
                        {
                            props.taskLists.map(
                                taskList => (
                                    <li key={taskList.taskListId}><NavLink activeClassName="activ-link" to={`/todo-lists/${taskList.taskListId}`}>{taskList.name}</NavLink></li>
                                )
                            )
                        }
                        <li>
                            <NavLink to="/today" activeClassName="activ-link">TodayTaskPage</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>

    )
}
