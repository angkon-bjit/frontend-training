import { useNavigate } from "react-router-dom";

const NavigateDemo = () => {
  const navigate = useNavigate();

  return (
    <div>
      NavigateDemo{" "}
      <button
        onClick={() =>
          navigate("/blogs", {
            replace: true,
            state: { id: "25", item: "The item" },
          })
        }
      >
        Navigate
      </button>
    </div>
  );
};

export default NavigateDemo;
