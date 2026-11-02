// const sw = require("stopword");

// const KNOWN_SKILLS = new Set([
//   "python",
//   "javascript",
//   "typescript",
//   "java",
//   "c",
//   "cpp",
//   "csharp",
//   "ruby",
//   "go",
//   "rust",
//   "swift",
//   "kotlin",
//   "php",
//   "scala",
//   "r",
//   "matlab",
//   "bash",
//   "sql",
//   "react",
//   "angular",
//   "vue",
//   "html",
//   "css",
//   "sass",
//   "redux",
//   "nextjs",
//   "tailwind",
//   "nodejs",
//   "express",
//   "django",
//   "flask",
//   "fastapi",
//   "spring",
//   "rails",
//   "graphql",
//   "rest",
//   "api",
//   "microservices",
//   "mongodb",
//   "mysql",
//   "postgresql",
//   "sqlite",
//   "redis",
//   "firebase",
//   "dynamodb",
//   "cassandra",
//   "elasticsearch",
//   "oracle",
//   "aws",
//   "azure",
//   "gcp",
//   "docker",
//   "kubernetes",
//   "terraform",
//   "jenkins",
//   "git",
//   "github",
//   "gitlab",
//   "cicd",
//   "linux",
//   "nginx",
//   "ansible",
//   "tensorflow",
//   "pytorch",
//   "keras",
//   "sklearn",
//   "pandas",
//   "numpy",
//   "matplotlib",
//   "seaborn",
//   "scipy",
//   "nlp",
//   "opencv",
//   "hadoop",
//   "spark",
//   "tableau",
//   "powerbi",
//   "excel",
//   "looker",
//   "airflow",
//   "mlops",
//   "huggingface",
//   "agile",
//   "scrum",
//   "jira",
//   "figma",
//   "xd",
//   "photoshop",
//   "illustrator",
//   "blockchain",
//   "solidity",
//   "cybersecurity",
//   "networking",
//   "testing",
//   "junit",
//   "selenium",
//   "jest",
//   "postman",
//   "swagger",
//   "oauth",
//   "jwt",
//   "snowflake",
//   "dbt",
//   "bigquery",
//   "redshift",
//   "databricks",
//   "sagemaker",
//   "mlflow",
//   "fastapi",
//   "celery",
//   "rabbitmq",
//   "kafka",
//   "grpc",
//   "websocket",
//   "graphql",
//   "prisma",
//   "langchain",
// ]);

// const cleanText = (text) =>
//   text
//     .toLowerCase()
//     .replace(/[^a-z\s]/g, "")
//     .replace(/\s+/g, " ")
//     .trim();

// const preprocess = (text) => {
//   const words = cleanText(text).split(" ").filter(Boolean);
//   return sw.removeStopwords(words);
// };

// const getTermFrequency = (words) => {
//   const tf = {};
//   for (const word of words) {
//     tf[word] = (tf[word] || 0) + 1;
//   }
//   return tf;
// };

// const cosineSimilarity = (tf1, tf2) => {
//   const allTerms = new Set([...Object.keys(tf1), ...Object.keys(tf2)]);
//   let dotProduct = 0,
//     mag1 = 0,
//     mag2 = 0;

//   for (const term of allTerms) {
//     const v1 = tf1[term] || 0;
//     const v2 = tf2[term] || 0;
//     dotProduct += v1 * v2;
//     mag1 += v1 * v1;
//     mag2 += v2 * v2;
//   }

//   if (mag1 === 0 || mag2 === 0) return 0;
//   return dotProduct / (Math.sqrt(mag1) * Math.sqrt(mag2));
// };

// const calculateSimilarity = (resumeText, jobDescription) => {
//   const resumeWords = preprocess(resumeText);
//   const jobWords = preprocess(jobDescription);

//   // ✅ Bonus: boost score if resume contains known skills from job description
//   const jobSkills = jobWords.filter((w) => KNOWN_SKILLS.has(w));
//   const resumeWordSet = new Set(resumeWords);
//   const matchedSkills = jobSkills.filter((w) => resumeWordSet.has(w));

//   const baseSimilarity = cosineSimilarity(
//     getTermFrequency(resumeWords),
//     getTermFrequency(jobWords),
//   );

//   // skill overlap bonus: up to 30 extra points
//   const skillBonus =
//     jobSkills.length > 0 ? (matchedSkills.length / jobSkills.length) * 0.3 : 0;

//   const finalScore = Math.min(
//     Math.round((baseSimilarity + skillBonus) * 100),
//     100,
//   );

//   return finalScore;
// };

// const findSkillGaps = (resumeText, jobDescription) => {
//   const resumeWords = new Set(preprocess(resumeText));
//   const jobWords = preprocess(jobDescription);

//   const gaps = jobWords.filter(
//     (word) => KNOWN_SKILLS.has(word) && !resumeWords.has(word),
//   );

//   return [...new Set(gaps)].slice(0, 10);
// };

// module.exports = {
//   calculateSimilarity,
//   findSkillGaps,
// };
const sw = require("stopword");

const KNOWN_SKILLS = new Set([
  // ── Programming Languages ──
  "python",
  "javascript",
  "typescript",
  "java",
  "c",
  "cpp",
  "csharp",
  "ruby",
  "go",
  "rust",
  "swift",
  "kotlin",
  "php",
  "scala",
  "r",
  "matlab",
  "bash",
  "sql",

  // ── Frontend ──
  "react",
  "angular",
  "vue",
  "html",
  "css",
  "sass",
  "redux",
  "nextjs",
  "tailwind",

  // ── Backend ──
  "nodejs",
  "express",
  "django",
  "flask",
  "fastapi",
  "spring",
  "rails",
  "graphql",
  "rest",
  "api",
  "microservices",

  // ── Databases ──
  "mongodb",
  "mysql",
  "postgresql",
  "sqlite",
  "redis",
  "firebase",
  "dynamodb",
  "cassandra",
  "elasticsearch",
  "oracle",

  // ── Cloud & DevOps ──
  "aws",
  "azure",
  "gcp",
  "docker",
  "kubernetes",
  "terraform",
  "jenkins",
  "git",
  "github",
  "gitlab",
  "cicd",
  "linux",
  "nginx",
  "ansible",

  // ── Data Science & ML ──
  "tensorflow",
  "pytorch",
  "keras",
  "sklearn",
  "pandas",
  "numpy",
  "matplotlib",
  "seaborn",
  "scipy",
  "nlp",
  "opencv",
  "hadoop",
  "spark",
  "airflow",
  "mlops",
  "huggingface",
  "sagemaker",
  "mlflow",
  "databricks",
  "bigquery",
  "redshift",
  "snowflake",
  "dbt",
  "looker",

  // ── Data Visualization ──
  "tableau",
  "powerbi",
  "excel",
  "grafana",

  // ── Messaging & Streaming ──
  "kafka",
  "rabbitmq",
  "celery",
  "grpc",
  "websocket",

  // ── Other Tech ──
  "prisma",
  "langchain",
  "agile",
  "scrum",
  "jira",
  "oauth",
  "jwt",
  "selenium",
  "jest",
  "junit",
  "postman",
  "swagger",
  "blockchain",
  "solidity",
  "cybersecurity",
  "networking",

  // ── Design ──
  "figma",
  "xd",
  "photoshop",
  "illustrator",

  // ── CRM & Sales Tools ──
  "salesforce",
  "hubspot",
  "zoho",
  "pipedrive",
  "freshsales",
  "crm",
  "salesloft",
  "outreach",
  "gong",
  "clari",
  "xactly",

  // ── Sales & Business Skills ──
  "sales",
  "negotiation",
  "forecasting",
  "pipeline",
  "prospecting",
  "leadgeneration",
  "accountmanagement",
  "revenue",
  "kpi",
  "quota",
  "b2b",
  "b2c",
  "saas",
  "businessdevelopment",
  "partnerships",

  // ── Marketing Tools ──
  "googleads",
  "metaads",
  "facebookads",
  "linkedin",
  "mailchimp",
  "hubspotmarketing",
  "marketo",
  "klaviyo",
  "hootsuite",
  "buffer",
  "semrush",
  "ahrefs",
  "moz",
  "googleanalytics",
  "ga4",
  "mixpanel",
  "amplitude",
  "segment",

  // ── Marketing Skills ──
  "seo",
  "sem",
  "ppc",
  "socialmedia",
  "contentmarketing",
  "emailmarketing",
  "copywriting",
  "branding",
  "growth",
  "retention",
  "funnel",
  "conversion",
  "affiliatemarketing",
  "influencermarketing",
  "digitalmarketing",

  // ── Analytics & BI ──
  "analytics",
  "reporting",
  "dashboard",
  "dataanalysis",
  "businessintelligence",
  "metrics",
  "insights",
  "visualization",
  "kpis",

  // ── Automation & Workflow ──
  "zapier",
  "make",
  "integromat",
  "airtable",
  "notion",
  "asana",
  "monday",
  "automation",
  "workflow",
  "integration",

  // ── Communication & Soft Skills ──
  "communication",
  "presentation",
  "leadership",
  "teamwork",
  "problemsolving",
  "criticalthinking",
  "projectmanagement",
  "timemanagement",

  // ── Finance & Operations ──
  "accounting",
  "budgeting",
  "erp",
  "sap",
  "quickbooks",
  "netsuite",
  "operations",
  "procurement",
  "supplychain",
  "logistics",

  // ── HR & Recruitment ──
  "recruiting",
  "hiring",
  "onboarding",
  "hris",
  "workday",
  "bamboohr",
  "talentacquisition",
  // ✅ removed "performance" from here — it's a noise word not a skill
]);

// ✅ Words to never show as skill gaps — too generic/vague
const SKILL_NOISE = new Set([
  "performance",
  "management",
  "development",
  "operations",
  "business",
  "strategy",
  "process",
  "support",
  "solution",
  "service",
  "system",
  "design",
  "analysis",
  "research",
  "implementation",
  "integration",
  "understanding",
  "knowledge",
  "experience",
  "ability",
  "skills",
  "work",
  "working",
  "build",
  "building",
  "create",
  "creating",
  "improve",
  "improving",
  "optimize",
  "strong",
  "good",
  "great",
]);

// ─── Text utilities ────────────────────────────────────────────────────────────

const cleanText = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const preprocess = (text) =>
  sw.removeStopwords(cleanText(text).split(" ").filter(Boolean));

// ─── TF-IDF corpus builder ─────────────────────────────────────────────────────

const buildTfIdfCorpus = (documents) => {
  const tfList = documents.map((doc) => {
    const words = preprocess(doc);
    const tf = {};
    for (const word of words) {
      tf[word] = (tf[word] || 0) + 1;
    }
    const len = words.length || 1;
    for (const word in tf) {
      tf[word] = tf[word] / len;
    }
    return tf;
  });

  const N = documents.length;
  const idf = {};
  const allTerms = new Set(tfList.flatMap((tf) => Object.keys(tf)));

  for (const term of allTerms) {
    const docsWithTerm = tfList.filter((tf) => tf[term] > 0).length;
    idf[term] = Math.log((N + 1) / (docsWithTerm + 1)) + 1;
  }

  const tfidfList = tfList.map((tf) => {
    const tfidf = {};
    for (const term in tf) {
      tfidf[term] = tf[term] * idf[term];
    }
    return tfidf;
  });

  return tfidfList;
};

// ─── Cosine similarity ─────────────────────────────────────────────────────────

const cosineSimilarity = (vec1, vec2) => {
  const allTerms = new Set([...Object.keys(vec1), ...Object.keys(vec2)]);
  let dot = 0,
    mag1 = 0,
    mag2 = 0;

  for (const term of allTerms) {
    const v1 = vec1[term] || 0;
    const v2 = vec2[term] || 0;
    dot += v1 * v2;
    mag1 += v1 * v1;
    mag2 += v2 * v2;
  }

  if (mag1 === 0 || mag2 === 0) return 0;
  return dot / (Math.sqrt(mag1) * Math.sqrt(mag2));
};

// ─── Main exported functions ───────────────────────────────────────────────────

const bulkCalculateSimilarity = (resumeTexts, jobDescription) => {
  const allDocs = [...resumeTexts, jobDescription];
  const tfidfVectors = buildTfIdfCorpus(allDocs);
  const jobVector = tfidfVectors[tfidfVectors.length - 1];

  // Step 1: raw cosine scores
  const rawScores = resumeTexts.map((_, i) =>
    cosineSimilarity(tfidfVectors[i], jobVector),
  );

  // Step 2: skill overlap bonus
  const skillScores = resumeTexts.map((text) => {
    const resumeWords = new Set(preprocess(text));
    const jobWords = preprocess(jobDescription);
    const jobSkills = jobWords.filter(
      (w) => KNOWN_SKILLS.has(w) && !SKILL_NOISE.has(w),
    );
    if (jobSkills.length === 0) return 0;
    const matched = jobSkills.filter((w) => resumeWords.has(w));
    return matched.length / jobSkills.length;
  });

  // Step 3: 60% cosine + 40% skill overlap
  const combined = rawScores.map((cos, i) => cos * 0.6 + skillScores[i] * 0.4);

  // Step 4: normalize so best resume = 95%
  const max = Math.max(...combined);
  if (max === 0) return resumeTexts.map(() => 0);

  return combined.map((score) => Math.round((score / max) * 95));
};

const calculateSimilarity = (resumeText, jobDescription) => {
  const [score] = bulkCalculateSimilarity([resumeText], jobDescription);
  return score;
};

const findSkillGaps = (resumeText, jobDescription) => {
  const resumeWords = new Set(preprocess(resumeText));
  const jobWords = preprocess(jobDescription);

  const gaps = jobWords.filter(
    (word) =>
      KNOWN_SKILLS.has(word) && // ✅ must be a known real skill
      !SKILL_NOISE.has(word) && // ✅ must not be a vague noise word
      !resumeWords.has(word), // ✅ must be missing from resume
  );

  return [...new Set(gaps)].slice(0, 10);
};
// ─── ✅ XAI: Explainable AI function ──────────────────────────────────────────

const explainScore = (resumeText, jobDescription) => {
  const resumeWords = new Set(preprocess(resumeText));
  const jobWords = preprocess(jobDescription);

  // Get all skills required by job
  const jobSkills = [
    ...new Set(
      jobWords.filter((w) => KNOWN_SKILLS.has(w) && !SKILL_NOISE.has(w)),
    ),
  ];

  // Split into matched and missing
  const matchedSkills = jobSkills.filter((w) => resumeWords.has(w));
  const missingSkills = jobSkills.filter((w) => !resumeWords.has(w));

  // Skill match percentage
  const skillMatchPercent =
    jobSkills.length > 0
      ? Math.round((matchedSkills.length / jobSkills.length) * 100)
      : 0;

  // General keywords from JD that also appear in resume (non-skill words)
  const allJobWords = [...new Set(jobWords)].filter(
    (w) => w.length > 3 && !SKILL_NOISE.has(w),
  );
  const matchedKeywords = allJobWords
    .filter((w) => resumeWords.has(w) && !KNOWN_SKILLS.has(w))
    .slice(0, 6);

  // Score contribution breakdown
  const skillContribution = skillMatchPercent * 0.4;
  const textContribution = 60; // cosine handles this part

  return {
    matchedSkills, // ✅ skills resume HAS
    missingSkills: missingSkills.slice(0, 8), // ❌ skills resume is MISSING
    skillMatchPercent, // % of required skills matched
    matchedKeywords, // general keywords matched
    totalJobSkills: jobSkills.length, // total skills job requires
    totalMatchedSkills: matchedSkills.length, // how many resume has
    scoreBreakdown: {
      skillOverlap: `${Math.round(skillContribution)}% from skill matching`,
      textSimilarity: `${Math.round(textContribution)}% from text similarity`,
    },
  };
};
module.exports = {
  calculateSimilarity,
  bulkCalculateSimilarity,
  findSkillGaps,
  explainScore,
};
