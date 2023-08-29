import React, { useState } from "react";
// import './AddCourse.css';
import { addCourseDetails } from "../Service/CourseService";
import axios from "axios";
import "../App.css";

function AddCourse() {
  //  Create state variableas and event handing functions

  const initialValues = {
    courseId: "",  
    courseName: "",
    fees: "",
    durationInMonths: "",
    courseType: "",
  };

  const [addUser, setAddUser] = useState(initialValues);
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setAddUser({ ...addUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const course = {
      courseName: addUser.courseName,
      fees: addUser.fees,
      duration: addUser.durationInMonths,
      courseType: addUser.courseType,
    };
    addCourseDetails(course);
    if (
      !addUser.courseId &&
      !addUser.courseName &&
      !addUser.fees &&
      !addUser.durationInMonths &&
      !addUser.courseType
    )
      return;

    //setMsg(res);

    console.log(addUser);
    //setMsg("Course Added Successfully");
    setAddUser(initialValues);
  };
  return (
    <div className="">
      <h3 class="text-light fs-3 p-3">Addcourse</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-element">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={addUser.courseId}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="input-element">
          <label className="label">Course Name </label>
          <input
            className="input-box"
            type="text"
            name="courseName"
            value={addUser.courseName}
            onChange={handleChange}
          />
        </div>
        <br />

        <div class="input-element">
          <label className="label">Fees</label>
          <input
            className="input-box"
            type="text"
            name="fees"
            value={addUser.fees}
            onChange={handleChange}
          />
        </div>

        <br />

        <div className="input-element">
          <label className="label">Duration In Months</label>
          <input
            className="input-box"
            type="text"
            name="durationInMonths"
            value={addUser.durationInMonths}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="input-element">
          <label className="label">Course Type</label>
          <input
            className="input-box"
            type="text"
            name="courseType"
            value={addUser.courseType}
            onChange={handleChange}
          />
        </div>

        <br />
        <button class="btn btn-danger m-2">Add course</button>
        <p className="msg">{msg}</p>
      </form>
    </div>
  );
}
export default AddCourse;
