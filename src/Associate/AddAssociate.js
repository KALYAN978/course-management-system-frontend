import React, { useState } from "react";

//import { addAssociate } from "../Service/AssociateService";
import axios from "axios";
import "../App.css";

function AddAssociate() {
  //  Create state variableas and event handing functions
  const initialValues = {
    associateId: "",
    name: "",
    address: "",
    emailId: "",
  };
  const [addAssociate, setAddAssociate] = useState(initialValues);
  const [msg, setMsg] = useState("");
  const [isAddButtonClicked, setisAddButtonClicked] = useState(false);
  const handleChange = (e) => {
    setAddAssociate({ ...addAssociate, [e.target.name]: e.target.value });
  };
  const handleClickAddButton = () => {
    setisAddButtonClicked((currentState) => !currentState);
  };
  const addAssociateData = async (ADDASSOCIATE_URL) => {
    console.log(addAssociate);
    const post = {
      associateName: addAssociate.name,
      associateAddress: addAssociate.address,
      associateEmailId: addAssociate.emailId,
    };
    try {
      const response = await axios.post(ADDASSOCIATE_URL, post);
      console.log(response.data);
      if (response.data) {
        //setMsg("Associate has been added Successfully");
      }
    } catch (e) {
      setMsg("Something Went wrong");
    }
  };
  const handleSubmit = (e) => {
    const ADDASSOCIATE_URL =
      "http://localhost:9098/associate/registerAssociate";
    addAssociateData(ADDASSOCIATE_URL);

    e.preventDefault();
    if (
      !addAssociate.associateId &&
      !addAssociate.name &&
      !addAssociate.address &&
      !addAssociate.emailId
    )
      return;
    setMsg("Associate has been added Successfully");

    console.log(addAssociate);
    setAddAssociate(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 p-3">Add Associate Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Associate Id </label>
          <input
            className="input-box"
            type="text"
            name="associateId"
            value={addAssociate.associateId}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="input-ele">
          <label className="label">Name </label>
          <input
            className="input-box"
            type="text"
            name="name"
            value={addAssociate.name}
            onChange={handleChange}
          />
        </div>
        <br />

        <div class="input-ele">
          <label className="label">Address</label>
          <input
            className="input-box"
            type="text"
            name="address"
            value={addAssociate.address}
            onChange={handleChange}
          />
        </div>

        <br />

        <div className="input-ele">
          <label className="label">Email Id</label>
          <input
            className="input-box"
            type="text"
            name="emailId"
            value={addAssociate.emailId}
            onChange={handleChange}
          />
        </div>
        <br />

        <br />
        <button class="btn btn-danger m-2" onClick={handleClickAddButton}>
          Add{" "}
        </button>
        {isAddButtonClicked && <p className="msg">{msg}</p>}
      </form>
    </div>
  );
}
export default AddAssociate;
