import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             width: "80%",
//           }}
//         >
//           <Link to="/about">About</Link>
//           {/* <Link to="/contact" activeStyle>
//             Contact Us
//           </Link> */}
//           <Link to="/blogs">Blogs</Link>
//           <Link to="/blogs/12">Blog 12</Link>
//           <Link to="/sign-up">Sign Up</Link>
//           <Link to="/sign-up/contact">Nested Example</Link>
//           <Link to="/sign-up/blogs">Nested Example2</Link>
//           <Link to="/redirect">Redirect</Link>
//           <Link to="/private-group">privateGroup</Link>
//         </div>
//       </div>
//     </>
//   );
// };

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <Link to="/about" style={styles.navItem}>
          About
        </Link>

        <Link to="/blogs" style={styles.navItem}>
          Blogs
        </Link>
        <Link to="/blogs/12" style={styles.navItem}>
          Blog 12
        </Link>
        <Link to="/sign-up" style={styles.navItem}>
          Sign Up
        </Link>
        <Link to="/sign-up/contact" style={styles.navItem}>
          Nested Example
        </Link>
        <Link to="/sign-up/blogs" style={styles.navItem}>
          Nested Example2
        </Link>
        <Link to="/redirect" style={styles.navItem}>
          Redirect
        </Link>
        <Link to="/private-group" style={styles.navItem}>
          privateGroup
        </Link>

        <Link to="/login" style={styles.navItem}>
          Login
        </Link>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: 0,
  },
  navItem: {
    color: "#fff",
    textDecoration: "none",
    margin: "0 15px",
  },
  navLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "16px",
  },
};

export default Navbar;
