import './App.css';
import TodoTemplate from './compoents/TodoTemplate';
import TodoInsert from './compoents/TodoInsert';
import TodoList from './compoents/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 0, checked: false, todo: 'test1' },
    { id: 1, checked: false, todo: 'test2' },
    { id: 2, checked: false, todo: 'test3' },
  ]);

  return (
    <>
      <div>Todo App</div>
      <TodoTemplate>
        <TodoInsert todos={todos} setTodos={setTodos}></TodoInsert>
        <TodoList todos={todos} setTodos={setTodos}></TodoList>
      </TodoTemplate>
    </>
  );
}

export default App;
