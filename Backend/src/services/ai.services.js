// const { GoogleGenAI } = require("@google/genai")

// const ai = new GoogleGenAI({
//     apiKey : process.env.GOOGLE_GENAI_API_KEY
// })

// async function invokeGeminiAi(){
//     const response = await ai.models.generateContent({
//         model : "gemini-2.5-flash",
//         contents: "Hello gemini ! Explain what is Interview ?"
//     })
//     console.log(response.text)
// }

// const { z } = require("zod");
// const { zodToJsonSchema } = require("zod-to-json-schema");

// ================= Gemini Test Function =================
// async function invokeGeminiAi() {
//   const { GoogleGenAI } = await import("@google/genai");

//   const ai = new GoogleGenAI({
//     apiKey: process.env.GOOGLE_GENAI_API_KEY,
//   });

//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Hello Gemini! Explain what is Interview?",
//   });

//   console.log(response.text);
//}

//-----------------------------------prev code---------------------------
// const { GoogleGenAI } = require("@google/genai");
// const { z } = require("zod");
// const { zodToJsonSchema } = require("zod-to-json-schema");
// const puppeteer = require("puppeteer");

// const ai = new GoogleGenAI({
//   apiKey: process.env.GOOGLE_GENAI_API_KEY,
// });

// const interviewReportSchema = z.object({
//   matchScore: z
//     .number()
//     .describe(
//       "A score between 0 and 100 indicating how well the candidate's profile matches the job describe except 88",
//     ),
//   technicalQuestions: z
//     .array(
//       z.object({
//         question: z
//           .string()
//           .describe("The technical question can be asked in the interview"),
//         intention: z
//           .string()
//           .describe("The intention of interviewer behind asking this question"),
//         answer: z
//           .string()
//           .describe(
//             "How to answer this question, what points to cover, what approach to take etc.",
//           ),
//       }),
//     )
//     .describe(
//       "Technical questions that can be asked in the interview along with their intention and how to answer them",
//     ),
//   behavioralQuestions: z
//     .array(
//       z.object({
//         question: z
//           .string()
//           .describe("The technical question can be asked in the interview"),
//         intention: z
//           .string()
//           .describe("The intention of interviewer behind asking this question"),
//         answer: z
//           .string()
//           .describe(
//             "How to answer this question, what points to cover, what approach to take etc.",
//           ),
//       }),
//     )
//     .describe(
//       "Behavioral questions that can be asked in the interview along with their intention and how to answer them",
//     ),
//   skillGaps: z
//     .array(
//       z.object({
//         skill: z.string().describe("The skill which the candidate is lacking"),
//         severity: z
//           .enum(["low", "medium", "high"])
//           .describe(
//             "The severity of this skill gap, i.e. how important is this skill for the job and how much it can impact the candidate's chances",
//           ),
//       }),
//     )
//     .describe(
//       "List of skill gaps in the candidate's profile along with their severity",
//     ),
//   preparationPlan: z
//     .array(
//       z.object({
//         day: z
//           .number()
//           .describe("The day number in the preparation plan, starting from 1"),
//         focus: z
//           .string()
//           .describe(
//             "The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc.",
//           ),
//         tasks: z
//           .array(z.string())
//           .describe(
//             "List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc.",
//           ),
//       }),
//     )
//     .describe(
//       "A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively",
//     ),
//   title: z
//     .string()
//     .describe(
//       "The title of the job for which the interview report is generated",
//     ),
// });

// async function generateInterviewReport({
//   resume,
//   selfDescription,
//   jobDescription,
// }) {
//   try {
//     const prompt = `Generate an interview report for a candidate with the following details:
//             Resume: ${resume}
//             Self Description: ${selfDescription}
//             Job Description: ${jobDescription}

//             Return ONLY a valid JSON object with this EXACT structure, no extra text:

//             {
//                 "title": "job title here",
//                 "matchScore": 85,
//                 "technicalQuestions": [
//                     {
//                         "question": "write the question here",
//                         "intention": "write the intention here",
//                         "answer": "write the answer here"
//                     },
//                     {
//                         "question": "write the question here",
//                         "intention": "write the intention here",
//                         "answer": "write the answer here"
//                     }
//                 ],
//                 "behavioralQuestions": [
//                     {
//                         "question": "write the question here",
//                         "intention": "write the intention here",
//                         "answer": "write the answer here"
//                     }
//                 ],
//                 "skillGaps": [
//                     {
//                         "skill": "skill name here",
//                         "severity": "medium"
//                     }
//                 ],
//                 "preparationPlan": [
//                     {
//                         "day": 1,
//                         "focus": "topic for day 1",
//                         "tasks": ["task one", "task two"]
//                     },
//                     {
//                         "day": 2,
//                         "focus": "topic for day 2",
//                         "tasks": ["task one", "task two"]
//                     },
//                      {
//                         "day": 3,
//                         "focus": "topic for day 3",
//                         "tasks": ["task one", "task two"]
//                     },
//                     {
//                         "day": 4,
//                         "focus": "topic for day 4",
//                         "tasks": ["task one", "task two"]
//                     },
//                      {
//                         "day": 5,
//                         "focus": "topic for day 5",
//                         "tasks": ["task one", "task two"]
//                     },
//                     {
//                         "day": 6,
//                         "focus": "topic for day 6",
//                         "tasks": ["task one", "task two"]
//                     },
//                      {
//                         "day": 7,
//                         "focus": "topic for day 7",
//                         "tasks": ["task one", "task two"]
//                     }
//                 ]
//             }`;

//     const response = await ai.models.generateContent({
//       model: "gemini-3-flash-preview",
//       contents: prompt,
//       config: {
//         responseMimeType: "application/json",
//       },
//     });

//     const result = JSON.parse(response.text);
//     console.log("Interview Report:", JSON.stringify(result, null, 2));
//     return result;
//   } catch (error) {
//     console.error("Error generating report:", error.message);
//     throw error;
//   }
// }
// async function generatePdfFromHtml(htmlContent) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.setContent(htmlContent, { waitUntil: "networkidle0" });

//   const pdfBuffer = await page.pdf({
//     format: "A4",
//     margin: {
//       top: "20mm",
//       bottom: "20mm",
//       left: "15mm",
//       right: "15mm",
//     },
//   });

//   await browser.close();

//   return pdfBuffer;
// }

// async function generateResumePdf({ resume, selfDescription, jobDescription }) {
//   const resumePdfSchema = z.object({
//     html: z
//       .string()
//       .describe(
//         "The HTML content of the resume which can be converted to PDF using any library like puppeteer",
//       ),
//   });

//   const prompt = `Generate resume for a candidate with the following details:
//                         Resume: ${resume}
//                         Self Description: ${selfDescription}
//                         Job Description: ${jobDescription}

//                         the response should be a JSON object with a single field "html" which contains the HTML content of the resume which can be converted to PDF using any library like puppeteer.
//                         The resume should be tailored for the given job description and should highlight the candidate's strengths and relevant experience. The HTML content should be well-formatted and structured, making it easy to read and visually appealing.
//                         The content of resume should be not sound like it's generated by AI and should be as close as possible to a real human-written resume.
//                         you can highlight the content using some colors or different font styles but the overall design should be simple and professional.
//                         The content should be ATS friendly, i.e. it should be easily parsable by ATS systems without losing important information.
//                         The resume should not be so lengthy, it should ideally be 1-2 pages long when converted to PDF. Focus on quality rather than quantity and make sure to include all the relevant information that can increase the candidate's chances of getting an interview call for the given job description.
//                     `;

//   const response = await ai.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: prompt,
//     config: {
//       responseMimeType: "application/json",
//       responseSchema: zodToJsonSchema(resumePdfSchema),
//     },
//   });

//   const jsonContent = JSON.parse(response.text);

//   const pdfBuffer = await generatePdfFromHtml(jsonContent.html);

//   return pdfBuffer;
// }

// module.exports = {
//   generateInterviewReport,
//   generateResumePdf,
// };

//-----------------------------new-code-xai------------

// const { GoogleGenAI } = require("@google/genai");
// const { z } = require("zod");
// const { zodToJsonSchema } = require("zod-to-json-schema");
// const puppeteer = require("puppeteer");

// const ai = new GoogleGenAI({
//   apiKey: process.env.GOOGLE_GENAI_API_KEY,
// });

// const interviewReportSchema = z.object({
//   matchScore: z
//     .number()
//     .describe(
//       "A score between 0 and 100 indicating how well the candidate's profile matches the job description",
//     ),

//   // ✅ XAI: explanation of why this score was given
//   explanation: z
//     .object({
//       whyThisScore: z
//         .string()
//         .describe(
//           "A 2-3 sentence human-readable explanation of why this match score was given",
//         ),
//       matchedSkills: z
//         .array(z.string())
//         .describe("List of skills the candidate HAS that the job requires"),
//       missingSkills: z
//         .array(z.string())
//         .describe(
//           "List of important skills the candidate is MISSING for this job",
//         ),
//       strongPoints: z
//         .array(z.string())
//         .describe(
//           "Top 3 strongest points of the candidate's profile for this role",
//         ),
//       weakPoints: z
//         .array(z.string())
//         .describe(
//           "Top 3 weakest points or gaps in the candidate's profile for this role",
//         ),
//       scoreBreakdown: z.object({
//         technicalFit: z
//           .number()
//           .describe(
//             "Score 0-100 for how well candidate's technical skills match",
//           ),
//         experienceFit: z
//           .number()
//           .describe(
//             "Score 0-100 for how well candidate's experience level matches",
//           ),
//         overallFit: z.number().describe("Overall fit score 0-100"),
//       }),
//     })
//     .describe(
//       "Explainable AI section — why the score was given and what factors contributed to it",
//     ),

//   technicalQuestions: z
//     .array(
//       z.object({
//         question: z
//           .string()
//           .describe("The technical question can be asked in the interview"),
//         intention: z
//           .string()
//           .describe("The intention of interviewer behind asking this question"),
//         answer: z
//           .string()
//           .describe(
//             "How to answer this question, what points to cover, what approach to take etc.",
//           ),
//       }),
//     )
//     .describe(
//       "Technical questions that can be asked in the interview along with their intention and how to answer them",
//     ),

//   behavioralQuestions: z
//     .array(
//       z.object({
//         question: z
//           .string()
//           .describe("The behavioral question can be asked in the interview"),
//         intention: z
//           .string()
//           .describe("The intention of interviewer behind asking this question"),
//         answer: z
//           .string()
//           .describe(
//             "How to answer this question, what points to cover, what approach to take etc.",
//           ),
//       }),
//     )
//     .describe("Behavioral questions that can be asked in the interview"),

//   skillGaps: z
//     .array(
//       z.object({
//         skill: z.string().describe("The skill which the candidate is lacking"),
//         severity: z
//           .enum(["low", "medium", "high"])
//           .describe("How important is this skill for the job"),
//       }),
//     )
//     .describe(
//       "List of skill gaps in the candidate's profile along with their severity",
//     ),

//   preparationPlan: z
//     .array(
//       z.object({
//         day: z
//           .number()
//           .describe("The day number in the preparation plan, starting from 1"),
//         focus: z.string().describe("The main focus of this day"),
//         tasks: z
//           .array(z.string())
//           .describe("List of tasks to be done on this day"),
//       }),
//     )
//     .describe("A day-wise preparation plan for the candidate"),

//   title: z
//     .string()
//     .describe(
//       "The title of the job for which the interview report is generated",
//     ),
// });

// async function generateInterviewReport({
//   resume,
//   selfDescription,
//   jobDescription,
// }) {
//   try {
//     const prompt = `Generate an interview report for a candidate with the following details:
//             Resume: ${resume}
//             Self Description: ${selfDescription}
//             Job Description: ${jobDescription}

//             Return ONLY a valid JSON object with this EXACT structure, no extra text:

//             {
//                 "title": "job title here",
//                 "matchScore": 85,

//                 "explanation": {
//                     "whyThisScore": "2-3 sentence explanation of why this score was given based on the candidate's profile vs job requirements",
//                     "matchedSkills": ["skill1", "skill2", "skill3"],
//                     "missingSkills": ["skill1", "skill2"],
//                     "strongPoints": ["strong point 1", "strong point 2", "strong point 3"],
//                     "weakPoints": ["weak point 1", "weak point 2", "weak point 3"],
//                     "scoreBreakdown": {
//                         "technicalFit": 80,
//                         "experienceFit": 75,
//                         "overallFit": 85
//                     }
//                 },

//                 "technicalQuestions": [
//                     {
//                         "question": "write the question here",
//                         "intention": "write the intention here",
//                         "answer": "write the answer here"
//                     }
//                 ],
//                 "behavioralQuestions": [
//                     {
//                         "question": "write the question here",
//                         "intention": "write the intention here",
//                         "answer": "write the answer here"
//                     }
//                 ],
//                 "skillGaps": [
//                     {
//                         "skill": "skill name here",
//                         "severity": "medium"
//                     }
//                 ],
//                 "preparationPlan": [
//                     { "day": 1, "focus": "topic for day 1", "tasks": ["task one", "task two"] },
//                     { "day": 2, "focus": "topic for day 2", "tasks": ["task one", "task two"] },
//                     { "day": 3, "focus": "topic for day 3", "tasks": ["task one", "task two"] },
//                     { "day": 4, "focus": "topic for day 4", "tasks": ["task one", "task two"] },
//                     { "day": 5, "focus": "topic for day 5", "tasks": ["task one", "task two"] },
//                     { "day": 6, "focus": "topic for day 6", "tasks": ["task one", "task two"] },
//                     { "day": 7, "focus": "topic for day 7", "tasks": ["task one", "task two"] }
//                 ]
//             }`;

//     const response = await ai.models.generateContent({
//       model: "gemini-3-flash-preview",
//       contents: prompt,
//       config: {
//         responseMimeType: "application/json",
//       },
//     });

//     const result = JSON.parse(response.text);
//     console.log("Interview Report:", JSON.stringify(result, null, 2));
//     return result;
//   } catch (error) {
//     console.error("Error generating report:", error.message);
//     throw error;
//   }
// }

// async function generatePdfFromHtml(htmlContent) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.setContent(htmlContent, { waitUntil: "networkidle0" });

//   const pdfBuffer = await page.pdf({
//     format: "A4",
//     margin: { top: "20mm", bottom: "20mm", left: "15mm", right: "15mm" },
//   });

//   await browser.close();
//   return pdfBuffer;
// }

// async function generateResumePdf({ resume, selfDescription, jobDescription }) {
//   const resumePdfSchema = z.object({
//     html: z.string().describe("The HTML content of the resume"),
//   });

//   const prompt = `Generate resume for a candidate with the following details:
//                         Resume: ${resume}
//                         Self Description: ${selfDescription}
//                         Job Description: ${jobDescription}

//                         the response should be a JSON object with a single field "html" which contains the HTML content of the resume which can be converted to PDF using any library like puppeteer.
//                         The resume should be tailored for the given job description and should highlight the candidate's strengths and relevant experience. The HTML content should be well-formatted and structured, making it easy to read and visually appealing.
//                         The content of resume should be not sound like it's generated by AI and should be as close as possible to a real human-written resume.
//                         you can highlight the content using some colors or different font styles but the overall design should be simple and professional.
//                         The content should be ATS friendly, i.e. it should be easily parsable by ATS systems without losing important information.
//                         The resume should not be so lengthy, it should ideally be 1-2 pages long when converted to PDF.`;

//   const response = await ai.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: prompt,
//     config: {
//       responseMimeType: "application/json",
//       responseSchema: zodToJsonSchema(resumePdfSchema),
//     },
//   });

//   const jsonContent = JSON.parse(response.text);
//   const pdfBuffer = await generatePdfFromHtml(jsonContent.html);
//   return pdfBuffer;
// }

// module.exports = {
//   generateInterviewReport,
//   generateResumePdf,
// };

//-------------------------------------lanchain--------------
// ai.services.js — Full LangChain version
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { ChatPromptTemplate } = require("@langchain/core/prompts");
const { StructuredOutputParser } = require("@langchain/core/output_parsers");
const { RunnableSequence } = require("@langchain/core/runnables");
const { z } = require("zod");
const puppeteer = require("puppeteer");

// ── 1. Initialize the LangChain model ─────────────────────────────────────────
const model = new ChatGoogleGenerativeAI({
  model: "gemini-3-flash-preview",
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
  temperature: 0.7,
});

// ── 2. Define Zod schema for structured output ────────────────────────────────
const interviewReportSchema = z.object({
  title: z.string().describe("Job title from the job description"),
  matchScore: z.number().min(0).max(100).describe("Match score 0-100"),
  explanation: z.object({
    whyThisScore: z.string().describe("2-3 sentence explanation of the score"),
    matchedSkills: z.array(z.string()).describe("Skills candidate HAS"),
    missingSkills: z.array(z.string()).describe("Skills candidate LACKS"),
    strongPoints: z.array(z.string()).max(3).describe("Top 3 strengths"),
    weakPoints: z.array(z.string()).max(3).describe("Top 3 weaknesses"),
    scoreBreakdown: z.object({
      technicalFit: z.number().min(0).max(100),
      experienceFit: z.number().min(0).max(100),
      overallFit: z.number().min(0).max(100),
    }),
  }),
  technicalQuestions: z.array(z.object({
    question: z.string(),
    intention: z.string(),
    answer: z.string(),
  })).describe("5-7 technical questions"),
  behavioralQuestions: z.array(z.object({
    question: z.string(),
    intention: z.string(),
    answer: z.string(),
  })).describe("3-5 behavioral questions"),
  skillGaps: z.array(z.object({
    skill: z.string(),
    severity: z.enum(["low", "medium", "high"]),
  })),
  preparationPlan: z.array(z.object({
    day: z.number(),
    focus: z.string(),
    tasks: z.array(z.string()),
  })).length(7).describe("7-day preparation plan"),
});

// ── 3. Create the LangChain chain ─────────────────────────────────────────────
async function generateInterviewReport({ resume, selfDescription, jobDescription }) {
  try {
    // Step 1: Create a structured output parser from the Zod schema
    const parser = StructuredOutputParser.fromZodSchema(interviewReportSchema);

    // Step 2: Create a prompt template — this is the LangChain way
    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        `You are an expert HR analyst and interview coach. 
         Analyze the candidate's profile against the job description and generate a comprehensive interview report.
         {format_instructions}`,
      ],
      [
        "human",
        `Job Description: {jobDescription}
         
         Resume: {resume}
         
         Self Description: {selfDescription}
         
         Generate a detailed interview report with honest scoring, relevant questions, and an actionable 7-day prep plan.`,
      ],
    ]);

    // Step 3: Build a RunnableSequence chain (prompt → model → parser)
    const chain = RunnableSequence.from([prompt, model, parser]);

    // Step 4: Invoke the chain
    const result = await chain.invoke({
      jobDescription,
      resume: resume || "Not provided",
      selfDescription: selfDescription || "Not provided",
      format_instructions: parser.getFormatInstructions(),
    });

    console.log("LangChain Interview Report Generated ✅");
    return result;
  } catch (error) {
    console.error("LangChain error:", error.message);
    throw error;
  }
}

// ── 4. Resume PDF generation using LangChain ──────────────────────────────────
async function generateResumePdf({ resume, selfDescription, jobDescription }) {
  const resumeSchema = z.object({
    html: z.string().describe("Complete HTML resume ready for PDF conversion"),
  });

  const parser = StructuredOutputParser.fromZodSchema(resumeSchema);

  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      `You are a professional resume writer. Create ATS-friendly, visually clean resumes tailored to specific jobs.
       The HTML must be self-contained and print-ready (no external CSS links).
       Use inline styles only. Keep it 1-2 pages.
       {format_instructions}`,
    ],
    [
      "human",
      `Create a tailored resume for this candidate:
       
       Original Resume: {resume}
       Self Description: {selfDescription}
       Target Job Description: {jobDescription}`,
    ],
  ]);

  const chain = RunnableSequence.from([prompt, model, parser]);

  const result = await chain.invoke({
    resume: resume || "Not provided",
    selfDescription: selfDescription || "Not provided",
    jobDescription,
    format_instructions: parser.getFormatInstructions(),
  });

  return generatePdfFromHtml(result.html);
}

async function generatePdfFromHtml(htmlContent) {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: "networkidle0" });
  const pdfBuffer = await page.pdf({
    format: "A4",
    margin: { top: "20mm", bottom: "20mm", left: "15mm", right: "15mm" },
  });
  await browser.close();
  return pdfBuffer;
}

module.exports = { generateInterviewReport, generateResumePdf };

