import React, { useState } from "react";
import "./AddCourse.css";
import axios from "axios";
import "../App.css";
import { deactivate } from "../Service/CourseService";

function CourseDeactivate() {
  //  Create state variableas and event handing functions

  const initialValues = {
    courseId: "",
  };
  const [courseDeactivate, setCourseDeactivate] = useState(initialValues);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setCourseDeactivate({
      ...courseDeactivate,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deactivate(courseDeactivate.courseId);
    if (!courseDeactivate.courseId) return;
    setMsg(`Course ${courseDeactivate.courseId} Deactivated Successfully`);
    console.log(courseDeactivate);
    setCourseDeactivate(initialValues);
  };
  return (
    <div class="main">
      <h3 class="text-light fs-3 m-2 ">Course Deactivate</h3>
      <form onSubmit={handleSubmit}>
        <div className="div-ele">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={courseDeactivate.courseId}
            onChange={handleChange}
          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Deactivate Course</button>
        <p className="msg">{msg}</p>
      </form>
    </div>
  );
}

export default CourseDeactivate;
