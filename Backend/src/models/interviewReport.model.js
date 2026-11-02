// const mongoose = require("mongoose");

// /**
//  * - job description schema : String
//  * - resume text : string
//  * - self description : string
//  *
//  * - matchScore : Number
//  *
//  * - Technical question :
//  *       [{
//  *          question : " ",
//  *           intention : " ",
//  *           answer : " ",
//  *         }]
//  *
//  * - Behavioural Questions : [{
//  *          question : " ",
//  *           intention : " ",
//  *           answer : " ",
//  *         }]
//  *
//  * - skill gaps : [{
//  *               skill : "",
//  *               severity : {
//  *                type : string,
//  *                enum : ["low ", "medium ", "high"]
//  * }
//  * }]
//  * - preparation plan : [{
//  *           day : number,
//  *            focus : string,
//  *            tasks: [string ]
//  * }]
//  *
//  */

// const technicalQuestionSchema = new mongoose.Schema(
//   {
//     question: {
//       type: String,
//       required: [true, "Technical question is required"],
//     },
//     intention: {
//       type: String,
//       required: [true, "intention is required"],
//     },
//     answer: {
//       type: String,
//       required: [true, "Answer is required "],
//     },
//   },
//   {
//     _id: false,
//   },
// );

// const behavioralQuestionSchema = new mongoose.Schema(
//   {
//     question: {
//       type: String,
//       required: [true, "Technical question is required"],
//     },
//     intention: {
//       type: String,
//       required: [true, "intention is required"],
//     },
//     answer: {
//       type: String,
//       required: [true, "Answer is required "],
//     },
//   },
//   {
//     _id: false,
//   },
// );

// const skillGapSchema = new mongoose.Schema(
//   {
//     skill: {
//       type: String,
//       required: [true, "Skill is required"],
//     },
//     severity: {
//       type: String,
//       enum: ["low", "medium", "high"],
//       required: [true, "severity is required"],
//     },
//   },
//   {
//     _id: false,
//   },
// );

// const preparationPlanSchema = new mongoose.Schema({
//   day: {
//     type: Number,
//     required: [true, "Day is require"],
//   },
//   focus: {
//     type: String,
//     required: [true, "Focus is required"],
//   },
//   tasks: [
//     {
//       type: String,
//       required: [true, "Task is required"],
//     },
//   ],
// });

// const interviewReportSchema = new mongoose.Schema(
//   {
//     jobDescription: {
//       type: String,
//       required: [true, "Job description is required"],
//     },
//     resume: {
//       type: String,
//     },
//     selfDescription: {
//       type: String,
//     },
//     title: {
//       type: String,
//       required: [true, "Job title is required"],
//     },
//     matchScore: {
//       type: Number,
//       min: 0,
//       max: 100,
//     },
//     technicalQuestions: [technicalQuestionSchema],
//     behavioralQuestions: [behavioralQuestionSchema],
//     skillGaps: [skillGapSchema],
//     preparationPlan: [preparationPlanSchema],
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "users",
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// const interviewReportModel = mongoose.model(
//   "InterviewReport",
//   interviewReportSchema,
// );
// module.exports = interviewReportModel;

//----------------------------code-xai-------------
const mongoose = require("mongoose");

/**
 * - job description schema : String
 * - resume text : string
 * - self description : string
 *
 * - matchScore : Number
 *
 * - Technical question :
 *       [{
 *          question : " ",
 *           intention : " ",
 *           answer : " ",
 *         }]
 *
 * - Behavioural Questions : [{
 *          question : " ",
 *           intention : " ",
 *           answer : " ",
 *         }]
 *
 * - skill gaps : [{
 *               skill : "",
 *               severity : {
 *                type : string,
 *                enum : ["low ", "medium ", "high"]
 * }
 * }]
 * - preparation plan : [{
 *           day : number,
 *            focus : string,
 *            tasks: [string ]
 * }]
 *
 */

const technicalQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Technical question is required"],
    },
    intention: {
      type: String,
      required: [true, "intention is required"],
    },
    answer: {
      type: String,
      required: [true, "Answer is required "],
    },
  },
  { _id: false },
);

const behavioralQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Technical question is required"],
    },
    intention: {
      type: String,
      required: [true, "intention is required"],
    },
    answer: {
      type: String,
      required: [true, "Answer is required "],
    },
  },
  { _id: false },
);

const skillGapSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "Skill is required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "severity is required"],
    },
  },
  { _id: false },
);

const preparationPlanSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: [true, "Day is require"],
  },
  focus: {
    type: String,
    required: [true, "Focus is required"],
  },
  tasks: [
    {
      type: String,
      required: [true, "Task is required"],
    },
  ],
});

const interviewReportSchema = new mongoose.Schema(
  {
    jobDescription: {
      type: String,
      required: [true, "Job description is required"],
    },
    resume: {
      type: String,
    },
    selfDescription: {
      type: String,
    },
    title: {
      type: String,
      required: [true, "Job title is required"],
    },
    matchScore: {
      type: Number,
      min: 0,
      max: 100,
    },
    technicalQuestions: [technicalQuestionSchema],
    behavioralQuestions: [behavioralQuestionSchema],
    skillGaps: [skillGapSchema],
    preparationPlan: [preparationPlanSchema],

    // ✅ ADDED EXPLANATION FIELD
    explanation: {
      whyThisScore: {
        type: String,
      },
      matchedSkills: [
        {
          type: String,
        },
      ],
      missingSkills: [
        {
          type: String,
        },
      ],
      strongPoints: [
        {
          type: String,
        },
      ],
      weakPoints: [
        {
          type: String,
        },
      ],
      scoreBreakdown: {
        technicalFit: {
          type: Number,
        },
        experienceFit: {
          type: Number,
        },
        overallFit: {
          type: Number,
        },
      },
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  },
);

const interviewReportModel = mongoose.model(
  "InterviewReport",
  interviewReportSchema,
);

module.exports = interviewReportModel;

