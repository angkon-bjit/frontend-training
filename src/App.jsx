import Task from "./components/task";
import TaskList from "./components/taskList";
import "./App.scss";

const App = () => {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px",
      }}
    >
      <Task />
      <TaskList />
    </div>
  );
};

export default App;
