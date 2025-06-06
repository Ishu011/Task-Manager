import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState({ title: '', description: '', status: 'todo' });

  const submit = (e) => {
    e.preventDefault();
    onAdd(task);
    setTask({ title: '', description: '', status: 'todo' });
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Title"
        value={task.title}
        onChange={e => setTask({ ...task, title: e.target.value })}
        required
      />
      <input
        placeholder="Description"
        value={task.description}
        onChange={e => setTask({ ...task, description: e.target.value })}
      />
      <select
        value={task.status}
        onChange={e => setTask({ ...task, status: e.target.value })}
      >
        <option value="todo">To Do</option>
        <option value="in progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
