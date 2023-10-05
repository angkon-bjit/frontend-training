import { useState } from "react";
import { Outlet } from "react-router-dom";
import RegistrationForm from "../components/registrationForm";

const SignUp = () => {
  const [currentCity, setCurrentCity] = useState({
    name: "Dhaka",
    country: "Bangladesh",
  });

  return (
    <div>
      <h1>Sign Up</h1>
      {/* <Outlet /> */}
      <RegistrationForm />

      <Outlet context={[{ currentCity }, setCurrentCity]} />
    </div>
  );
};

export default SignUp;
