import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Routing from "../Routing";
import CourseDeactivate from "./CourseDeactivate";
import AddCourse from "./AddCourse";
import ViewCourse from "./ViewCourse";
import UpdateCourse from "./UpdateCourse";
import CourseRating from "./CourseRating";
import "../App.css";

function Course() {
  const [addCoursebtn, setaddCoursebtn] = useState(false);
  const [updateCoursebtn, setUpdateCoursebtn] = useState(false);
  const [viewCoursebtn, setViewCoursebtn] = useState(false);
  const [viewFeedBackbtn, setViewFeedbackbtn] = useState(false);
  const [deactivatebtn, setDeactivatebtn] = useState(false);
  // console.log(data);
  const handleAddcourse = () => {
    setaddCoursebtn((currentAddCourse) => !currentAddCourse);

    updateCoursebtn &&
      setUpdateCoursebtn((currentUpdateCourse) => !currentUpdateCourse);

    viewCoursebtn &&
      setViewCoursebtn((currentViewCourse) => !currentViewCourse);

    viewFeedBackbtn &&
      setViewFeedbackbtn((currentViewFeedback) => !currentViewFeedback);

    deactivatebtn &&
      setDeactivatebtn((currentDeactivateCures) => !currentDeactivateCures);
  };
  const handleUpdatecourse = () => {
    setUpdateCoursebtn((currentUpdateCourse) => !currentUpdateCourse);
    addCoursebtn && setaddCoursebtn((currentAddCourse) => !currentAddCourse);

    viewCoursebtn &&
      setViewCoursebtn((currentViewCourse) => !currentViewCourse);

    viewFeedBackbtn &&
      setViewFeedbackbtn((currentViewFeedback) => !currentViewFeedback);

    deactivatebtn &&
      setDeactivatebtn((currentDeactivateCures) => !currentDeactivateCures);
  };

  const handleViewcourse = () => {
    setViewCoursebtn((currentViewCourse) => !currentViewCourse);

    addCoursebtn && setaddCoursebtn((currentAddCourse) => !currentAddCourse);

    updateCoursebtn &&
      setUpdateCoursebtn((currentUpdateCourse) => !currentUpdateCourse);

    viewFeedBackbtn &&
      setViewFeedbackbtn((currentViewFeedback) => !currentViewFeedback);

    deactivatebtn &&
      setDeactivatebtn((currentDeactivateCures) => !currentDeactivateCures);
  };
  const handleViewFeedBack = () => {
    setViewFeedbackbtn((currentDeactivateCures) => !currentDeactivateCures);

    addCoursebtn && setaddCoursebtn((currentAddCourse) => !currentAddCourse);

    updateCoursebtn &&
      setUpdateCoursebtn((currentUpdateCourse) => !currentUpdateCourse);

    viewCoursebtn &&
      setViewCoursebtn((currentViewCourse) => !currentViewCourse);

    deactivatebtn &&
      setDeactivatebtn((currentDeactivateCures) => !currentDeactivateCures);
  };
  const handleDeactivateCourse = () => {
    setDeactivatebtn((currentDeactivateCures) => !currentDeactivateCures);
    addCoursebtn && setaddCoursebtn((currentAddCourse) => !currentAddCourse);

    updateCoursebtn &&
      setUpdateCoursebtn((currentUpdateCourse) => !currentUpdateCourse);

    viewCoursebtn &&
      setViewCoursebtn((currentViewCourse) => !currentViewCourse);
    viewFeedBackbtn &&
      setViewFeedbackbtn((currentViewFeedback) => !currentViewFeedback);
  };
  return (
    <div class="bg-secondary">
      <h2 class="text-info fs-3 p-2">COURSE INFORMATION</h2>
      <button class="btn btn-warning text-light" onClick={handleAddcourse}>
        Addcourse
      </button>
      &nbsp;
      <button class="btn btn-warning text-light" onClick={handleUpdatecourse}>
        UpdateCourse
      </button>
      &nbsp;
      <button class="btn btn-warning text-light" onClick={handleViewcourse}>
        ViewCourse
      </button>
      &nbsp;
      <button class="btn btn-warning text-light" onClick={handleViewFeedBack}>
        ViewFedback Rating
      </button>
      &nbsp;
      <button
        class="btn btn-warning text-light"
        onClick={handleDeactivateCourse}
      >
        Course Deactivate
      </button>
      {addCoursebtn && <AddCourse />}
      {updateCoursebtn && <UpdateCourse />}
      {viewCoursebtn && <ViewCourse />}
      {viewFeedBackbtn && <CourseRating />}
      {deactivatebtn && <CourseDeactivate />}
    </div>
  );
}
export default Course;
