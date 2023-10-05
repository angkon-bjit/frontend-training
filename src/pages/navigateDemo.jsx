import { useNavigate } from "react-router-dom";

const NavigateDemo = () => {
  const navigate = useNavigate();

  return (
    <div>
      Goto Blogs page{" "}
      <button
        onClick={() =>
          navigate("/blogs", {
            replace: true,
            state: { id: "25", itemName: "The item" },
          })
        }
      >
        Navigate
      </button>
    </div>
  );
};

export default NavigateDemo;
