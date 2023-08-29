import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Routing from "../Routing";
import AddAssociate from "./AddAssociate";
import UpdateAssocite from "./UpdateAssocite";
import ViewAssocite from "./ViewAssocite";
import "../App.css";

function Associate() {
  const [addAssociatebtn, setaddAssociate] = useState(false);
  const [updateassociatebtn, setupdateAssociate] = useState(false);
  const [viewAssociatebtn, setViewAssociate] = useState(false);

  const handleAddassociate = () => {
    setaddAssociate((currentAddAssociate) => !currentAddAssociate);
    updateassociatebtn &&
      setupdateAssociate((currentUpdateAssociate) => !currentUpdateAssociate);
    viewAssociatebtn &&
      setViewAssociate((currentViewAssociate) => !currentViewAssociate);
  };
  const handleUpdateAssociate = () => {
    setupdateAssociate((currentUpdateAssociate) => !currentUpdateAssociate);
    addAssociatebtn &&
      setaddAssociate((currentAddAssociate) => !currentAddAssociate);
    viewAssociatebtn &&
      setViewAssociate((currentViewAssociate) => !currentViewAssociate);
  };
  const handleViewAssociate = () => {
    addAssociatebtn &&
      setaddAssociate((currentAddAssociate) => !currentAddAssociate);
    updateassociatebtn &&
      setupdateAssociate((currentUpdateAssociate) => !currentUpdateAssociate);
    setViewAssociate((currentViewAssociate) => !currentViewAssociate);
  };

  return (
    <div>
      <div class="bg-secondary">
        <h2 class="text-info fs-3 p-2">ASSOCIATE INFO</h2>
        <button class="btn btn-warning text-light" onClick={handleAddassociate}>
          Add Associate
        </button>
        &nbsp;
        <button
          class="btn btn-warning text-light"
          onClick={handleUpdateAssociate}
        >
          Update Associate
        </button>
        &nbsp;
        <button
          class="btn btn-warning text-light"
          onClick={handleViewAssociate}
        >
          View Associate
        </button>
        {addAssociatebtn && <AddAssociate />}
        {updateassociatebtn && <UpdateAssocite />}
        {viewAssociatebtn && <ViewAssocite />}
      </div>
    </div>
  );
}

export default Associate;
