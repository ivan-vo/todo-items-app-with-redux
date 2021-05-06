import React from 'react'

export default function TodoListSidebar(props) {

    function setTasks(tasklist) {
        props.onClick(tasklist);
    }
    const getClass = (id) => {
        if (id === props.SL.id) {
            return 'selected-list-button';
        }
        else{
            return '';
        }      
    }
    
    return (
        <aside className='todo-list-sidebar'>
            {
                props.todoLists.map(tasklist => (<button className={getClass(tasklist.id)} onClick={() => setTasks(tasklist)} key={tasklist.title}>{tasklist.title}</button>))
            }
        </aside>
    )
}
