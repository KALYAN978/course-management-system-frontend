import React, { useState } from "react";
import { highestFee } from "../Service/AdmissionService";
import "../App.css";

function HighestFeeCalculation() {
  //  Create state variableas and event handing functions

  const initialValues = {
    associateId: "",
  };
  const [highestFee, setHighestFee] = useState(initialValues);
  const [ishighest, setIShig] = useState(false);
  const handleChange = (e) => {
    setHighestFee({ ...highestFee, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!highestFee.associateId) return;
    highestFee(highestFee.associateId);
    setIShig((currentHigh) => !currentHigh);
    console.log(highestFee);
    setHighestFee(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2 ">Associate Highest Fee</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Associate Id </label>
          <input
            className="input-box"
            type="text"
            name="associateId"
            value={highestFee.associateId}
            onChange={handleChange}
          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Submit</button>
        {ishighest && (
          <div className="table-container">
            <table className="table">
              <tr>
                <th>Course Id</th>
              </tr>
              <tr>
                <td>C102</td>
              </tr>
            </table>
          </div>
        )}
      </form>
    </div>
  );
}
export default HighestFeeCalculation;
