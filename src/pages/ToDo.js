import React from "react";
import { API, graphqlOperation } from 'aws-amplify';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

import * as queries from "../graphql/queries";

function ToDo(props) {
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

  React.useEffect(async () => {
    const allTodos = await API.graphql(graphqlOperation(queries.listTodos));
    const todos = allTodos.data.listTodos.items.map(todo => {
      return {
        todoName: todo.TaskName,
        isCompleted: false
      }
    });
    setTodos(todos);
  }, []);

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
