import TaskList from "./TaskList";

function Task(props) {
  const tasks = props.tasks;
  const taskItems = tasks.map(task =>
    <TaskList key={task.id} task={task} />
    );
    return(
      <div>
        <h1>Всі завдання:</h1>
        { taskItems }
      </div>
    )
}

export default Task;
