import React from "react";

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

function ToDo() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todoName) => {
    setTodos([...todos, { todoName, isCompleted: false }]);
  }

  const removeTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  const completeTodo = (index) => {
    setTodos(todos.map((todo, i) => {
      return i === index ?
        { ...todo, isCompleted: !todo.isCompleted }
        : todo
    }));
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTodos(todos.filter((todo) => !todo.isCompleted));
      console.log('Cleaned completed tasks');
    }, 3000);
    return () => clearInterval(interval);
  }, [todos]);

  return (
    <>
        <ToDoForm
          addTodo={addTodo}
        />
        <ToDoList
          todos={todos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
    </>
  );
}

export default ToDo;
