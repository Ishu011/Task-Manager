import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import '../index.css';

const Home = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
};

export default Home;
