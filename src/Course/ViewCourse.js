import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import "./AddCourse.css";
import { viewCourseById } from "../Service/CourseService";
import "../App.css";

function ViewCourse() {
  //  Create state variableas and event handing functions

  const initialValues = {
    courseId: "",
  };
  const [ViewCourse, setViewCourse] = useState(initialValues);
  const [initialViewCourse, setInitialViewCourse] = useState({
    courseId: "",
    courseName: "",
    fees: "",
    duration: "",
    courseType: "",
    rating: 0,
  });
  const [isViewCourseBtn, setIsViewCourseBtn] = useState(false);

  const handleChange = (e) => {
    setViewCourse({ ...ViewCourse, [e.target.name]: e.target.value });
  };
  const handleClickViewCourse = () => {
    setIsViewCourseBtn((currentState) => !currentState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const courseData = viewCourseById(ViewCourse.courseId);
    console.log(courseData);
    courseData.then((response) => {
      setInitialViewCourse(response);
    });

    console.log("Intial", initialViewCourse);
    if (!ViewCourse.courseId) return;
    console.log(ViewCourse);
    setViewCourse(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2">View Course By Id</h3>
      <form onSubmit={handleSubmit}>
        <div className="div-ele">
          <label className="label">Course Id </label>

          <input
            className="input-box"
            type="text"
            name="courseId"
            value={ViewCourse.courseId}
            onChange={handleChange}
          />
        </div>

        <br />
        <button class="btn btn-danger m-2" onClick={handleClickViewCourse}>
          View Course
        </button>
      </form>
      {isViewCourseBtn && (
        <div className="table-container">
          <table className="table">
            <tr>
              <th>Course Id</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Course Type</th>
              <th>Fees</th>
              <th>Rating</th>
            </tr>
            <tr>
              <td>{initialViewCourse.courseId}</td>
              <td>{initialViewCourse.courseName}</td>
              <td>{initialViewCourse.duration}</td>
              <td>{initialViewCourse.courseType}</td>
              <td>{initialViewCourse.fees}</td>
              <td>{initialViewCourse.rating}</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
}

export default ViewCourse;
