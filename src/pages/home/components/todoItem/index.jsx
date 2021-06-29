import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Delete, Check } from "@material-ui/icons";
import { TodoContext } from "../../../../contexts/todo.context";
import styled from "styled-components";
import "./index.css";
import { ListItem } from "@material-ui/core";
function Todo({ id, description, done, random }) {
  const todoContext = useContext(TodoContext);

  const handleDelete = (e) => {
    e.preventDefault();
    todoContext.dispatch({ type: "remove", payload: { id } });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    todoContext.dispatch({
      type: "update",
      payload: { id, description, done: true },
    });
  };

  const Done = done ? <Sim>Sim</Sim> : <Nao>Não</Nao>;
  return (
    <Container className={id % 2 === 0 ? "par" : "impar"}>
      <div>
        <ListItem>
          {id} - {description}
        </ListItem>
        <Div>
          <ListItem>Feito? </ListItem>
          <ListItem>{Done}</ListItem>
        </Div>
      </div>
      <Bottom>
        <Button
          color="primary"
          size="small"
          variant="contained"
          style={done ? { fontSize: 10, opacity: 0 } : { fontSize: 10 }}
          startIcon={<Check style={{ fontSize: 12 }} />}
          onClick={(e) => handleUpdate(e)}
        >
          Done
        </Button>
        <Button
          color="secondary"
          size="small"
          variant="contained"
          startIcon={<Delete style={{ fontSize: 10 }} />}
          style={{ fontSize: 10 }}
          onClick={(e) => handleDelete(e)}
        >
          Delete
        </Button>
      </Bottom>
    </Container>
  );
}

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Container = styled.article`
  display: flex;
  justify-content: space-between;
`;
const Sim = styled.div`
  color: green;
  margin: 0;
  margin-left: 5;
`;
const Nao = styled.div`
  color: red;
  margin: 0;
  margin-left: 5;
`;
const Div = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export default Todo;
