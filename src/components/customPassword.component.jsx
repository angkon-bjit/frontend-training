import { useState } from "react";

const CustomPassword = ({ fields, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...fields}
      />
      <p></p>
      <button type="button" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};

export default CustomPassword;
