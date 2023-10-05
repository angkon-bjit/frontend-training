import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/taskActions";
import { addUserInfo } from "../redux/actions/userActions";

const Task = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const addNewTask = () => {
    if (task !== "") {
      dispatch(addTodo(task));
    }
    setTask("");
  };

  const addUser = () => {
    const userInfo = {
      userId: "123123",
      username: "john",
      email: "john@gmail.com",
    };

    dispatch(addUserInfo(userInfo));
  };

  return (
    <div className="task-component">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add task here..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="taskInput"
        />
        <button onClick={addNewTask}>Add task</button>
        <button onClick={addUser}>Add user info</button>
      </div>
    </div>
  );
};

export default Task;
