import React, { useState } from 'react';

const statusColors = {
  todo: 'gray',
  'in progress': 'orange',
  done: 'green',
};

const TaskItem = ({ task, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleSave = () => {
    onEdit(editedTask);
    setEditing(false);
  };

  return (
    <li>
      {editing ? (
        <div style={{ flex: 1 }}>
          <input
            value={editedTask.title}
            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
          />
          <input
            value={editedTask.description}
            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
          />
          <select
            value={editedTask.status}
            onChange={(e) => setEditedTask({ ...editedTask, status: e.target.value })}
          >
            <option value="todo">To Do</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button onClick={handleSave}>✅</button>
        </div>
      ) : (
        <>
          <span>
            <strong>{task.title}</strong> — {task.description}
            <span
              style={{
                marginLeft: '10px',
                padding: '4px 8px',
                backgroundColor: statusColors[task.status],
                color: 'white',
                borderRadius: '6px',
                fontSize: '0.8rem',
              }}
            >
              {task.status}
            </span>
          </span>
          <div>
            <button style={{ marginRight: '8px' }} onClick={() => setEditing(true)}>✏️</button>
            <button onClick={() => onDelete(task.id)} style={{ backgroundColor: 'red', color: 'white' }}>❌</button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;
