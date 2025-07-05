import "./TaskCategories.css";

export default function TaskCategories({ category, setCategory }) {
    const categories = [
      { value: 'general', label: 'General' },
      { value: 'work', label: 'Work' },
      { value: 'personal', label: 'Personal' },
      { value: 'shopping', label: 'Shopping' }
    ];
  
    return (
      <select 
        className="category-select" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>
    );
  }