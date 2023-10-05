import { Outlet, useLocation } from "react-router-dom";

const Blogs = () => {
  const location = useLocation();
  console.log("The state data ", location);
  return (
    <>
      <h1>You can write your blogs!</h1>
      <Outlet />
    </>
  );
};

export default Blogs;
