import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions/taskActions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="tasklist">
      <div className="display-tasks">
        <h3>Your tasks:</h3>
        <ul className="tasks">
          {console.log("the tasks are ", tasks)}
          {tasks.tasksList.map((task) => {
            console.log("Singe task is ", task);

            return (
              <li className="task" key={task.id}>
                {task.text}
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(task.id)}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
