import {
    register,
    calculateFees,
    addfeedback,
    highestFee,
    viewFeedbackByCourseId,
    makePayment,
  } from './AdmissionService';
  import { render, fireEvent, act as reactAct, queryByAttribute } from "@testing-library/react";
// import fetchMock from 'fetch-mock';
// import fetchMock from "jest-fetch-mock";
import fetchMock from 'fetch-mock';
// fetchMock.enableMocks();
fetchMock.mock(matcher, response, options);
// beforeEach(() => {
//     fetch.resetMocks();
//   });

  it("returns null when exception", async () => {
    fetchMock.mock('http://localhost:9093/register/A101/C103', 200);

// const getById = queryByAttribute.bind(null, "id");
//   describe('Testing service functions', () => {
//     const mockResponse = { message: 'Success' };
//     const mockFetch = jest.fn(() =>
//       Promise.resolve({
//         json: () => Promise.resolve(mockResponse),
//       })
//     );
//     global.fetch = mockFetch;
  
//     afterEach(() => {
//       jest.clearAllMocks();
//     });
  
//     test('register function should call fetch with the correct parameters and return the response', async () => {
//       const associateId = '123';
//       const courseId = '456';
//       const response = await register(associateId, courseId);
//       expect(mockFetch).toHaveBeenCalledWith(
//         `http://localhost:9093/register/${associateId}/${courseId}`,
//         {	 	  	  		    	   	 	   	 	
//           method: 'POST',
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Methods': 'POST, PUT, GET,OPTIONS,DELETE',
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Headers':
//               'Origin,Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept,Authorization',
//           },
//           body: JSON.stringify(associateId),
//         }
//       );
//       expect(response).toEqual(mockResponse);
//     });
  
//     test('calculateFees function should call fetch with the correct parameters and return the response', async () => {
//       const courseId = '456';
//       const response = await calculateFees(courseId);
//       expect(mockFetch).toHaveBeenCalledWith(
//         `http://localhost:9093/calculateFees/${courseId}`,
//         {
//           method: 'PUT',
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Methods': 'POST, PUT, GET,OPTIONS,DELETE',
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Headers':
//               'Origin,Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept,Authorization',
//           },
//           body: JSON.stringify(courseId),
//         }
//       );
//       expect(response).toEqual(mockResponse);
//     });
  
//     test('addfeedback function should call fetch with the correct parameters and return the response', async () => {	 	  	  		    	   	 	   	 	
//       const regNo = '789';
//       const feedback = 'Great course';
//       const feedbackRating = '5';
//       const response = await addfeedback(regNo, feedback, feedbackRating);
//       expect(mockFetch).toHaveBeenCalledWith(
//         `http://localhost:9093/feedback/${regNo}/${feedback}/${feedbackRating}`,
//         {
//           method: 'POST',
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Methods': 'POST, PUT, GET,OPTIONS,DELETE',
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Headers':
//               'Origin,Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept,Authorization',
//           },
//           body: JSON.stringify(regNo),
//         }
//       );
//       expect(response).toEqual(mockResponse);
//     });
  
//     // test('highestFee function should call fetch with the correct parameters and return the response', async () => {
//     //   const associateId = '123';
//     //   const response = await highestFee(associateId);
//     //   expect(mockFetch).toHaveBeenCalledWith(
//     //     `http://localhost:9093/highestFee/${associateId}`,
//     //     {
//     //       headers: {
//     //         Authorization: `Bearer ${localStorage.getItem('token')}`,
//     //         'Content
});	 	  	  		    	   	 	   	 	
