import axios from "axios";
export async function addAssociate(associate) {
  const ADDASSOCIATE_URL = "http://localhost:9098/associate/registerAssociate";
  try {
    const response = await axios.post(ADDASSOCIATE_URL, associate);
    console.log(response.data);
    if (response.data) {
      return "Associate has been added Successfully";
    }
  } catch (e) {
    return "Something Went wrong";
  }
}

export async function updateAssociate(associateId, associateEmailId) {
  const UPDATE_ASSOCIATE_URL =
    "http://localhost:9098/associate/updateAssociateEmailId/" +
    associateId +
    "/" +
    associateEmailId;
  try {
    const response = await axios.put(UPDATE_ASSOCIATE_URL);

    console.log("Status: ", response.status);
    console.log("Data: ", response.data);
  } catch (error) {
    console.error("Something went wrong!", error);
  }
}

export async function viewAssociateById(associateId) {
  const ASSOCIATE_URL =
    "http://localhost:9098/associate/viewAssociate/" + associateId;
  let response = await fetch(ASSOCIATE_URL);
  let associate = await response.json();
  return associate;
}
