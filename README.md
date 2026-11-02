# HireIQ – AI-Powered Resume Analyzer

HireIQ is a web-based application designed to help job seekers and recruiters evaluate how well a resume matches a given job description. It analyzes resume content, calculates match scores, identifies skill gaps, and generates interview questions to support better candidate evaluation and interview preparation.

## Features

- **Resume Analysis:** Upload a resume in PDF format and compare it with a given job description.
- **Match Scoring:** Calculate a resume-to-job-description match score using text similarity techniques.
- **Skill Gap Identification:** Highlight missing skills and keywords that may improve a candidate's suitability for a role.
- **Interview Question Generation:** Generate relevant technical and behavioral interview questions using AI.
- **ATS-Friendly Suggestions:** Provide recommendations to improve resume content for Applicant Tracking Systems.
- **Resume Generation:** Generate an improved, ATS-oriented resume PDF.
- **Bulk Resume Analysis:** Analyze multiple resumes against a single job description and identify the strongest matches.

## Technology Stack

### Frontend
- React
- Vite
- JavaScript
- HTML
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### AI and Resume Processing
- Google Gemini API
- LangChain
- TF-IDF and Cosine Similarity
- Zod
- Multer
- pdf-parse

## How It Works

1. The user uploads a resume in PDF format and enters a job description.
2. The backend extracts text from the uploaded resume.
3. The application compares the resume content with the job description and calculates a match score.
4. HireIQ identifies relevant skills and potential skill gaps.
5. AI-powered features generate technical and behavioral interview questions.
6. The user receives resume-improvement suggestions and can generate an ATS-oriented resume PDF.

For bulk analysis, the application compares multiple resumes against the same job description using text similarity techniques and ranks candidates based on their match scores.

## Project Structure

```text
HireIQ/
├── Backend/
│   ├── src/
│   ├── package.json
│   └── .env.example
├── Frontend/
│   ├── src/
│   ├── package.json
│   └── .gitignore
└── .gitignore
