import React, { useState } from "react";
import { calculateFees } from "../Service/AdmissionService";
import "../App.css";

function TotalFees() {
  //  Create state variableas and event handing functions

  const initialValues = {
    associateId: "",
  };
  const [totalFee, setTotalFee] = useState(initialValues);
  const [msg, setMsg] = useState("");
  const [Fee, setFee] = useState(0);

  const handleChange = (e) => {
    setTotalFee({ ...totalFee, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!totalFee.associateId) return;
    const calculatedFee = calculateFees(totalFee.associateId);
    calculatedFee.then((res) => {
      console.log("Fee", res);
      setFee(res);
    });
    //setMsg("Total Fee:");
    console.log(totalFee);
    setTotalFee(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2 ">Total Fee Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Associate Id </label>
          <input
            className="input-box"
            type="text"
            name="associateId"
            value={totalFee.associateId}
            onChange={handleChange}
          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Submit</button>
        {/* <p className="msg">{msg}</p> */}
        <p>Total Fee:{Fee}</p>
      </form>
    </div>
  );
}

export default TotalFees;
