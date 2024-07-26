import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };
  const onSubmit = async (data) => {
    await delay(2);
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log("This is data:", data, res);
    // if (data.username !== "Rahul") {
    //   setError("serverSideError", { message: "User is invailid" });
    // }
    // if (data.username === "Patel") {
    //   setError("serverSideError", {
    //     message: `This User is Blocked`,
    //   });
    // }
  };
  return (
    <>
      <div className="container">
        {isSubmitting && <div>Lodding...</div>}
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="fieldContainer">
            <input
              className="inField"
              type="text"
              placeholder="Username"
              {...register("username", {
                required: { value: true, message: "This field is required.." },
                minLength: { value: 3, message: "Min length is 3.." },
                maxLength: { value: 8, message: "Max length is 8.." },
              })}
            />
            {errors.username && (
              <div className="red">{errors.username.message}</div>
            )}

            <br />
            <input
              className="inField"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: { value: true, message: "This field is required.." },
                minLength: { value: 5, message: "Min Length is 5" },
              })}
            />
            {errors.password && (
              <div className="red">{errors.password.message}</div>
            )}
            <br />
            <button
              disabled={isSubmitting}
              className="inField btn"
              type="submit"
            >
              Submit
            </button>
            {errors.serverSideError && (
              <div className="red">{errors.serverSideError.message}</div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
