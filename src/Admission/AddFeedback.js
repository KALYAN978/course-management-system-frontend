import React, { useState } from "react";
import { addfeedback } from "../Service/AdmissionService";
import "../App.css";

function AddFeedback() {
  //  Create state variableas and event handing functions

  // Initialize the feedback form with empty values
  const initialValues = {
    registrationNo: "",
    feedback: "",
    feedbackRating: "",
  };
  const [addFeedback, setAddFeedBack] = useState(initialValues);
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setAddFeedBack({ ...addFeedback, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !addFeedback.registrationNo &&
      !addFeedback.feedback &&
      !addFeedback.feedbackRating
    )
      return;
    addFeedback(
      addFeedback.registrationNo,
      addFeedback.feedback,
      addFeedback.feedbackRating
    );
    setMsg("Feedback updated Successfully");
    console.log(addFeedback);
    setAddFeedBack(initialValues);
  };
  return (
    <div class="text-center">
      <h3 class="text-light fs-3 m-2 ">Add Feedback</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Registration Number </label>
          <input
            className="input-box"
            type="text"
            name="registrationNo"
            value={addFeedback.registrationNo}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="input-ele">
          <label className="label">FeedBack Comments </label>
          <input
            className="input-box"
            type="text"
            name="feedback"
            value={addFeedback.feedback}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="input-ele">
          <label className="label">FeedBack Rating (Rate from 1 to 5)</label>
          <input
            className="input-box"
            type="text"
            name="feedbackRating"
            value={addFeedback.feedbackRating}
            onChange={handleChange}
          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Submit</button>
        <p className="msg">{msg}</p>
      </form>
    </div>
  );
}
export default AddFeedback;
