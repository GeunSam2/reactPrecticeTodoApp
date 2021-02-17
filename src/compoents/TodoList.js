import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, setTodos }) => {

  const TodoListItems = (input) => {
    console.log(input);
    return input.map((item) => (
      <TodoListItem
        key={item.id}
        id={item.id}
        checked={item.checked ? 'checks checked' : 'checks'}
        todos = {todos}
        setTodos = {setTodos}
      >
        {item.todo}
      </TodoListItem>
    ));
  };
  return <div>{TodoListItems(todos)}</div>;
};

export default TodoList;
