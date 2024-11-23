import React, { useState } from 'react';
 
const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('In Progress');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && dueDate) {
      onAddTask({ title, description, dueDate, status });
      setTitle('');
      setDescription('');
      setDueDate('');
      setStatus('Completed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
      </select>
      <button type="submit">Adding task</button>
    </form>
  );
};

export default TaskForm;
