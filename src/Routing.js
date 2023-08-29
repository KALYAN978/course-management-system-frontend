import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Routes,
//   NavLink,
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Course from "./Course/Course.js";
import Admission from "./Admission/Admission.js";
import Associate from "./Associate/Associate.js";
import AddCourse from "./Course/AddCourse.js";
import UpdateCourse from "./Course/UpdateCourse.js";
import ViewCourse from "./Course/ViewCourse.js";
import CourseDeactivate from "./Course/CourseDeactivate.js";
import CourseRating from "./Course/CourseRating.js";
import AssociateRegistration from "./Admission/AssociateRegistration.js";
import HighestFeeCalculation from "./Admission/HighestFeeCalculation.js";
import AddFeedback from "./Admission/AddFeedback.js";
import ViewFeedback from "./Admission/ViewFeedback.js";
import FeeDetails from "./Admission/FeeDetails.js";
import MakePayment from "./Admission/MakePayment.js";
import AddAssociate from "./Associate/AddAssociate.js";
import UpdateAssociate from "./Associate/UpdateAssocite.js";
import ViewAssociate from "./Associate/ViewAssocite.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom/dist/index.js";

function Routing() {
  return (
    <>
      <Router>
        <div>
          <nav class="navbar navbar-expand-lg bg-dark ">
            <div class="container-fluid">
              <a class="navbar-brand text-danger fs-3" href="#">
                TekGain
              </a>
            </div>
            <form class="d-flex">
              {/* Use Link components for navigation */}
              <button class="btn btn-info  me-2 " type="button">
                <Link to="/Course" class="text-dark text-decoration-none">
                  Course
                </Link>
              </button>
              &nbsp;
              <button class="btn btn-info  me-2" type="button">
                <Link to="/Associate" class="text-dark text-decoration-none">
                  Association
                </Link>
              </button>
              &nbsp;
              <button class="btn btn-info  me-2" type="button">
                <Link to="/Admission" class="text-dark text-decoration-none">
                  Admission
                </Link>
                &nbsp;
              </button>
            </form>
          </nav>
          <Routes>
            <Route path="/Course" element={<Course />} />
            <Route path="/Associate" element={<Associate />} />
            <Route path="/Admission" element={<Admission />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default Routing;
