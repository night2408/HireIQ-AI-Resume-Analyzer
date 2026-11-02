// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:3000",
//   withCredentials: true,
// });

// /**
//  *  @description Service to generate interview report by sending job description, resume and self description to the backend
//  */
// export const generateInterviewReport = async ({
//   jobDescription,
//   selfDescription,
//   resume,
// }) => {
//   const formData = new FormData();
//   formData.append("jobDescription", jobDescription);
//   formData.append("selfDescription", selfDescription);
//   formData.append("resume", resume);

//   const response = await api.post("/api/interview", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

//   return response.data;
// };

// /**
//  * @description Service to get interview report by interviewId
//  */
// export const getInterviewReportById = async (interviewId) => {
//   const response = await api.get(`/api/interview/report/${interviewId}`);
//   return response.data;
// };

// /**
//  * @description Service to get all interview reports of logged in user.
//  */
// export const getAllInterviewReports = async () => {
//   const response = await api.get("/api/interview/");
//   return response.data;
// };

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

/**
 * @description Service to generate interview report by sending job description, resume and self description to the backend
 */
export const generateInterviewReport = async ({
  jobDescription,
  selfDescription,
  resumeFile, // ✅ FIX: was 'resume', now matches what useInterview hook passes
}) => {
  const formData = new FormData();
  formData.append("jobDescription", jobDescription);
  formData.append("selfDescription", selfDescription);

  if (resumeFile) {
    formData.append("resume", resumeFile); // ✅ only append if file exists
  }

  const response = await api.post("/api/interview", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

/**
 * @description Service to get interview report by interviewId
 */
export const getInterviewReportById = async (interviewId) => {
  const response = await api.get(`/api/interview/report/${interviewId}`);
  return response.data;
};

/**
 * @description Service to get all interview reports of logged in user.
 */
export const getAllInterviewReports = async () => {
  const response = await api.get("/api/interview/");
  return response.data;
};

/**
 * @description Service to generate resume pdf by sending job description, resume and self description to the backend
 */

export const generateResumePdf = async ({ interviewReportId }) => {
  const response = await api.post(
    `/api/interview/resume/pdf/${interviewReportId}`,
    null,
    {
      responseType: "blob", // important for handling binary data
    },
  );

  return response.data; // this will be the PDF blob
};
