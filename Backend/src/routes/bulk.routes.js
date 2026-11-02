// const express = require("express");
// const multer = require("multer");
// const { bulkAnalyze } = require("../controllers/bulk.controller");

// const router = express.Router();

// const upload = multer({
//   storage: multer.memoryStorage(),
// });

// router.post("/bulk-analyze", upload.array("resumes", 60), bulkAnalyze);

// module.exports = router;

const express = require("express");
const multer = require("multer");
const {
  bulkAnalyze,
  getAllBulkReports,
  getBulkReportById,
} = require("../controllers/bulk.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { files: 60, fileSize: 5 * 1024 * 1024 },
});

// ✅ All routes protected with auth
router.post(
  "/bulk-analyze",
  authMiddleware.authUser,
  upload.array("resumes", 60),
  bulkAnalyze,
);

router.get("/bulk-reports", authMiddleware.authUser, getAllBulkReports);

router.get(
  "/bulk-reports/:reportId",
  authMiddleware.authUser,
  getBulkReportById,
);

module.exports = router;
