import React, { useState, useRef, useEffect } from 'react';
import './TodoApp.css';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue.trim()].sort());
      setInputValue('');
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    const filteredTasks = tasks.filter(task => task !== taskToDelete);
    setTasks(filteredTasks);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask} disabled={inputValue.trim() === ''}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleDeleteTask(task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
