import React, { useState } from "react";
import "../App.css";
import { viewFeedbackByCourseId } from "../Service/AdmissionService";
import "../App.css";

function ViewFeedback() {
  //  Create state variableas and event handing functions

  const initialValues = {
    courseId: "",
  };
  const [viewFeedback, setViewFeedback] = useState(initialValues);
  const [viewFeed, setViewFeed] = useState(0);
  const [review, setReview] = useState("");
  const handleChange = (e) => {
    setViewFeedback({ ...viewFeedback, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!viewFeedback.courseId) return;

    setViewFeed(viewFeedback.courseId);
    console.log("View", viewFeed.courseId);

    const feedBack = viewFeedbackByCourseId(viewFeedback.courseId);

    feedBack.then((res) => {
      setReview(res);
    });
    console.log(viewFeedback);
    setViewFeedback(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2 ">View Course Feedback</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={viewFeedback.courseId}
            onChange={handleChange}
          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Get FeedBack</button>
        <div className="table-container">
          <table className="table">
            <tr>
              <th>Course Id</th>
              <th>FeedBack</th>
            </tr>
            <tr>
              <td>{viewFeed}</td>
              <td>{review}</td>
            </tr>
          </table>
        </div>
      </form>
    </div>
  );
}

export default ViewFeedback;
