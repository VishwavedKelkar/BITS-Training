import React, { useEffect, useState } from 'react'

const Todolist = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const [editIndex, setEditIndex] = useState<number | null>(null);

    useEffect(() => {
        const storedToDo = JSON.parse(localStorage.getItem('toDoList') || '[]');
        if (storedToDo.length > 0) {
            setTodos(storedToDo);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('toDoList', JSON.stringify(todos));
    }, [todos])

    const addTodolist = () => {

        if (editIndex !== null) {
            const updatedTodo = [...todos];
            updatedTodo[editIndex] = input;
            setTodos(updatedTodo);
            setEditIndex(null);
        } else {
            setTodos([...todos, input])
        }

        setInput('');
    };

    const deleteToDoList = (index: number) => {
        setTodos(todos.filter(((_, i) => i !== index)));

        // const updatedTodo = [...todos];
        // updatedTodo.splice(index, 1);
        // setTodos(updatedTodo)
    }

    const editToDoList = (index: number) => {
        setInput(todos[index]);
        setEditIndex(index);
    }

    return (
        <>
            <h1>To-Do List</h1>
            <div>
                {input}
                <br />
                <input type='text' value={input} onChange={(e) => { setInput(e.target.value) }} />
            </div>
            <br />
            <button onClick={addTodolist}>Add</button>

            <ul>
                {todos.map((todos, i) => (
                    <li key={i}>{todos}
                        <button onClick={() => { editToDoList(i) }}>  Edit</button>
                        <button onClick={() => { deleteToDoList(i) }}>  Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Todolist