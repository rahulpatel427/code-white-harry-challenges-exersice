import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import Login from "./componets/Login";
import About from "./componets/About";
import User from "./componets/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />{" "}
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar /> <Login />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/User/:username",
      element: (
        <>
          <Navbar />
          <User />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
