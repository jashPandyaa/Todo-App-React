import "./DatePicker.css"

export default function DatePicker({ dueDate, setDueDate }) {
    return (
      <div className="date-picker-container">
        <label>Due Date (optional)</label>
        <input
          type="date"
          className="date-input"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
        />
      </div>
    );
  }