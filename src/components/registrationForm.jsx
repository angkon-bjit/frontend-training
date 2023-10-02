import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

const RegistrationForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm();

  const handlerOnSubmit = () => {
    console.log("Form is submitted ");
    console.log("The username ", getValues("username"));
    console.log("The email ", getValues("email"));
  };

  useEffect(() => {
    console.log("Errors: ", errors);
  }, [errors]);

  return (
    <div>
      <h1>MODULE: RegistrationForm</h1>
      <form onSubmit={handleSubmit(handlerOnSubmit)}>
        <div>
          <h4>Username</h4>
          <Controller
            name="username"
            control={control}
            rules={{
              required: "Username is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Minimum length must be 20",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter username"
                {...field}
                style={{ border: errors.username ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.username && <h5>{errors.username.message}</h5>}
        </div>
        <div>
          <h4>Email</h4>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",

              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <input placeholder="Enter email" {...field} />
            )}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
