// import React, { useState } from "react";
// import "../../interview/style/home.scss";
// import axios from "axios";
// import { useNavigate } from "react-router";

// const BulkUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [jobDescription, setJobDescription] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleUpload = async () => {
//     // ✅ VALIDATION
//     if (!jobDescription.trim() || files.length === 0) {
//       alert("Please add job description and upload resumes");
//       return;
//     }

//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append("jobDescription", jobDescription);

//       for (let i = 0; i < files.length; i++) {
//         formData.append("resumes", files[i]);
//       }

//       const res = await axios.post(
//         "http://localhost:3000/api/bulk-analyze",
//         formData,
//       );

//       setResults(res.data);
//     } catch (err) {
//       console.log("Frontend error:", err);
//       alert("Error analyzing resumes");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="home-page">
//       {/* Toggle Buttons */}
//       <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
//         <button className="generate-btn" onClick={() => navigate("/")}>
//           Single Resume
//         </button>

//         <button className="generate-btn" style={{ background: "#6366f1" }}>
//           Bulk Resume
//         </button>
//       </div>

//       {/* Main Card */}
//       <div className="interview-card">
//         <div className="interview-card__body">
//           {/* Job Description */}
//           <div className="panel panel--left">
//             <h2>Target Job Description</h2>

//             <textarea
//               className="panel__textarea"
//               placeholder="Paste Job Description"
//               onChange={(e) => setJobDescription(e.target.value)}
//             />
//           </div>

//           <div className="panel-divider" />

//           {/* Upload */}
//           <div className="panel panel--right">
//             <h2>Upload Multiple Resumes</h2>

//             <input
//               type="file"
//               multiple
//               onChange={(e) => setFiles(e.target.files)}
//             />

//             <br />
//             <br />

//             <button
//               className="generate-btn"
//               onClick={handleUpload}
//               disabled={loading}
//             >
//               {loading ? "Analyzing..." : "Analyze Resumes"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Results */}
//       {results.length > 0 && (
//         <div className="interview-card" style={{ marginTop: "20px" }}>
//           <div style={{ padding: "20px" }}>
//             <h2>Ranking Results</h2>

//             <table style={{ width: "100%", marginTop: "10px" }}>
//               <thead>
//                 <tr>
//                   <th>Rank</th>
//                   <th>Resume</th>
//                   <th>Score</th>
//                   <th>Skill Gaps</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {results.map((r, i) => (
//                   <tr
//                     key={i}
//                     style={{
//                       background: r.rank === 1 ? "#ecfdf5" : "transparent", // 🏆 highlight best
//                     }}
//                   >
//                     {/* Rank */}
//                     <td
//                       style={{
//                         fontWeight: "bold",
//                         color: r.rank === 1 ? "#16a34a" : "",
//                       }}
//                     >
//                       {r.rank}
//                     </td>

//                     {/* Name */}
//                     <td>{r.name}</td>

//                     {/* Score */}
//                     <td style={{ fontWeight: "bold" }}>{r.matchScore} %</td>

//                     {/* Skill gaps */}
//                     <td>
//                       {r.skillGaps.length > 0 ? r.skillGaps.join(", ") : "None"}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BulkUpload;
//

//---------------------------new-code-xai
// import React, { useState } from "react";
// import "../../interview/style/home.scss";
// import axios from "axios";
// import { useNavigate } from "react-router";

// const BulkUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [jobDescription, setJobDescription] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [expandedRow, setExpandedRow] = useState(null); // ✅ for XAI expand/collapse

//   const navigate = useNavigate();

//   const handleUpload = async () => {
//     if (!jobDescription.trim() || files.length === 0) {
//       alert("Please add job description and upload resumes");
//       return;
//     }

//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append("jobDescription", jobDescription);

//       for (let i = 0; i < files.length; i++) {
//         formData.append("resumes", files[i]);
//       }

//       const res = await axios.post(
//         "http://localhost:3000/api/bulk-analyze",
//         formData,
//       );

//       setResults(res.data);
//     } catch (err) {
//       console.log("Frontend error:", err);
//       alert("Error analyzing resumes");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="home-page">
//       {/* Toggle Buttons */}
//       <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
//         <button className="generate-btn" onClick={() => navigate("/")}>
//           Single Resume
//         </button>
//         <button className="generate-btn" style={{ background: "#6366f1" }}>
//           Bulk Resume
//         </button>
//       </div>

//       {/* Main Card */}
//       <div className="interview-card">
//         <div className="interview-card__body">
//           <div className="panel panel--left">
//             <h2>Target Job Description</h2>
//             <textarea
//               className="panel__textarea"
//               placeholder="Paste Job Description"
//               onChange={(e) => setJobDescription(e.target.value)}
//             />
//           </div>

//           <div className="panel-divider" />

//           <div className="panel panel--right">
//             <h2>Upload Multiple Resumes</h2>
//             <input
//               type="file"
//               multiple
//               onChange={(e) => setFiles(e.target.files)}
//             />
//             <br />
//             <br />
//             <button
//               className="generate-btn"
//               onClick={handleUpload}
//               disabled={loading}
//             >
//               {loading ? "Analyzing..." : "Analyze Resumes"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Results */}
//       {results.length > 0 && (
//         <div className="interview-card" style={{ marginTop: "20px" }}>
//           <div style={{ padding: "20px" }}>
//             <h2 style={{ color: "#f87171", marginBottom: "16px" }}>
//               Ranking Results
//             </h2>

//             <table
//               style={{
//                 width: "100%",
//                 marginTop: "10px",
//                 borderCollapse: "collapse",
//               }}
//             >
//               <thead>
//                 <tr
//                   style={{
//                     backgroundColor: "#1e293b",
//                     borderBottom: "2px solid #334155",
//                   }}
//                 >
//                   {[
//                     "Rank",
//                     "Resume",
//                     "Score",
//                     "Skill Gaps",
//                     "Why this score?",
//                   ].map((heading) => (
//                     <th
//                       key={heading}
//                       style={{
//                         padding: "12px 16px",
//                         textAlign: "left",
//                         color: "#94a3b8",
//                         fontWeight: "600",
//                         fontSize: "14px",
//                         letterSpacing: "0.05em",
//                         textTransform: "uppercase",
//                         border: "1px solid #334155",
//                       }}
//                     >
//                       {heading}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>

//               <tbody>
//                 {results.map((r, i) => (
//                   <>
//                     <tr
//                       key={i}
//                       style={{
//                         backgroundColor: i % 2 === 0 ? "#0f172a" : "#1e293b",
//                         borderBottom: "1px solid #334155",
//                       }}
//                     >
//                       {/* Rank */}
//                       <td
//                         style={{
//                           padding: "12px 16px",
//                           fontWeight: "bold",
//                           border: "1px solid #334155",
//                           color: "#f1f5f9",
//                         }}
//                       >
//                         {r.rank}
//                       </td>

//                       {/* Name */}
//                       <td
//                         style={{
//                           padding: "12px 16px",
//                           border: "1px solid #334155",
//                           color: "#f1f5f9",
//                         }}
//                       >
//                         {r.name}
//                       </td>

//                       {/* Score */}
//                       <td
//                         style={{
//                           padding: "12px 16px",
//                           fontWeight: "bold",
//                           border: "1px solid #334155",
//                           color: "#4ade80",
//                         }}
//                       >
//                         {r.matchScore} %
//                       </td>

//                       {/* Skill Gaps */}
//                       <td
//                         style={{
//                           padding: "12px 16px",
//                           border: "1px solid #334155",
//                           color:
//                             !r.skillGaps.length || r.skillGaps[0] === "None"
//                               ? "#4ade80"
//                               : "#fca5a5",
//                         }}
//                       >
//                         {r.skillGaps.length > 0
//                           ? r.skillGaps.join(", ")
//                           : "None"}
//                       </td>

//                       {/* ✅ XAI toggle button */}
//                       <td
//                         style={{
//                           padding: "12px 16px",
//                           border: "1px solid #334155",
//                         }}
//                       >
//                         <button
//                           onClick={() =>
//                             setExpandedRow(expandedRow === i ? null : i)
//                           }
//                           style={{
//                             background: "#1e40af",
//                             color: "#fff",
//                             border: "none",
//                             borderRadius: "6px",
//                             padding: "6px 12px",
//                             cursor: "pointer",
//                             fontSize: "12px",
//                           }}
//                         >
//                           {expandedRow === i ? "Hide ▲" : "Explain ▼"}
//                         </button>
//                       </td>
//                     </tr>

//                     {/* ✅ XAI expanded explanation row */}
//                     {expandedRow === i && r.explanation && (
//                       <tr key={`explain-${i}`}>
//                         <td
//                           colSpan={5}
//                           style={{
//                             padding: "16px 24px",
//                             backgroundColor: "#0f172a",
//                             border: "1px solid #334155",
//                           }}
//                         >
//                           <div
//                             style={{
//                               display: "flex",
//                               flexDirection: "column",
//                               gap: "10px",
//                             }}
//                           >
//                             {/* Title */}
//                             <div
//                               style={{
//                                 color: "#94a3b8",
//                                 fontWeight: "bold",
//                                 fontSize: "13px",
//                                 marginBottom: "4px",
//                               }}
//                             >
//                               🤖 Why did this resume score {r.matchScore}%?
//                             </div>

//                             {/* Skill match summary */}
//                             <div style={{ color: "#cbd5e1", fontSize: "13px" }}>
//                               🎯 Skill Match:{" "}
//                               <strong style={{ color: "#4ade80" }}>
//                                 {r.explanation.totalMatchedSkills} out of{" "}
//                                 {r.explanation.totalJobSkills} required skills
//                               </strong>{" "}
//                               found ({r.explanation.skillMatchPercent}%)
//                             </div>

//                             {/* Matched skills */}
//                             {r.explanation.matchedSkills.length > 0 && (
//                               <div style={{ fontSize: "13px" }}>
//                                 <span
//                                   style={{
//                                     color: "#4ade80",
//                                     fontWeight: "bold",
//                                   }}
//                                 >
//                                   ✅ Skills the candidate HAS:{" "}
//                                 </span>
//                                 <span style={{ color: "#4ade80" }}>
//                                   {r.explanation.matchedSkills.join(", ")}
//                                 </span>
//                               </div>
//                             )}

//                             {/* Missing skills */}
//                             {r.explanation.missingSkills.length > 0 && (
//                               <div style={{ fontSize: "13px" }}>
//                                 <span
//                                   style={{
//                                     color: "#fca5a5",
//                                     fontWeight: "bold",
//                                   }}
//                                 >
//                                   ❌ Skills the candidate is MISSING:{" "}
//                                 </span>
//                                 <span style={{ color: "#fca5a5" }}>
//                                   {r.explanation.missingSkills.join(", ")}
//                                 </span>
//                               </div>
//                             )}

//                             {/* Matched keywords */}
//                             {r.explanation.matchedKeywords.length > 0 && (
//                               <div style={{ fontSize: "13px" }}>
//                                 <span
//                                   style={{
//                                     color: "#93c5fd",
//                                     fontWeight: "bold",
//                                   }}
//                                 >
//                                   🔑 Matched keywords:{" "}
//                                 </span>
//                                 <span style={{ color: "#93c5fd" }}>
//                                   {r.explanation.matchedKeywords.join(", ")}
//                                 </span>
//                               </div>
//                             )}

//                             {/* Score breakdown */}
//                             <div
//                               style={{
//                                 fontSize: "12px",
//                                 color: "#64748b",
//                                 marginTop: "4px",
//                               }}
//                             >
//                               📊 Score = 60% text similarity (TF-IDF cosine) +
//                               40% skill overlap bonus
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BulkUpload;

import React, { useState, useEffect } from "react";
import "../../interview/style/home.scss";
import axios from "axios";
import { useNavigate } from "react-router";

// ✅ Use same axios instance as auth — cookies sent automatically
const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true, // ✅ this sends cookies automatically
});

const BulkUpload = () => {
  const [files, setFiles] = useState([]);
  const [jobDescription, setJobDescription] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedRow, setExpandedRow] = useState(null);
  const [pastReports, setPastReports] = useState([]);
  const [selectedReportId, setSelectedReportId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchPastReports();
  }, []);

  const fetchPastReports = async () => {
    try {
      const res = await api.get("/api/bulk-reports"); // ✅ no token needed
      setPastReports(res.data);
      if (res.data.length > 0) {
        setResults(res.data[0].results);
        setSelectedReportId(res.data[0]._id);
      }
    } catch (err) {
      console.log("Failed to fetch past reports:", err);
    }
  };

  const handleUpload = async () => {
    if (!jobDescription.trim() || files.length === 0) {
      alert("Please add job description and upload resumes");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("jobDescription", jobDescription);
      for (let i = 0; i < files.length; i++) {
        formData.append("resumes", files[i]);
      }

      const res = await api.post("/api/bulk-analyze", formData); // ✅ no token needed
      setResults(res.data.results);
      setSelectedReportId(res.data.reportId);
      setExpandedRow(null);
      fetchPastReports();
    } catch (err) {
      console.log("Frontend error:", err);
      alert("Error analyzing resumes");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectReport = async (reportId) => {
    try {
      const res = await api.get(`/api/bulk-reports/${reportId}`); // ✅ no token needed
      setResults(res.data.results);
      setSelectedReportId(reportId);
      setExpandedRow(null);
    } catch (err) {
      console.log("Failed to load report:", err);
    }
  };

  return (
    <div className="home-page">
      {/* Toggle Buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button className="generate-btn" onClick={() => navigate("/")}>
          Single Resume
        </button>
        <button className="generate-btn" style={{ background: "#6366f1" }}>
          Bulk Resume
        </button>
      </div>

      {/* Main Card */}
      <div className="interview-card">
        <div className="interview-card__body">
          <div className="panel panel--left">
            <h2>Target Job Description</h2>
            <textarea
              className="panel__textarea"
              placeholder="Paste Job Description"
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>

          <div className="panel-divider" />

          <div className="panel panel--right">
            <h2>Upload Multiple Resumes</h2>
            <input
              type="file"
              multiple
              onChange={(e) => setFiles(e.target.files)}
            />
            <br />
            <br />
            <button
              className="generate-btn"
              onClick={handleUpload}
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Analyze Resumes"}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Past Reports History */}
      {pastReports.length > 0 && (
        <div className="interview-card" style={{ marginTop: "20px" }}>
          <div style={{ padding: "20px" }}>
            <h2
              style={{
                color: "#94a3b8",
                marginBottom: "16px",
                fontSize: "16px",
              }}
            >
              📂 My Recent Bulk Analyses
            </h2>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {pastReports.map((report) => (
                <div
                  key={report._id}
                  onClick={() => handleSelectReport(report._id)}
                  style={{
                    background:
                      selectedReportId === report._id ? "#1e40af" : "#1e293b",
                    border: `1px solid ${selectedReportId === report._id ? "#3b82f6" : "#334155"}`,
                    borderRadius: "10px",
                    padding: "12px 16px",
                    cursor: "pointer",
                    minWidth: "200px",
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{
                      color: "#f1f5f9",
                      fontSize: "13px",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    {report.results?.length || 0} resumes analyzed
                  </div>
                  <div
                    style={{
                      color: "#94a3b8",
                      fontSize: "11px",
                      marginBottom: "6px",
                    }}
                  >
                    {new Date(report.createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                  <div
                    style={{
                      color: "#64748b",
                      fontSize: "11px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxWidth: "180px",
                    }}
                  >
                    {report.jobDescription?.slice(0, 60)}...
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results Table */}
      {results.length > 0 && (
        <div className="interview-card" style={{ marginTop: "20px" }}>
          <div style={{ padding: "20px" }}>
            <h2 style={{ color: "#f87171", marginBottom: "16px" }}>
              Ranking Results
            </h2>

            <table
              style={{
                width: "100%",
                marginTop: "10px",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#1e293b",
                    borderBottom: "2px solid #334155",
                  }}
                >
                  {[
                    "Rank",
                    "Resume",
                    "Score",
                    "Skill Gaps",
                    "Why this score?",
                  ].map((heading) => (
                    <th
                      key={heading}
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        color: "#94a3b8",
                        fontWeight: "600",
                        fontSize: "14px",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        border: "1px solid #334155",
                      }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {results.map((r, i) => (
                  <>
                    <tr
                      key={i}
                      style={{
                        backgroundColor: i % 2 === 0 ? "#0f172a" : "#1e293b",
                        borderBottom: "1px solid #334155",
                      }}
                    >
                      <td
                        style={{
                          padding: "12px 16px",
                          fontWeight: "bold",
                          border: "1px solid #334155",
                          color: "#f1f5f9",
                        }}
                      >
                        {r.rank}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          border: "1px solid #334155",
                          color: "#f1f5f9",
                        }}
                      >
                        {r.name}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          fontWeight: "bold",
                          border: "1px solid #334155",
                          color: "#4ade80",
                        }}
                      >
                        {r.matchScore} %
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          border: "1px solid #334155",
                          color:
                            !r.skillGaps.length || r.skillGaps[0] === "None"
                              ? "#4ade80"
                              : "#fca5a5",
                        }}
                      >
                        {r.skillGaps.length > 0
                          ? r.skillGaps.join(", ")
                          : "None"}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          border: "1px solid #334155",
                        }}
                      >
                        <button
                          onClick={() =>
                            setExpandedRow(expandedRow === i ? null : i)
                          }
                          style={{
                            background: "#1e40af",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "6px 12px",
                            cursor: "pointer",
                            fontSize: "12px",
                          }}
                        >
                          {expandedRow === i ? "Hide ▲" : "Explain ▼"}
                        </button>
                      </td>
                    </tr>

                    {expandedRow === i && r.explanation && (
                      <tr key={`explain-${i}`}>
                        <td
                          colSpan={5}
                          style={{
                            padding: "16px 24px",
                            backgroundColor: "#0f172a",
                            border: "1px solid #334155",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "10px",
                            }}
                          >
                            <div
                              style={{
                                color: "#94a3b8",
                                fontWeight: "bold",
                                fontSize: "13px",
                                marginBottom: "4px",
                              }}
                            >
                              🤖 Why did this resume score {r.matchScore}%?
                            </div>
                            <div style={{ color: "#cbd5e1", fontSize: "13px" }}>
                              🎯 Skill Match:{" "}
                              <strong style={{ color: "#4ade80" }}>
                                {r.explanation.totalMatchedSkills} out of{" "}
                                {r.explanation.totalJobSkills} required skills
                              </strong>{" "}
                              found ({r.explanation.skillMatchPercent}%)
                            </div>
                            {r.explanation.matchedSkills?.length > 0 && (
                              <div style={{ fontSize: "13px" }}>
                                <span
                                  style={{
                                    color: "#4ade80",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ✅ Skills the candidate HAS:{" "}
                                </span>
                                <span style={{ color: "#4ade80" }}>
                                  {r.explanation.matchedSkills.join(", ")}
                                </span>
                              </div>
                            )}
                            {r.explanation.missingSkills?.length > 0 && (
                              <div style={{ fontSize: "13px" }}>
                                <span
                                  style={{
                                    color: "#fca5a5",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ❌ Skills the candidate is MISSING:{" "}
                                </span>
                                <span style={{ color: "#fca5a5" }}>
                                  {r.explanation.missingSkills.join(", ")}
                                </span>
                              </div>
                            )}
                            {r.explanation.matchedKeywords?.length > 0 && (
                              <div style={{ fontSize: "13px" }}>
                                <span
                                  style={{
                                    color: "#93c5fd",
                                    fontWeight: "bold",
                                  }}
                                >
                                  🔑 Matched keywords:{" "}
                                </span>
                                <span style={{ color: "#93c5fd" }}>
                                  {r.explanation.matchedKeywords.join(", ")}
                                </span>
                              </div>
                            )}
                            <div
                              style={{
                                fontSize: "12px",
                                color: "#64748b",
                                marginTop: "4px",
                              }}
                            >
                              📊 Score = 60% text similarity (TF-IDF cosine) +
                              40% skill overlap bonus
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default BulkUpload;
