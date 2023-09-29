import FetchDemo from "./components/fetchDemo";
import PostDemo from "./components/postDemo";
import useCustomHook from "./hooks/useCustomHook";
import useProductHook from "./hooks/useProductHook";

function App() {
  // const { count, handleOnclickCount } = useCustomHook(20);
  // const { title } = useProductHook();

  return (
    <>
      <PostDemo />
      <FetchDemo />
      {/* <div>
        <h1>Custom hooks</h1>
        <h3>Title: {title}</h3>
        <h4>Count val: {count}</h4>
        <button onClick={handleOnclickCount}>Increase</button>
      </div> */}
    </>
  );
}

export default App;
