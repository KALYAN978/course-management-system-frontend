import React, { useState } from "react";
import { updateAssociate } from "../Service/AssociateService";

import "../App.css";

function UpdateAssocite() {
  //  Create state variableas and event handing functions

  const initialValues = {
    associateId: "",
    updateEmailId: "",
  };
  const [updateAss, setUpdateAss] = useState(initialValues);
  const [msg, setMsg] = useState("");
  const handleChange = (event) => {
    setUpdateAss({ ...updateAss, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateAssociate(updateAss.associateId, updateAss.updateEmailId);

    if (!updateAss.associateId && !updateAss.updateEmailId) return;
    setMsg("Associate emailId updated successfully");
    console.log(updateAss);
    setUpdateAss(initialValues);
  };

  return (
    <div>
      <h3 class="text-light fs-3 p-2 m-2">Update Associate Information</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Associate Id </label>
          <input
            className="input-box"
            type="text"
            name="associateId"
            value={updateAss.associateId}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="input-ele">
          <label className="label">Update EmailId</label>
          <input
            className="input-box"
            type="text"
            name="updateEmailId"
            value={updateAss.updateEmailId}
            onChange={handleChange}
          />
        </div>
        <br />

        <button class="btn btn-danger m-2">Update EmailId</button>
        <p className="msg">{msg}</p>
      </form>
    </div>
  );
}
export default UpdateAssocite;
