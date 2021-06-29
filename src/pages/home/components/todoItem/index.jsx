import React,{useContext,useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Delete, Check } from '@material-ui/icons'
import { TodoContext } from '../../../../contexts/todo.context'
import styled from 'styled-components'
import './index.css'


 function Todo({ id, description, done,random }) {

    const todoContext = useContext(TodoContext)
    useEffect(() => {
        const items = document.querySelectorAll('.item')
        console.log("this is " + items)
      }, [])
    const handleDeleteTodo = (e) => {
        e.preventDefault()
        todoContext.dispatch({ type: 'remove', payload: { id } })
      }

      const handleUpdateTodo = (e) => {
        e.preventDefault()
        todoContext.dispatch({ type: 'update', payload: { id, description, done: true } })
      }

      const Done = done
      ? <Sim >Sim</Sim>
      : <Nao>Não</Nao>
    return (
        <div className={id % 2 ===0?"par":"impar"}>
            <div >
                <div>{id} - {description}</div>
                <div>This is the Random id - {random}</div>
                <Div >Feito? {Done}</Div>
            </div>
            <div >
            <Button
          color='primary'
          size='small'
          variant='contained'
          style={done ? { fontSize: 10, opacity: 0 } : { fontSize: 10 }}
          startIcon={<Check style={{ fontSize: 15 }} />}
          onClick={(e) => handleUpdateTodo(e)}
        >Done</Button>
        <Button
          color='secondary'
          size='small'
          variant='contained'
          startIcon={<Delete style={{ fontSize: 15 }} />}
          style={{ fontSize: 10, marginLeft: 5 }}
          onClick={(e) => handleDeleteTodo(e)}
        >Delete</Button>
            </div>
        </div>
    )
}

const Sim = styled.div`
color: green;
margin:0;
margin-left: 5;

`;
const Nao = styled.div`
color: red;
margin:0;
margin-left: 5;

`;
const Div = styled.div`
display:flex;
margin-bottom:10px
`;
export default Todo