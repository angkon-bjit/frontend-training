import Button from "./button";
import "./header.style.scss";

const Header = () => {
  return (
    <div
      // style={{
      //   display: "flex",
      //   flexDirection: "row",
      //   justifyContent: "space-between",
      //   padding: "10px 90px",
      //   backgroundColor: "#ada0a0",
      // }}
      className="header-style"
    >
      <div className="header-link container">Home</div>
      <div>Sign-in</div>
      <div>Sign-up</div>
      <Button />
    </div>
  );
};

export default Header;
