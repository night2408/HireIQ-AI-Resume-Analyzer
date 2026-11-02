// const pdfParse = require("pdf-parse");
// const {
//   calculateSimilarity,
//   findSkillGaps,
// } = require("../services/nlp.service");

// async function extractPdfText(buffer) {
//   const uint8 = new Uint8Array(buffer);
//   const result = await new pdfParse.PDFParse(uint8).getText();

//   // getText() returns an array or object, not a plain string
//   let text;
//   if (typeof result === "string") {
//     text = result;
//   } else if (Array.isArray(result)) {
//     text = result.join(" ");
//   } else if (result && typeof result === "object") {
//     // try common keys it might return
//     text =
//       result.text ||
//       result.content ||
//       result.str ||
//       Object.values(result).join(" ");
//   }

//   if (!text || !text.trim()) throw new Error("Empty PDF text");
//   return text;
// }

// exports.bulkAnalyze = async (req, res) => {
//   try {
//     const jobDescription = req.body.jobDescription;
//     const files = req.files;

//     if (!files || files.length === 0) {
//       return res.status(400).json({ message: "No files uploaded" });
//     }

//     let results = [];

//     for (let file of files) {
//       try {
//         const resumeContent = await extractPdfText(file.buffer);

//         const score = calculateSimilarity(resumeContent, jobDescription);
//         const skillGaps = findSkillGaps(resumeContent, jobDescription);

//         results.push({
//           name: file.originalname,
//           matchScore: score,
//           skillGaps,
//         });
//       } catch (err) {
//         console.log("Error parsing:", file.originalname, err.message);
//         results.push({
//           name: file.originalname,
//           matchScore: 0,
//           skillGaps: ["Could not read PDF"],
//         });
//       }
//     }

//     results.sort((a, b) => b.matchScore - a.matchScore);
//     results = results.map((item, index) => ({ rank: index + 1, ...item }));

//     res.json(results);
//   } catch (error) {
//     console.log("Bulk error:", error);
//     res.status(500).json({ message: "Bulk analysis failed" });
//   }
// };

//------------------------------------sec code--------------------
// const pdfParse = require("pdf-parse");
// const {
//   bulkCalculateSimilarity,
//   findSkillGaps,
// } = require("../services/nlp.service");

// async function extractPdfText(buffer) {
//   const uint8 = new Uint8Array(buffer);
//   const result = await new pdfParse.PDFParse(uint8).getText();

//   let text;
//   if (typeof result === "string") {
//     text = result;
//   } else if (Array.isArray(result)) {
//     text = result.join(" ");
//   } else if (result && typeof result === "object") {
//     text =
//       result.text ||
//       result.content ||
//       result.str ||
//       Object.values(result).join(" ");
//   }

//   if (!text || !text.trim()) throw new Error("Empty PDF text");
//   return text;
// }

// exports.bulkAnalyze = async (req, res) => {
//   try {
//     const jobDescription = req.body.jobDescription;
//     const files = req.files;

//     if (!files || files.length === 0) {
//       return res.status(400).json({ message: "No files uploaded" });
//     }

//     // Step 1: extract all resume texts first
//     const parsed = [];
//     for (const file of files) {
//       try {
//         const text = await extractPdfText(file.buffer);
//         parsed.push({ name: file.originalname, text, error: null });
//       } catch (err) {
//         console.log("Error parsing:", file.originalname, err.message);
//         parsed.push({
//           name: file.originalname,
//           text: null,
//           error: err.message,
//         });
//       }
//     }

//     // Step 2: run TF-IDF across ALL resumes + job description at once
//     const validResumes = parsed.filter((p) => p.text);
//     const scores = bulkCalculateSimilarity(
//       validResumes.map((p) => p.text),
//       jobDescription,
//     );

//     // Step 3: build results
//     let scoreIndex = 0;
//     let results = parsed.map((p) => {
//       if (p.error) {
//         return {
//           name: p.name,
//           matchScore: 0,
//           skillGaps: ["Could not read PDF"],
//         };
//       }
//       const score = scores[scoreIndex++];
//       const skillGaps = findSkillGaps(p.text, jobDescription);
//       return { name: p.name, matchScore: score, skillGaps };
//     });

//     results.sort((a, b) => b.matchScore - a.matchScore);
//     results = results.map((item, index) => ({ rank: index + 1, ...item }));

//     res.json(results);
//   } catch (error) {
//     console.log("Bulk error:", error);
//     res.status(500).json({ message: "Bulk analysis failed" });
//   }
// };

//

//---------------------------new-code-xai
// const pdfParse = require("pdf-parse");
// const {
//   bulkCalculateSimilarity,
//   findSkillGaps,
//   explainScore, // ✅ import XAI function
// } = require("../services/nlp.service");

// async function extractPdfText(buffer) {
//   const uint8 = new Uint8Array(buffer);
//   const result = await new pdfParse.PDFParse(uint8).getText();

//   let text;
//   if (typeof result === "string") {
//     text = result;
//   } else if (Array.isArray(result)) {
//     text = result.join(" ");
//   } else if (result && typeof result === "object") {
//     text =
//       result.text ||
//       result.content ||
//       result.str ||
//       Object.values(result).join(" ");
//   }

//   if (!text || !text.trim()) throw new Error("Empty PDF text");
//   return text;
// }

// async function processBatch(files, batchSize = 10) {
//   const results = [];
//   for (let i = 0; i < files.length; i += batchSize) {
//     const batch = files.slice(i, i + batchSize);
//     const batchResults = await Promise.all(
//       batch.map(async (file) => {
//         try {
//           const text = await extractPdfText(file.buffer);
//           return { name: file.originalname, text, error: null };
//         } catch (err) {
//           console.log("Error parsing:", file.originalname, err.message);
//           return { name: file.originalname, text: null, error: err.message };
//         }
//       }),
//     );
//     results.push(...batchResults);
//     console.log(
//       `Batch ${Math.floor(i / batchSize) + 1} done — ${results.length}/${files.length} files parsed`,
//     );
//   }
//   return results;
// }

// exports.bulkAnalyze = async (req, res) => {
//   try {
//     const jobDescription = req.body.jobDescription;
//     const files = req.files;

//     if (!files || files.length === 0) {
//       return res.status(400).json({ message: "No files uploaded" });
//     }

//     console.log(`Starting analysis of ${files.length} resumes...`);

//     // Step 1: parse PDFs in parallel batches
//     const parsed = await processBatch(files, 10);

//     const validResumes = parsed.filter((p) => p.text);
//     console.log(
//       `Successfully parsed ${validResumes.length}/${files.length} PDFs`,
//     );

//     if (validResumes.length === 0) {
//       return res.status(400).json({ message: "No readable PDFs found" });
//     }

//     // Step 2: TF-IDF scores across all resumes at once
//     const scores = bulkCalculateSimilarity(
//       validResumes.map((p) => p.text),
//       jobDescription,
//     );

//     // Step 3: build results with XAI explanation
//     let scoreIndex = 0;
//     let results = parsed.map((p) => {
//       if (p.error) {
//         return {
//           name: p.name,
//           matchScore: 0,
//           skillGaps: ["Could not read PDF"],
//           explanation: null,
//         };
//       }
//       const score = scores[scoreIndex++];
//       const skillGaps = findSkillGaps(p.text, jobDescription);
//       const explanation = explainScore(p.text, jobDescription); // ✅ XAI

//       return { name: p.name, matchScore: score, skillGaps, explanation };
//     });

//     results.sort((a, b) => b.matchScore - a.matchScore);
//     results = results.map((item, index) => ({ rank: index + 1, ...item }));

//     console.log(`Analysis complete for ${files.length} resumes`);
//     res.json(results);
//   } catch (error) {
//     console.log("Bulk error:", error);
//     res.status(500).json({ message: "Bulk analysis failed" });
//   }
// };

const pdfParse = require("pdf-parse");
const {
  bulkCalculateSimilarity,
  findSkillGaps,
  explainScore,
} = require("../services/nlp.service");
const bulkReportModel = require("../models/BulkReport.model");

async function extractPdfText(buffer) {
  const uint8 = new Uint8Array(buffer);
  const result = await new pdfParse.PDFParse(uint8).getText();

  let text;
  if (typeof result === "string") {
    text = result;
  } else if (Array.isArray(result)) {
    text = result.join(" ");
  } else if (result && typeof result === "object") {
    text =
      result.text ||
      result.content ||
      result.str ||
      Object.values(result).join(" ");
  }

  if (!text || !text.trim()) throw new Error("Empty PDF text");
  return text;
}

async function processBatch(files, batchSize = 10) {
  const results = [];
  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(async (file) => {
        try {
          const text = await extractPdfText(file.buffer);
          return { name: file.originalname, text, error: null };
        } catch (err) {
          console.log("Error parsing:", file.originalname, err.message);
          return { name: file.originalname, text: null, error: err.message };
        }
      }),
    );
    results.push(...batchResults);
    console.log(
      `Batch ${Math.floor(i / batchSize) + 1} done — ${results.length}/${files.length} files parsed`,
    );
  }
  return results;
}

// ✅ Analyze and save to DB
exports.bulkAnalyze = async (req, res) => {
  try {
    const jobDescription = req.body.jobDescription;
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    console.log(`Starting analysis of ${files.length} resumes...`);

    const parsed = await processBatch(files, 10);
    const validResumes = parsed.filter((p) => p.text);

    console.log(
      `Successfully parsed ${validResumes.length}/${files.length} PDFs`,
    );

    if (validResumes.length === 0) {
      return res.status(400).json({ message: "No readable PDFs found" });
    }

    const scores = bulkCalculateSimilarity(
      validResumes.map((p) => p.text),
      jobDescription,
    );

    let scoreIndex = 0;
    let results = parsed.map((p) => {
      if (p.error) {
        return {
          name: p.name,
          matchScore: 0,
          skillGaps: ["Could not read PDF"],
          explanation: null,
        };
      }
      const score = scores[scoreIndex++];
      const skillGaps = findSkillGaps(p.text, jobDescription);
      const explanation = explainScore(p.text, jobDescription);
      return { name: p.name, matchScore: score, skillGaps, explanation };
    });

    results.sort((a, b) => b.matchScore - a.matchScore);
    results = results.map((item, index) => ({ rank: index + 1, ...item }));

    // ✅ Save to DB with user id
    const savedReport = await bulkReportModel.create({
      user: req.user.id,
      jobDescription,
      results,
    });

    console.log(`Analysis complete for ${files.length} resumes`);
    res.json({ reportId: savedReport._id, results });
  } catch (error) {
    console.log("Bulk error:", error);
    res.status(500).json({ message: "Bulk analysis failed" });
  }
};

// ✅ Get all bulk reports for logged in user
exports.getAllBulkReports = async (req, res) => {
  try {
    const reports = await bulkReportModel
      .find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .select("_id jobDescription createdAt results");

    res.json(reports);
  } catch (error) {
    console.log("Get bulk reports error:", error);
    res.status(500).json({ message: "Failed to fetch bulk reports" });
  }
};

// ✅ Get specific bulk report by ID
exports.getBulkReportById = async (req, res) => {
  try {
    const report = await bulkReportModel.findOne({
      _id: req.params.reportId,
      user: req.user.id,
    });

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.json(report);
  } catch (error) {
    console.log("Get bulk report error:", error);
    res.status(500).json({ message: "Failed to fetch bulk report" });
  }
};
