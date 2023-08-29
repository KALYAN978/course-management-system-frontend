import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./App.css";
import { useState } from "react";
import validateUser from "./Service/LoginService";
import "bootstrap/dist/css/bootstrap.min.css";
import { logStatus } from "./Service/LoginService";
import Routing from "./Routing";
import Course from "./Course/Course";
import Associate from "./Associate/Associate";
import Admission from "./Admission/Admission";

function App() {
  //  Create state variableas and event handing functions
  return (
    <div className="App">
      <Routing />
    </div>
  );
}
export default App;
