import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          onDelete={() => onDelete(index)}
          onEdit={() => onEdit(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;
