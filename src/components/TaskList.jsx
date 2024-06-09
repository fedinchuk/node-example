function TaskList(props) {
  return (
    <div>
      <h3>{ props.task.title }</h3>
      <p>{ props.task.completed }</p>
    </div>
  );
}

export default TaskList;
