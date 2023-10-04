import { useParams } from "react-router-dom";

const Blog = () => {
  const { blogId } = useParams();

  return <h1>The blog ID is {blogId}</h1>;
};

export default Blog;
