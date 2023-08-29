import React, { useState } from "react";

import { updateCourse } from "../Service/CourseService";
import axios from "axios";
import "../App.css";

function UpdateCourse() {
  //  Create state variableas and event handing functions

  const initialValues = {
    courseId: "",
    updateFee: "",
  };
  const [updateCourseDetails, setUpdateCourseDetails] = useState(initialValues);
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setUpdateCourseDetails({
      ...updateCourseDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!updateCourseDetails.courseId && !updateCourseDetails.updateFee) return;
    updateCourse(updateCourseDetails.courseId, updateCourseDetails.updateFee);
    //setMsg(res);
    console.log(updateCourseDetails);
    setUpdateCourseDetails(initialValues);
  };

  return (
    <div>
      <h3 class="text-light fs-3 p-2 m-2">Update Course Fee</h3>
      <form onSubmit={handleSubmit}>
        <div className="div-ele">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={updateCourseDetails.courseId}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="div-ele">
          <label className="label">Update Fee</label>
          <input
            className="input-box"
            type="text"
            name="updateFee"
            value={updateCourseDetails.updateFee}
            onChange={handleChange}
          />
        </div>

        <br />
        <button class="btn btn-danger m-2">Update Course</button>
        <p className="msg">{msg}</p>
      </form>
    </div>
  );
}
export default UpdateCourse;
