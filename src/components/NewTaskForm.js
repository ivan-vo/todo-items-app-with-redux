import React, { useState } from 'react'

const useForm = (...fields) => (
    {
        reset: (value) => fields.forEach(f => f.reset(value)),
    })

export default function NewTaskForm(props) {
    const title = useTextField('','title');
    const dueDate = useTextField('','dueDate');
    const description = useTextField('','description');
    const form = useForm(title,dueDate,description)

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onSubmit(createdTask());
        form.reset('');
    }

    function useTextField(init,name) {
        const [value, setValue] = useState(init);
        return {
            value,
            name:name,
            onChange: (event) => setValue(event.target.value),
            reset: (value) => setValue(value)
        }
    }

    const createdTask = () => {
        return { title: title.value, done: false, description: description.value, dueDate: dueDate.value };
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input {...title} type="text" placeholder="title" />
            <input {...dueDate} type="date"  placeholder="2021, 2, 20" />
            <input {...description} type="text" placeholder="Description" />
            <button type="submit">Add new task</button>
        </form>
    )
}
