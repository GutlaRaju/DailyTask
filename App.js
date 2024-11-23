import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskEditModal from './components/TaskEditModal';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditingTask(tasks[index]);
  };

  const saveEditedTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.title === updatedTask.title ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const closeEditModal = () => {
    setEditingTask(null);
  };

  return (
    <div>
      <h1>Daily Task</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
      {editingTask && (
        <TaskEditModal
          task={editingTask}
          onClose={closeEditModal}
          onSave={saveEditedTask}
        />
      )}
    </div>
  );
};

export default App;
