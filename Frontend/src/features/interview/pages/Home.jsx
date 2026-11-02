// import React, { useState, useRef } from "react";
// import "../style/home.scss";
// import { useInterview } from "../hooks/useinterview.js";
// import { useNavigate } from "react-router";

// const Home = () => {
//   const { loading, generateReport, reports } = useInterview();
//   const [jobDescription, setJobDescription] = useState("");
//   const [selfDescription, setSelfDescription] = useState("");
//   const [resumeFile, setResumeFile] = useState(null);
//   const resumeInputRef = useRef();

//   const navigate = useNavigate();

//   const handleGenerateReport = async () => {
//     if (!resumeFile && !selfDescription.trim()) {
//       alert("Please upload a resume or add a self description.");
//       return;
//     }

//     const data = await generateReport({
//       jobDescription,
//       selfDescription,
//       resumeFile,
//     });
//     navigate(`/interview/${data._id}`);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setResumeFile(file);
//   };

//   const handleRemoveFile = () => {
//     setResumeFile(null);
//     resumeInputRef.current.value = "";
//   };

//   if (loading) {
//     return (
//       <main className="loading-screen">
//         <h1>Loading your interview plan...</h1>
//       </main>
//     );
//   }

//   return (
//     <div className="home-page">
//       {/* Page Header */}
//       <header className="page-header">
//         <h1>
//           Create Your Custom <span className="highlight">Interview Plan</span>
//         </h1>
//         <p>
//           Let our AI analyze the job requirements and your unique profile to
//           build a winning strategy.
//         </p>
//       </header>

//       {/* Main Card */}
//       <div className="interview-card">
//         <div className="interview-card__body">
//           {/* Left Panel */}
//           <div className="panel panel--left">
//             <div className="panel__header">
//               <h2>Target Job Description</h2>
//               <span className="badge badge--required">Required</span>
//             </div>
//             <textarea
//               onChange={(e) => setJobDescription(e.target.value)}
//               className="panel__textarea"
//               placeholder="Paste the full job description here..."
//               maxLength={5000}
//             />
//             <div className="char-counter">
//               {jobDescription.length} / 5000 chars
//             </div>
//           </div>

//           <div className="panel-divider" />

//           {/* Right Panel */}
//           <div className="panel panel--right">
//             <div className="panel__header">
//               <h2>Your Profile</h2>
//             </div>

//             {/* Upload Resume */}
//             <div className="upload-section">
//               <label className="section-label">
//                 Upload Resume
//                 <span className="badge badge--best">Best Results</span>
//               </label>

//               {resumeFile ? (
//                 <div className="file-selected">
//                   <span>{resumeFile.name}</span>
//                   <button onClick={handleRemoveFile}>Remove</button>
//                 </div>
//               ) : (
//                 <label className="dropzone" htmlFor="resume">
//                   <p>Click to upload or drag & drop</p>
//                 </label>
//               )}

//               <input
//                 ref={resumeInputRef}
//                 hidden
//                 type="file"
//                 id="resume"
//                 accept=".pdf,.docx"
//                 onChange={handleFileChange}
//               />
//             </div>

//             <div className="or-divider">
//               <span>OR</span>
//             </div>

//             {/* Self Description */}
//             <div className="self-description">
//               <label className="section-label">Quick Self-Description</label>
//               <textarea
//                 onChange={(e) => setSelfDescription(e.target.value)}
//                 className="panel__textarea panel__textarea--short"
//                 placeholder="Briefly describe your experience..."
//               />
//             </div>
//           </div>
//         </div>

//         {/* Footer with BULK BUTTON */}
//         <div className="interview-card__footer">
//           <span className="footer-info">
//             AI-Powered Strategy Generation • Approx 30s
//           </span>

//           <div style={{ display: "flex", gap: "10px" }}>
//             <button onClick={handleGenerateReport} className="generate-btn">
//               Generate My Interview Strategy
//             </button>

//             <button
//               onClick={() => navigate("/bulk")}
//               className="generate-btn"
//               style={{ background: "#6366f1" }}
//             >
//               Bulk Resume Analyzer
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Recent Reports */}
//       {reports.length > 0 && (
//         <section className="recent-reports">
//           <h2>My Recent Interview Plans</h2>
//           <ul className="reports-list">
//             {reports.map((report) => (
//               <li
//                 key={report._id}
//                 className="report-item"
//                 onClick={() => navigate(`/interview/${report._id}`)}
//               >
//                 <h3>{report.title || "Untitled Position"}</h3>
//                 <p>Match Score: {report.matchScore}%</p>
//               </li>
//             ))}
//           </ul>
//         </section>
//       )}

//       <footer className="page-footer">
//         <a href="#">Privacy Policy</a>
//         <a href="#">Terms of Service</a>
//         <a href="#">Help Center</a>
//       </footer>
//     </div>
//   );
// };

// export default Home;

//-----------------------------with-logout--------------------
import React, { useState, useRef } from "react";
import "../style/home.scss";
import { useInterview } from "../hooks/useinterview.js";
import { useNavigate } from "react-router";

const Home = () => {
  const { loading, generateReport, reports } = useInterview();
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const resumeInputRef = useRef();
  const navigate = useNavigate();

  const handleGenerateReport = async () => {
    if (!resumeFile && !selfDescription.trim()) {
      alert("Please upload a resume or add a self description.");
      return;
    }
    const data = await generateReport({
      jobDescription,
      selfDescription,
      resumeFile,
    });
    navigate(`/interview/${data._id}`);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setResumeFile(file);
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    resumeInputRef.current.value = "";
  };

  if (loading) {
    return (
      <main className="loading-screen">
        <h1>Loading your interview plan...</h1>
      </main>
    );
  }

  return (
    <div className="home-page">
      {/* Page Header */}
      <header className="page-header">
        <h1>
          Create Your Custom <span className="highlight">Interview Plan</span>
        </h1>
        <p>
          Let our AI analyze the job requirements and your unique profile to
          build a winning strategy.
        </p>
      </header>

      {/* Main Card */}
      <div className="interview-card">
        <div className="interview-card__body">
          <div className="panel panel--left">
            <div className="panel__header">
              <h2>Target Job Description</h2>
              <span className="badge badge--required">Required</span>
            </div>
            <textarea
              onChange={(e) => setJobDescription(e.target.value)}
              className="panel__textarea"
              placeholder="Paste the full job description here..."
              maxLength={5000}
            />
            <div className="char-counter">
              {jobDescription.length} / 5000 chars
            </div>
          </div>

          <div className="panel-divider" />

          <div className="panel panel--right">
            <div className="panel__header">
              <h2>Your Profile</h2>
            </div>

            <div className="upload-section">
              <label className="section-label">
                Upload Resume
                <span className="badge badge--best">Best Results</span>
              </label>
              {resumeFile ? (
                <div className="file-selected">
                  <span>{resumeFile.name}</span>
                  <button onClick={handleRemoveFile}>Remove</button>
                </div>
              ) : (
                <label className="dropzone" htmlFor="resume">
                  <p>Click to upload or drag & drop</p>
                </label>
              )}
              <input
                ref={resumeInputRef}
                hidden
                type="file"
                id="resume"
                accept=".pdf,.docx"
                onChange={handleFileChange}
              />
            </div>

            <div className="or-divider">
              <span>OR</span>
            </div>

            <div className="self-description">
              <label className="section-label">Quick Self-Description</label>
              <textarea
                onChange={(e) => setSelfDescription(e.target.value)}
                className="panel__textarea panel__textarea--short"
                placeholder="Briefly describe your experience..."
              />
            </div>
          </div>
        </div>

        <div className="interview-card__footer">
          <span className="footer-info">
            AI-Powered Strategy Generation • Approx 30s
          </span>
          <button onClick={handleGenerateReport} className="generate-btn">
            Generate My Interview Strategy
          </button>
        </div>
      </div>

      {/* Recent Reports */}
      {reports.length > 0 && (
        <section className="recent-reports">
          <h2>My Recent Interview Plans</h2>
          <ul className="reports-list">
            {reports.map((report) => (
              <li
                key={report._id}
                className="report-item"
                onClick={() => navigate(`/interview/${report._id}`)}
              >
                <h3>{report.title || "Untitled Position"}</h3>
                <p>Match Score: {report.matchScore}%</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer className="page-footer">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Help Center</a>
      </footer>
    </div>
  );
};

export default Home;
