const express = require("express");
const cookieParser = require("cookie-parser");
const bulkRoutes = require("./routes/bulk.routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);
app.use("/api", bulkRoutes);

module.exports = app;
