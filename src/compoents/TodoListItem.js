import './TodoListItem.scss';

const TodoListItem = ({ checked, children, id, todos, setTodos }) => {
  const handleOnClick = (id) => {
    const index = todos.findIndex((item) => item.id === id)
    const itemUnMutate = {id, checked: !todos[index].checked, todo: todos[index].todo}
    setTodos([...todos.splice(0, index), itemUnMutate, ...todos.splice(1)])
  }  

  const handleOnDelete = (id) => {
    const index = todos.findIndex((item) => item.id === id)
    setTodos([...todos.splice(0, index), ...todos.splice(1)])
    // if (id === 0){
    //   setTodos([...todos.splice(1)])
    // } else {
    //   setTodos([...todos.splice(0, id), ...todos.splice(id)])
    // }
  }

  return (
    <div className="todoListItem" >
      <div className={checked} onClick={() => handleOnClick(id)}>
        <div className="material-icons checkbox">
          {checked === 'checks' ? 'check_box_outline_blank' : 'check_box'}
        </div>
        <div className="text">{children}</div>
      </div>

      <div className="material-icons delete" onClick={() => handleOnDelete(id)}>delete</div>
    </div>
  );
};

export default TodoListItem;
