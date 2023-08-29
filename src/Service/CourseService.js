import axios from "axios";
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export async function addCourseDetails(course) {
  const ADDCOURSE_URL = "http://localhost:9097/courses/course/addCourse";
  try {
    const response = await axios.post(ADDCOURSE_URL, course);
    console.log(response.data);

    if (response.data) {
      return "Course has been added Successfully";
    }
  } catch (e) {
    return "Something Went Wrong,Please check it ";
  }
}

export async function updateCourse(courseId, fees) {
  const UPDATE_COURSE_URL =
    "http://localhost:9097/courses/course/update/" + courseId + "/" + fees;
  try {
    const response = await axios.put(UPDATE_COURSE_URL);
    console.log("Updated Course", response.data);
    console.log("Status: ", response.status);
    console.log("Data: ", response.data);
    if (response.data) {
      return "Course has been Updated Successfully";
    }
  } catch (error) {
    console.error("Something went wrong!", error);
  }
}

export async function viewCourseById(courseId) {
  const VIEWCOURSE_URL =
    "http://localhost:9097/courses/course/viewByCourseId/" + courseId;
  try {
    const response = await axios.get(VIEWCOURSE_URL);
    console.log(response.status);
    let course = await response.data;
    //console.log("Promise", course);
    return course;
  } catch (e) {
    console.log(e);
  }
}

export async function viewFeedback(courseId) {
  const COURSE_VIEWFEEDBACK_URL =
    "http://localhost:9097/courses/viewFeedback/" + courseId;
  try {
    const response = await axios.get(COURSE_VIEWFEEDBACK_URL);
    const rating = await response.data;
    return rating;
  } catch (e) {
    console.log("something went wrong!", e);
  }
}

export async function deactivate(courseId, fees) {
  const DEACTIVE_URL =
    "http://localhost:9097/courses/course/deactivate/" + courseId;
  try {
    const response = await axios.delete(DEACTIVE_URL);
    console.log(response.status);
  } catch (e) {
    console.log("something went wrong!", e);
  }
}
