import React, { useEffect, useState } from 'react'

const Todo = () => {

    const [toDO, setToDo] = useState([]);
    const [todoInput, settoDoInput] = useState('');
    const [index, setIndex] = useState(null);

    useEffect(() => {
        const storedToDo = JSON.parse(localStorage.getItem('toDOList') || '[]');
        setToDo(storedToDo);
    }, []);

    useEffect(() => {
        localStorage.setItem('toDoList', JSON.stringify(toDO));
    }, [toDO]);


    const getToDoList = () => {
        const toDoList = JSON.parse(localStorage.getItem('toDoList') || '[]');
        setToDo(toDoList);
    }

    const addToDoList = () => {
        // console.log("Added a new item to the list"); 

        const newToDo = {
            text: todoInput,
        }
        const toDoList = JSON.parse(localStorage.getItem('toDoList') || '[]')
        toDoList.push(newToDo);
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
        setToDo(toDoList);
        settoDoInput('');
    }

    const editToDoList = () => {

    }

    const deleteToDoList = () => {

    }


    return (
        <>
            <label>
                {todoInput}
                <br />
                <input type='text' value={todoInput} onChange={(e) => { settoDoInput(e.target.value) }} />
            </label>
            <br />
            <button onClick={addToDoList}>Add</button>


            <ul>
                {toDO.map((todo, i) => (
                    <li key={i}>
                        {todo.text}
                        <button onClick={() => editToDoList(i)} > Edit</button>
                        <button onClick={() => deleteToDoList(i)}>Delete</button>
                    </li>
                ))}
            </ul >

            {/* <button onClick={editToDoList}>Edit</button>
            <button onClick={deleteToDoList}>Delete</button> */}

        </>
    )
}

export default Todo