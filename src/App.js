import React from "react";
import Login from "./components/Login";
import "./App.css";
import { selectuser } from "./features/userslice";
import Logout from "./components/Logout";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(selectuser);
  return <div>{user ? <Logout /> : <Login />}</div>;
};

export default App;
