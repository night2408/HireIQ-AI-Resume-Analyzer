const mongoose = require("mongoose");

const bulkResultSchema = new mongoose.Schema(
  {
    rank: { type: Number },
    name: { type: String },
    matchScore: { type: Number },
    skillGaps: [{ type: String }],
    explanation: {
      matchedSkills: [{ type: String }],
      missingSkills: [{ type: String }],
      matchedKeywords: [{ type: String }],
      skillMatchPercent: { type: Number },
      totalJobSkills: { type: Number },
      totalMatchedSkills: { type: Number },
    },
  },
  { _id: false },
);

const bulkReportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    results: [bulkResultSchema],
  },
  { timestamps: true },
);

const bulkReportModel = mongoose.model("BulkReport", bulkReportSchema);
module.exports = bulkReportModel;
