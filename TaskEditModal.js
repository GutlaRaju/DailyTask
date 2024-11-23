import React, { useState, useEffect } from 'react';

const TaskEditModal = ({ task, onClose, onSave }) => {
  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSave = () => {
    onSave(editedTask);
    onClose();
  };

  return (
    <div className="modal">
      <input
        type="text"
        name="title"
        value={editedTask.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        value={editedTask.description}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dueDate"
        value={editedTask.dueDate}
        onChange={handleChange}
      />
      <select
        name="status"
        value={editedTask.status}
        onChange={handleChange}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default TaskEditModal;
