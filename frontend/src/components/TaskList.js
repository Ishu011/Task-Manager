import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onEdit }) => (
  <ul>
    {tasks.map(task => (
      <TaskItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
    ))}
  </ul>
);

export default TaskList;
