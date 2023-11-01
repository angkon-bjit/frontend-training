import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";

const Task = () => {
  const dispatch = useDispatch();
  const [taskValue, setTaskValue] = useState("");

  const addNewTask = () => {
    if (taskValue !== "") {
      dispatch(addTodo(taskValue));
      // console.log("The task ", task);
      setTaskValue("");
    }
  };

  return (
    <div className="task-component">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add task here..."
          className="taskInput"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
        />
        <button onClick={addNewTask}>Add task</button>
      </div>
    </div>
  );
};

export default Task;
