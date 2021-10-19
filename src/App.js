import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { UpdateProfile } from "./components/UpdateProfile";
import { PrivateRoute } from "./contexts/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <PrivateRoute path="/" exact component={Dashboard}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/signup" exact component={Signup}/>
      <PrivateRoute path="/update-profile" exact component={UpdateProfile}/>
    </BrowserRouter>
  );
}

export default App;

// Hai, Your watching video length is 48min.
