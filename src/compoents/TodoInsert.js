import './TodoInsert.scss';
import { useState, useCallback } from 'react';

const TodoInsert = ({ todos, setTodos }) => {
  const [inputs, setInputs] = useState('');

  const handleInput = (input) => {
    console.log(input.target.value);
    setInputs(input.target.value);
  };

  const handlePress = (input) => {
    if (input.key === "Enter") {
      handleButton()
    }
  }

  const callBackInput = useCallback((e) => {
    handleInput(e);
  }, []);
  const handleButton = () => {
    let id = 0
    try {
      id = todos[todos.length - 1].id + 1;
    } catch {
      id = 0
    }
    setTodos([...todos, { id, todo: inputs, checked: false }]);
    setInputs("")
  };

  return (
    <div className="toDoInsert">
      <input
        placeholder="할 일을 입력합시다"
        onChange={callBackInput}
        onKeyPress={handlePress}
        value={inputs}
      ></input>
      <button
        className="material-icons toDoApply"
        type="submit"
        onClick={handleButton}
      >
        done
      </button>
    </div>
  );
};

export default TodoInsert;
