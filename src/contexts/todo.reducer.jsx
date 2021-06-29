export default function reducer(state, action) {
  const { v4: uuidv4 } = require("uuid");

  const addTodo = (todo) => {
    const randomId = uuidv4();
    let todoItem = {
      id: state.length + 1,
      description: todo,
      done: false,
      random: randomId,
    };
    return [...state, todoItem];
  };

  const updateTodo = (todo) => {
    const updatedTodo = state.map((item) => {
      if (item.id === todo.id) {
        return todo;
      }
      return item;
    });

    return updatedTodo;
  };

  const deleteTodo = (todo) => {
    const updatedTodo = state.filter((item) => {
      return item.id !== todo.id;
    });

    return updatedTodo;
  };

  switch (action.type) {
    case "add":
      return addTodo(action.payload);
    case "update":
      return updateTodo(action.payload);
    case "remove":
      return deleteTodo(action.payload);
    default:
      return null;
  }
}
