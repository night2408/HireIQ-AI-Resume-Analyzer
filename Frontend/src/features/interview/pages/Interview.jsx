// import React from "react";
// import "../style/interview.scss";

// const data = {
//   _id: { $oid: "69c7adf2dda5a12a10ed256b" },
//   matchScore: 88,
//   technicalQuestions: [
//     {
//       question:
//         "How did you manage real-time synchronization in your 'CodingTogether' project, and what challenges did you face with WebSockets?",
//       intention:
//         "To evaluate the candidate's understanding of real-time communication, concurrency, and backend messaging logic.",
//       answer:
//         "The project used Socket.io/WebSockets to create a bidirectional communication channel between the client and server. When a user types, an event is emitted to the server, which broadcasts the change to all other users in the same room. Challenges included handling race conditions where two users edit the same line simultaneously and managing connection/disconnection states to update the user list.",
//     },
//     {
//       question:
//         "Explain how you would design a REST API for the 'HR Database Management System' to handle role-based access control (RBAC).",
//       intention:
//         "To assess knowledge of backend security, middleware, and database schema design.",
//       answer:
//         "I would implement middleware in Express.js that checks the user's JWT token for a 'role' property. Based on this role (e.g., Admin, Manager, Employee), the middleware would allow or deny access to specific routes. In the MySQL database, I would maintain a 'roles' table and a 'user_roles' mapping table to define permissions for each endpoint.",
//     },
//   ],
//   behavioralQuestions: [
//     {
//       question:
//         "Describe a time during your internship at Oizom Instruments when you had to debug a complex UI issue. How did you resolve it?",
//       intention:
//         "To gauge problem-solving skills and the ability to work under professional project constraints.",
//       answer:
//         "While building the live AQI dashboard, I encountered an issue where map markers wouldn't update correctly when filters were applied. I used React DevTools to trace the state flow and realized the API data was being cached improperly. I refactored the useEffect hooks to properly depend on the filter state and added a loading skeleton to improve user experience during data fetching.",
//     },
//   ],
//   skillGaps: [
//     { skill: "Docker & Containerization", severity: "medium" },
//     { skill: "AWS Deployment (EC2/S3)", severity: "high" },
//     { skill: "System Design Patterns", severity: "medium" },
//   ],
//   preparationPlan: [
//     {
//       day: 1,
//       focus: "Backend Deep Dive",
//       tasks: [
//         "Review Express.js middleware patterns",
//         "Practice building custom error handling and validation using Joi/Zod",
//       ],
//     },
//     {
//       day: 2,
//       focus: "Advanced React & State",
//       tasks: [
//         "Study React Context API vs Redux for global state",
//         "Optimize rendering using useMemo and useCallback",
//       ],
//     },
//     {
//       day: 3,
//       focus: "Database Optimization",
//       tasks: [
//         "Practice MongoDB indexing and aggregation pipelines",
//         "Review SQL join types and normalization for the HR system project",
//       ],
//     },
//   ],
// };

// const TechnicalQuestionCard = ({ index, question, intention, answer }) => {
//   const [expanded, setExpanded] = React.useState(index === 0);

//   return (
//     <div className={`qa-card ${expanded ? "expanded" : ""}`}>
//       <button className="qa-header" onClick={() => setExpanded((v) => !v)}>
//         <span className="qa-tag">Q{index + 1}</span>
//         <span className="qa-question-title">{question}</span>
//         <span className="qa-icon">{expanded ? "-" : "+"}</span>
//       </button>
//       {expanded && (
//         <div className="qa-body">
//           <p className="qa-label">INTENTION</p>
//           <p className="qa-intention">{intention}</p>
//           <p className="qa-label model">MODEL ANSWER</p>
//           <p className="qa-answer">{answer}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const Interview = () => {
//   const [activeSection, setActiveSection] = React.useState("roadmap");

//   const sections = [
//     { id: "technical", label: "Technical Questions" },
//     { id: "behavioral", label: "Behavioral Questions" },
//     { id: "roadmap", label: "Road Map" },
//   ];

//   return (
//     <main className="interview">
//       <div className="interview-layout">
//         <aside className="sidebar">
//           <div className="sidebar-title">SECTIONS</div>
//           <nav>
//             {sections.map((s) => (
//               <button
//                 key={s.id}
//                 className={activeSection === s.id ? "active" : ""}
//                 onClick={() => setActiveSection(s.id)}
//               >
//                 {s.label}
//               </button>
//             ))}
//           </nav>
//         </aside>

//         <section className="main-content">
//           <div className="main-title">
//             {activeSection === "technical"
//               ? "Technical Questions"
//               : activeSection === "behavioral"
//                 ? "Behavioral Questions"
//                 : "Preparation Road Map"}
//           </div>
//           <div className="main-subtitle">
//             {activeSection === "roadmap" ? "7-day plan" : ""}
//           </div>

//           {activeSection === "technical" && (
//             <div className="content-list">
//               {data.technicalQuestions.map((q, idx) => (
//                 <TechnicalQuestionCard
//                   key={idx}
//                   index={idx}
//                   question={q.question}
//                   intention={q.intention}
//                   answer={q.answer}
//                 />
//               ))}
//             </div>
//           )}

//           {activeSection === "behavioral" && (
//             <div className="content-list">
//               {data.behavioralQuestions.map((q, idx) => (
//                 <TechnicalQuestionCard
//                   key={idx}
//                   index={idx}
//                   question={q.question}
//                   intention={q.intention}
//                   answer={q.answer}
//                 />
//               ))}
//             </div>
//           )}

//           {activeSection === "roadmap" && (
//             <div className="roadmap-timeline">
//               {data.preparationPlan.map((step) => (
//                 <div key={step.day} className="timeline-item">
//                   <div className="timeline-marker">{step.day}</div>
//                   <div className="timeline-content">
//                     <h4>{step.focus}</h4>
//                     <ul>
//                       {step.tasks.map((task, idx) => (
//                         <li key={idx}>{task}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>

//         <aside className="right-panel">
//           <div className="score-card">
//             <div className="score-header">MATCH SCORE</div>
//             <div className="score-circle">{data.matchScore}%</div>
//             <div className="score-note">Strong match for this role</div>
//           </div>

//           <div className="skills-card">
//             <div className="skills-title">Skill Gaps</div>
//             <div className="skill-list">
//               {data.skillGaps.map((skill, idx) => (
//                 <div key={idx} className={`skill-chip ${skill.severity}`}>
//                   {skill.skill}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </aside>
//       </div>
//     </main>
//   );
// };

// export default Interview;

//----------------------------prev new code----------------------------
// import React, { useState, useEffect } from "react";
// import "../style/interview.scss";
// import { useInterview } from "../hooks/useinterview.js";
// import { useNavigate, useParams } from "react-router";

// const NAV_ITEMS = [
//   {
//     id: "technical",
//     label: "Technical Questions",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="16"
//         height="16"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <polyline points="16 18 22 12 16 6" />
//         <polyline points="8 6 2 12 8 18" />
//       </svg>
//     ),
//   },
//   {
//     id: "behavioral",
//     label: "Behavioral Questions",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="16"
//         height="16"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//       </svg>
//     ),
//   },
//   {
//     id: "roadmap",
//     label: "Road Map",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="16"
//         height="16"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <polygon points="3 11 22 2 13 21 11 13 3 11" />
//       </svg>
//     ),
//   },
// ];

// // ── Sub-components ────────────────────────────────────────────────────────────
// const QuestionCard = ({ item, index }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="q-card">
//       <div className="q-card__header" onClick={() => setOpen((o) => !o)}>
//         <span className="q-card__index">Q{index + 1}</span>
//         <p className="q-card__question">{item.question}</p>
//         <span
//           className={`q-card__chevron ${open ? "q-card__chevron--open" : ""}`}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <polyline points="6 9 12 15 18 9" />
//           </svg>
//         </span>
//       </div>
//       {open && (
//         <div className="q-card__body">
//           <div className="q-card__section">
//             <span className="q-card__tag q-card__tag--intention">
//               Intention
//             </span>
//             <p>{item.intention}</p>
//           </div>
//           <div className="q-card__section">
//             <span className="q-card__tag q-card__tag--answer">
//               Model Answer
//             </span>
//             <p>{item.answer}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const RoadMapDay = ({ day }) => (
//   <div className="roadmap-day">
//     <div className="roadmap-day__header">
//       <span className="roadmap-day__badge">Day {day.day}</span>
//       <h3 className="roadmap-day__focus">{day.focus}</h3>
//     </div>
//     <ul className="roadmap-day__tasks">
//       {day.tasks.map((task, i) => (
//         <li key={i}>
//           <span className="roadmap-day__bullet" />
//           {task}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// // ── Main Component ────────────────────────────────────────────────────────────
// const Interview = () => {
//   const [activeNav, setActiveNav] = useState("technical");
//   const { report, getReportById, loading, getResumePdf } = useInterview();
//   const { interviewId } = useParams();

//   useEffect(() => {
//     if (interviewId) {
//       getReportById(interviewId);
//     }
//   }, [interviewId]);

//   if (loading || !report) {
//     return (
//       <main className="loading-screen">
//         <h1>Loading your interview plan...</h1>
//       </main>
//     );
//   }

//   const scoreColor =
//     report.matchScore >= 80
//       ? "score--high"
//       : report.matchScore >= 60
//         ? "score--mid"
//         : "score--low";

//   return (
//     <div className="interview-page">
//       <div className="interview-layout">
//         {/* ── Left Nav ── */}
//         <nav className="interview-nav">
//           <div className="nav-content">
//             <p className="interview-nav__label">Sections</p>
//             {NAV_ITEMS.map((item) => (
//               <button
//                 key={item.id}
//                 className={`interview-nav__item ${activeNav === item.id ? "interview-nav__item--active" : ""}`}
//                 onClick={() => setActiveNav(item.id)}
//               >
//                 <span className="interview-nav__icon">{item.icon}</span>
//                 {item.label}
//               </button>
//             ))}
//           </div>
//           <button
//             onClick={() => {
//               getResumePdf(interviewId);
//             }}
//             className="button primary-button"
//           >
//             <svg
//               height={"0.8rem"}
//               style={{ marginRight: "0.8rem" }}
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path d="M10.6144 17.7956 11.492 15.7854C12.2731 13.9966 13.6789 12.5726 15.4325 11.7942L17.8482 10.7219C18.6162 10.381 18.6162 9.26368 17.8482 8.92277L15.5079 7.88394C13.7092 7.08552 12.2782 5.60881 11.5105 3.75894L10.6215 1.61673C10.2916.821765 9.19319.821767 8.8633 1.61673L7.97427 3.75892C7.20657 5.60881 5.77553 7.08552 3.97685 7.88394L1.63658 8.92277C.868537 9.26368.868536 10.381 1.63658 10.7219L4.0523 11.7942C5.80589 12.5726 7.21171 13.9966 7.99275 15.7854L8.8704 17.7956C9.20776 18.5682 10.277 18.5682 10.6144 17.7956ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z"></path>
//             </svg>
//             Download Resume
//           </button>
//         </nav>

//         <div className="interview-divider" />

//         {/* ── Center Content ── */}
//         <main className="interview-content">
//           {activeNav === "technical" && (
//             <section>
//               <div className="content-header">
//                 <h2>Technical Questions</h2>
//                 <span className="content-header__count">
//                   {report.technicalQuestions.length} questions
//                 </span>
//               </div>
//               <div className="q-list">
//                 {report.technicalQuestions.map((q, i) => (
//                   <QuestionCard key={i} item={q} index={i} />
//                 ))}
//               </div>
//             </section>
//           )}

//           {activeNav === "behavioral" && (
//             <section>
//               <div className="content-header">
//                 <h2>Behavioral Questions</h2>
//                 <span className="content-header__count">
//                   {report.behavioralQuestions.length} questions
//                 </span>
//               </div>
//               <div className="q-list">
//                 {report.behavioralQuestions.map((q, i) => (
//                   <QuestionCard key={i} item={q} index={i} />
//                 ))}
//               </div>
//             </section>
//           )}

//           {activeNav === "roadmap" && (
//             <section>
//               <div className="content-header">
//                 <h2>Preparation Road Map</h2>
//                 <span className="content-header__count">
//                   {report.preparationPlan.length}-day plan
//                 </span>
//               </div>
//               <div className="roadmap-list">
//                 {report.preparationPlan.map((day) => (
//                   <RoadMapDay key={day.day} day={day} />
//                 ))}
//               </div>
//             </section>
//           )}
//         </main>

//         <div className="interview-divider" />

//         {/* ── Right Sidebar ── */}
//         <aside className="interview-sidebar">
//           {/* Match Score */}
//           <div className="match-score">
//             <p className="match-score__label">Match Score</p>
//             <div className={`match-score__ring ${scoreColor}`}>
//               <span className="match-score__value">{report.matchScore}</span>
//               <span className="match-score__pct">%</span>
//             </div>
//             <p className="match-score__sub">Strong match for this role</p>
//           </div>

//           <div className="sidebar-divider" />

//           {/* Skill Gaps */}
//           <div className="skill-gaps">
//             <p className="skill-gaps__label">Skill Gaps</p>
//             <div className="skill-gaps__list">
//               {report.skillGaps.map((gap, i) => (
//                 <span
//                   key={i}
//                   className={`skill-tag skill-tag--${gap.severity}`}
//                 >
//                   {gap.skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default Interview;

//-----------------------------newcode-xai-----------------------------
import React, { useState, useEffect } from "react";
import "../style/interview.scss";
import { useInterview } from "../hooks/useinterview.js";
import { useNavigate, useParams } from "react-router";

const NAV_ITEMS = [
  {
    id: "technical",
    label: "Technical Questions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "behavioral",
    label: "Behavioral Questions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: "roadmap",
    label: "Road Map",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
  // ✅ XAI nav item
  {
    id: "explanation",
    label: "Why This Score?",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

const QuestionCard = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="q-card">
      <div className="q-card__header" onClick={() => setOpen((o) => !o)}>
        <span className="q-card__index">Q{index + 1}</span>
        <p className="q-card__question">{item.question}</p>
        <span
          className={`q-card__chevron ${open ? "q-card__chevron--open" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>
      {open && (
        <div className="q-card__body">
          <div className="q-card__section">
            <span className="q-card__tag q-card__tag--intention">
              Intention
            </span>
            <p>{item.intention}</p>
          </div>
          <div className="q-card__section">
            <span className="q-card__tag q-card__tag--answer">
              Model Answer
            </span>
            <p>{item.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const RoadMapDay = ({ day }) => (
  <div className="roadmap-day">
    <div className="roadmap-day__header">
      <span className="roadmap-day__badge">Day {day.day}</span>
      <h3 className="roadmap-day__focus">{day.focus}</h3>
    </div>
    <ul className="roadmap-day__tasks">
      {day.tasks.map((task, i) => (
        <li key={i}>
          <span className="roadmap-day__bullet" />
          {task}
        </li>
      ))}
    </ul>
  </div>
);

// ✅ XAI Explanation Component
const ExplanationSection = ({ explanation, matchScore }) => {
  if (!explanation)
    return <p style={{ color: "#94a3b8" }}>No explanation available.</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Why this score */}
      <div
        style={{
          background: "#1e293b",
          borderRadius: "12px",
          padding: "20px",
          borderLeft: "4px solid #6366f1",
        }}
      >
        <h3
          style={{
            color: "#94a3b8",
            fontSize: "12px",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          🤖 Why did you score {matchScore}%?
        </h3>
        <p style={{ color: "#e2e8f0", lineHeight: "1.7" }}>
          {explanation.whyThisScore}
        </p>
      </div>

      {/* Score Breakdown */}
      <div
        style={{ background: "#1e293b", borderRadius: "12px", padding: "20px" }}
      >
        <h3
          style={{
            color: "#94a3b8",
            fontSize: "12px",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          📊 Score Breakdown
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            {
              label: "Technical Fit",
              value: explanation.scoreBreakdown?.technicalFit,
              color: "#4ade80",
            },
            {
              label: "Experience Fit",
              value: explanation.scoreBreakdown?.experienceFit,
              color: "#60a5fa",
            },
            {
              label: "Overall Fit",
              value: explanation.scoreBreakdown?.overallFit,
              color: "#a78bfa",
            },
          ].map((item) => (
            <div key={item.label}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                }}
              >
                <span style={{ color: "#cbd5e1", fontSize: "13px" }}>
                  {item.label}
                </span>
                <span
                  style={{
                    color: item.color,
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  {item.value}%
                </span>
              </div>
              <div
                style={{
                  background: "#0f172a",
                  borderRadius: "99px",
                  height: "8px",
                }}
              >
                <div
                  style={{
                    background: item.color,
                    width: `${item.value}%`,
                    height: "100%",
                    borderRadius: "99px",
                    transition: "width 0.6s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Matched & Missing Skills */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
      >
        {/* Matched Skills */}
        <div
          style={{
            background: "#1e293b",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h3
            style={{
              color: "#4ade80",
              fontSize: "12px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            ✅ Skills You Have
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {explanation.matchedSkills?.map((skill, i) => (
              <span
                key={i}
                style={{
                  background: "#14532d",
                  color: "#4ade80",
                  padding: "4px 10px",
                  borderRadius: "99px",
                  fontSize: "12px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Missing Skills */}
        <div
          style={{
            background: "#1e293b",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h3
            style={{
              color: "#fca5a5",
              fontSize: "12px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            ❌ Skills You're Missing
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {explanation.missingSkills?.map((skill, i) => (
              <span
                key={i}
                style={{
                  background: "#7f1d1d",
                  color: "#fca5a5",
                  padding: "4px 10px",
                  borderRadius: "99px",
                  fontSize: "12px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Strong & Weak Points */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
      >
        {/* Strong Points */}
        <div
          style={{
            background: "#1e293b",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h3
            style={{
              color: "#60a5fa",
              fontSize: "12px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            💪 Your Strong Points
          </h3>
          <ul style={{ paddingLeft: "16px", margin: 0 }}>
            {explanation.strongPoints?.map((point, i) => (
              <li
                key={i}
                style={{
                  color: "#cbd5e1",
                  fontSize: "13px",
                  marginBottom: "8px",
                  lineHeight: "1.5",
                }}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Weak Points */}
        <div
          style={{
            background: "#1e293b",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h3
            style={{
              color: "#fbbf24",
              fontSize: "12px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            ⚠️ Areas to Improve
          </h3>
          <ul style={{ paddingLeft: "16px", margin: 0 }}>
            {explanation.weakPoints?.map((point, i) => (
              <li
                key={i}
                style={{
                  color: "#cbd5e1",
                  fontSize: "13px",
                  marginBottom: "8px",
                  lineHeight: "1.5",
                }}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────
const Interview = () => {
  const [activeNav, setActiveNav] = useState("technical");
  const { report, getReportById, loading, getResumePdf } = useInterview();
  const { interviewId } = useParams();

  useEffect(() => {
    if (interviewId) {
      getReportById(interviewId);
    }
  }, [interviewId]);

  if (loading || !report) {
    return (
      <main className="loading-screen">
        <h1>Loading your interview plan...</h1>
      </main>
    );
  }

  const scoreColor =
    report.matchScore >= 80
      ? "score--high"
      : report.matchScore >= 60
        ? "score--mid"
        : "score--low";

  return (
    <div className="interview-page">
      <div className="interview-layout">
        {/* ── Left Nav ── */}
        <nav className="interview-nav">
          <div className="nav-content">
            <p className="interview-nav__label">Sections</p>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`interview-nav__item ${activeNav === item.id ? "interview-nav__item--active" : ""}`}
                onClick={() => setActiveNav(item.id)}
              >
                <span className="interview-nav__icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => getResumePdf(interviewId)}
            className="button primary-button"
          >
            <svg
              height={"0.8rem"}
              style={{ marginRight: "0.8rem" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10.6144 17.7956 11.492 15.7854C12.2731 13.9966 13.6789 12.5726 15.4325 11.7942L17.8482 10.7219C18.6162 10.381 18.6162 9.26368 17.8482 8.92277L15.5079 7.88394C13.7092 7.08552 12.2782 5.60881 11.5105 3.75894L10.6215 1.61673C10.2916.821765 9.19319.821767 8.8633 1.61673L7.97427 3.75892C7.20657 5.60881 5.77553 7.08552 3.97685 7.88394L1.63658 8.92277C.868537 9.26368.868536 10.381 1.63658 10.7219L4.0523 11.7942C5.80589 12.5726 7.21171 13.9966 7.99275 15.7854L8.8704 17.7956C9.20776 18.5682 10.277 18.5682 10.6144 17.7956ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z" />
            </svg>
            Download Resume
          </button>
        </nav>

        <div className="interview-divider" />

        {/* ── Center Content ── */}
        <main className="interview-content">
          {activeNav === "technical" && (
            <section>
              <div className="content-header">
                <h2>Technical Questions</h2>
                <span className="content-header__count">
                  {report.technicalQuestions.length} questions
                </span>
              </div>
              <div className="q-list">
                {report.technicalQuestions.map((q, i) => (
                  <QuestionCard key={i} item={q} index={i} />
                ))}
              </div>
            </section>
          )}

          {activeNav === "behavioral" && (
            <section>
              <div className="content-header">
                <h2>Behavioral Questions</h2>
                <span className="content-header__count">
                  {report.behavioralQuestions.length} questions
                </span>
              </div>
              <div className="q-list">
                {report.behavioralQuestions.map((q, i) => (
                  <QuestionCard key={i} item={q} index={i} />
                ))}
              </div>
            </section>
          )}

          {activeNav === "roadmap" && (
            <section>
              <div className="content-header">
                <h2>Preparation Road Map</h2>
                <span className="content-header__count">
                  {report.preparationPlan.length}-day plan
                </span>
              </div>
              <div className="roadmap-list">
                {report.preparationPlan.map((day) => (
                  <RoadMapDay key={day.day} day={day} />
                ))}
              </div>
            </section>
          )}

          {/* ✅ XAI Section */}
          {activeNav === "explanation" && (
            <section>
              <div className="content-header">
                <h2>Why This Score?</h2>
                <span className="content-header__count">AI Explanation</span>
              </div>
              <ExplanationSection
                explanation={report.explanation}
                matchScore={report.matchScore}
              />
            </section>
          )}
        </main>

        <div className="interview-divider" />

        {/* ── Right Sidebar ── */}
        <aside className="interview-sidebar">
          <div className="match-score">
            <p className="match-score__label">Match Score</p>
            <div className={`match-score__ring ${scoreColor}`}>
              <span className="match-score__value">{report.matchScore}</span>
              <span className="match-score__pct">%</span>
            </div>
            <p className="match-score__sub">
              {report.matchScore >= 80
                ? "Strong match for this role"
                : report.matchScore >= 60
                  ? "Good match for this role"
                  : "Needs improvement for this role"}
            </p>
          </div>

          <div className="sidebar-divider" />

          <div className="skill-gaps">
            <p className="skill-gaps__label">Skill Gaps</p>
            <div className="skill-gaps__list">
              {report.skillGaps.map((gap, i) => (
                <span
                  key={i}
                  className={`skill-tag skill-tag--${gap.severity}`}
                >
                  {gap.skill}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Interview;
