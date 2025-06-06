const API = "http://localhost:5000/api/tasks";

export const fetchTasks = async () => {
  const res = await fetch(API);
  return res.json();
};

export const addTask = async (task) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return res.json();
};

export const deleteTask = async (id) => {
  await fetch(`${API}/${id}`, { method: 'DELETE' });
};
