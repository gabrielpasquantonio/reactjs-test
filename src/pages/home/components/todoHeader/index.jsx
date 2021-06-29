import React, { useState, useContext } from 'react';
import { TodoContext } from '../../../../contexts/todo.context';
import { Button } from '@material-ui/core';

export default function TodoHeader() {

    const todoContext = useContext(TodoContext);
    const [todo, setTodo] = useState(() => "");


 
    const handleAddTodo = (e) => {
        e.preventDefault()
        if (!todo) {
            alert('Please add some activity')
          } else {
        todoContext.dispatch({ type: 'add', payload: todo });
        
        setTodo("")
          }
    }

    return (
        <div>
            <p>Lista de Atividades</p>
            <div >
                <input type="text"  value={todo} onChange={(e) => { setTodo(e.target.value) }} placeholder="digite para filtrar"></input>
                <Button 
                variant="contained" 
                color="primary" 
                size="small"  
                onClick={(e) => handleAddTodo(e)
                }>Add</Button>
            </div>
        </div>
    )
}