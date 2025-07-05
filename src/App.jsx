import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSun, FaMoon, FaPlus, FaTrash, FaReact, FaGithub, FaLinkedin, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import QuickTask from './Component/QuickTask';
import TaskCategories from './Component/TaskCategories';
import DatePicker from './Component/DatePicker';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('General');
  const [dueDate, setDueDate] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: task,
        category,
        dueDate,
        completed: false
      }]);
      setTask('');
    }
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>Todo List</h1>
          <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Input Area */}
        <div className="input-area">
          <input
            type="text"
            placeholder="Add a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <div className="input-options">
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="General">General</option>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
            </select>
            <div className="date-input">
              <FaCalendarAlt />
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                placeholder="dd-mm-yyyy"
              />
            </div>
            <button onClick={addTask} className="add-btn">
              <FaPlus /> Add
            </button>
          </div>
        </div>

        {/* Task List */}
        <div className="task-list">
          {todos.length === 0 ? (
            <div className="empty-state">
              <p>No tasks yet</p>
              <p>Add your first task above</p>
            </div>
          ) : (
            todos.map(todo => (
              <div key={todo.id} className={`task-item ${todo.completed ? 'completed' : ''}`}>
                <div className="task-content">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                  />
                  <div>
                    <span className="task-text">{todo.text}</span>
                    <div className="task-meta">
                      <span className={`category ${todo.category.toLowerCase()}`}>
                        {todo.category}
                      </span>
                      {todo.dueDate && (
                        <span className="due-date">
                          <FaCalendarAlt /> {new Date(todo.dueDate).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button onClick={() => deleteTask(todo.id)} className="delete-btn">
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
<div className="footer">
<p>
    Built by 
    <a target="_blank" 
      rel="noopener noreferrer"
      className="author-link"
    >
      Jash Pandya
    </a>&nbsp;
    using &nbsp;
    <FaReact className="react-icon" />
  </p>
  <div className="footer-links">
    <a 
      href="https://github.com/jashPandyaa" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <FaGithub />
    </a>
    <a 
      href="https://linkedin.com/in/jash-pandya" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </a>
    <a 
      href="mailto:jashpandyaa@gmail.com" 
      aria-label="Email"
    >
      <FaEnvelope />
    </a>
  </div>
  <p className="hint">
    <FaPlus className="plus-icon" /> Tap to add tasks
  </p>
</div>
      </div>
    </div>
  );
};

export default App;