import { FaCheckCircle, FaCircle } from 'react-icons/fa';
import "./QuickTask.css";

export default function QuickTask({ todo, toggleComplete }) {
  return (
    <span 
      onClick={() => toggleComplete(todo.id)}
      className={`quick-task ${todo.completed ? 'completed' : ''}`}
    >
      {todo.completed ? <FaCheckCircle /> : <FaCircle />}
    </span>
  );
}