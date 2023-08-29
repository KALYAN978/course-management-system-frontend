import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { Route } from "react-router-dom";
import { MemoryRouter } from "react-router";
import { mount } from "enzyme";
import { Router } from "react-router-dom";
import { render, fireEvent, waitFor, wait, act } from "@testing-library/react";
import { createMemoryHistory } from "history";
import App from "./App";
// import {Display} from './Components/CoursesOffered';
import Course from "./Course/Course";
import AddCourse from "./Course/AddCourse";
import UpdateCourse from "./Course/UpdateCourse";
import ViewCourse from "./Course/ViewCourse";
import CourseDeactivate from "./Course/CourseDeactivate";
import CourseRating from "./Course/CourseRating";

import Admission from "./Admission/Admission";
import AddFeedback from "./Admission/AddFeedback";
import AssociateRegistration from "./Admission/AssociateRegistration";
import TotalFees from "./Admission/FeeDetails";
import HighestFeeCalculation from "./Admission/HighestFeeCalculation";
import MakePayment from "./Admission/MakePayment";
import ViewFeedback from "./Admission/ViewFeedback";

import Associate from "./Associate/Associate";
import AddAssociate from "./Associate/AddAssociate";
import UpdateAssociate from "./Associate/UpdateAssocite";

import ViewAssociate from "./Associate/ViewAssocite";
import register from "./Service/AdmissionService";
import calculateFees from "./Service/AdmissionService";
import addfeedback from "./Service/AdmissionService";
import viewFeedbackByCourseId from "./Service/AdmissionService";
import makePayment from "./Service/AdmissionService";

import addAssociate from "./Service/AssociateService";
import updateAssociate from "./Service/AssociateService";
import viewAssociateById from "./Service/AssociateService";

import addCourse from "./Service/CourseService";
import updateCourse from "./Service/CourseService";
import viewAllCourse from "./Service/CourseService";
import viewCourseById from "./Service/CourseService";
import viewFeedback from "./Service/CourseService";
import deactivate from "./Service/CourseService";

import validateUser from "./Service/LoginService";
import { logStatus } from "./Service/LoginService";
import { addCourseDetails } from "./Service/CourseService";
import { courseArray } from "./Service/CourseService";
// ************* Routing in App Component*******************
import sinon from "sinon";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import fetchMock from "jest-fetch-mock";

const mock = new MockAdapter(axios);
fetchMock.enableMocks();
describe("Testing", () => {
  it("should show Login component when Login Link is clicked", () => {});

  it("should display the message for addCourseDetails after clicking button in AddCourse form", async () => {});

  it("Should render records correctly for ViewCourse", async () => {});

  it("should display the message for associateRegistration after clicking button in associateRegistration form", async () => {});

  it("Should render records correctly for ViewFeedback", async () => {});

  it("should display the message for addAssociate after clicking button in AddAssociate form", async () => {});

  it("should display the message for updateAssociate after clicking button in UpdateAssociate form", async () => {});
});
