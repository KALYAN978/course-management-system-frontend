import React, { useState } from "react";
import "./AddCourse.css";
import "../App.css";

import { viewFeedback } from "../Service/CourseService";

function CourseRating() {
  //  Create state variableas and event handing functions
  const initialValues = {
    courseId: "",
  };
  const [viewFeedBackDetails, setViewFeedbackDetails] = useState(initialValues);
  const [rating, setRating] = useState(-1);
  const handleChange = (e) => {
    setViewFeedbackDetails({
      ...viewFeedBackDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!viewFeedBackDetails.courseId) return;
    const res = viewFeedback(viewFeedBackDetails.courseId);
    console.log(res);
    res.then((r) => {
      setRating(r);
    });
    console.log("setRating", rating);
    console.log(viewFeedBackDetails);
    setViewFeedbackDetails(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2">Course FeedBack Rating</h3>
      <form onSubmit={handleSubmit}>
        <div className="div-ele">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={viewFeedBackDetails.courseId}
            onChange={handleChange}
          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Submit</button>
        <div>
          <h5 className="heading">Course Id:{viewFeedBackDetails.courseId}</h5>
          <h5 className="heading">FeedBack Rating:{rating}</h5>
        </div>
      </form>
    </div>
  );
}

export default CourseRating;
