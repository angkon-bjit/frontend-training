import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signUp";
import Blog from "./pages/blog";
import NavigateDemo from "./pages/navigateDemo";
import Authenticate from "./pages/authenticate";
import PrivateGroup from "./pages/privateGroup";
import LoginForm from "./pages/login";
import BooksPage from "./pages/books.page";
import AddBookPage from "./pages/addbook.page";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />}>
          <Route path=":blogId" element={<Blog />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />}>
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
        *
        <Route path="/redirect" element={<NavigateDemo />} />
        <Route path="/login" element={<LoginForm />} />
        {/* private Route */}
        <Route element={<Authenticate />}>
          <Route path="/private-group" element={<PrivateGroup />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/add-book" element={<AddBookPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
