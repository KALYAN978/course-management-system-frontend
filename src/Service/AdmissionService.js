import axios from "axios";
export async function register(associateId, courseId) {
  const ADMISSION_REG_URL =
    "http://localhost:9094/admission/register/" + associateId + "/" + courseId;
  try {
    const response = await axios.post(ADMISSION_REG_URL);
    console.log(response.status);
    let course = await response.data;
    console.log("Course Data" + course.courseName);
  } catch (e) {
    console.log(e);
  }
}

export async function calculateFees(courseId) {
  const CALCULATE_FEE_URL =
    "http://localhost:9094/admission/calculateFees/" + courseId;
  try {
    const response = await axios.put(CALCULATE_FEE_URL);
    console.log(response.status);
    let admission = await response.data;
    console.log("Calculated Fee" + admission);
    return admission;
  } catch (e) {
    console.log(e);
  }
}

export async function addfeedback(regNo, feedback, feedbackRating) {
  const ADD_FEEDBACK_URL =
    "http://localhost:9094/admission/feedback/301/GoodCourse/" +
    regNo +
    "/" +
    feedback +
    "/" +
    feedbackRating;
  try {
    const response = await axios.post(ADD_FEEDBACK_URL);
    console.log(response.status);
    let feedBack = await response.data;
    console.log("FeedBack", feedBack);
  } catch (e) {
    console.log(e);
  }
}

export async function highestFee(associateId) {
  const HIGEST_FEE_URL =
    "http://localhost:9094/admission/highestFee/" + associateId;

  try {
    const response = await axios.get(HIGEST_FEE_URL);
    console.log(response.status);
    let fee = await response.data;
    console.log("Fee", fee);
  } catch (e) {
    console.log(e);
  }
}

export async function viewFeedbackByCourseId(courseId) {
  const VIEWFEEDBACK_URL =
    "http://localhost:9094/admission/viewFeedbackByCourseId/" + courseId;
  try {
    const response = await axios.get(VIEWFEEDBACK_URL);
    console.log(response.status);
    let feedBack = await response.data;

    console.log("FeedBack", feedBack);
    return feedBack;
  } catch (e) {
    console.log(e);
  }
}

export async function makePayment(registartionId) {
  //here in the backend they are passing fee also  http://localhost:9094/admission/makePayment/" + registartionId+"/"+fee;
  const MAKEPAYMENT_URL =
    "http://localhost:9094/admission/makePayment/" + registartionId;
  try {
    const response = await axios.post(MAKEPAYMENT_URL);
    console.log(response.status);
    let payment = await response.data;
    console.log("MakePayment", payment);
  } catch (e) {
    console.log(e);
  }
}
