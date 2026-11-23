// All portfolio content lives here, so it can be updated without touching the layout.

export const profile = {
  name: "Aman Sharma",
  initials: "AS",
  role: "AI Engineer | Full-Stack Developer",
  location: "Haryana, India",
  email: "amansharma9605@gmail.com",
  github: "https://github.com/aman-sharma-ai",
  linkedin: "https://www.linkedin.com/in/aman-sharma-ai",
  headline: "I build LLM applications and the data pipelines that power them.",
  intro:
    "AI Engineer at Imbibe Technologies with nearly two years of experience delivering Generative AI applications, LLM-powered automation and Python data platforms for enterprise clients including Volvo, Spotify and H&M.",
  focus: "Agentic AI workflows and LLM-based document extraction",
};

export const stats = [
  { value: "~2 yrs", label: "Professional experience" },
  { value: "217 → 89", label: "Metrics standardized by an LLM extraction pipeline" },
  { value: "10", label: "Automated report products per client, per year" },
  { value: "4+", label: "Enterprise clients served" },
];

export const about = [
  "I design and deliver AI products end to end: from MySQL schema design and Flask or FastAPI services to React and Next.js interfaces, with automated testing before every release.",
  "My recent work centers on research agents that read annual reports, extract structured data with confidence scoring, and feed ETL pipelines that generate client-ready PowerPoint and PDF reports automatically.",
];

export const education = {
  degree: "B.Tech in Computer Science (Artificial Intelligence and Data Science)",
  school: "Kurukshetra University",
  period: "2021 – 2025",
  detail: "CGPA 7.98",
};

export type Role = {
  title: string;
  company: string;
  period: string;
  summary: string;
  points?: string[];
  projects?: { name: string; context: string; points: string[]; stack: string[] }[];
};

export const experience: Role[] = [
  {
    title: "AI Engineer (Full-Stack)",
    company: "Imbibe Technologies Private Limited",
    period: "Mar 2026 – Present",
    summary:
      "Building full-stack AI applications with Python, Flask, FastAPI and MySQL, with React, Next.js and Razor front ends. Embedding schema validation, data-quality and regression checks into automation pipelines, and applying agentic AI workflows to repetitive validation and documentation tasks.",
    projects: [
      {
        name: "Remuneration Benchmarking Platform",
        context: "Nordic board and CEO remuneration",
        points: [
          "Two Generative AI research agents (OpenAI API, PyMuPDF) that locate annual reports and extract remuneration data concurrently, with token-cost tracking, retries and logging.",
          "ETL into MySQL with full data provenance, consolidating 217 raw metric names into 89 standard metrics and routing records below 70% confidence to human review.",
          "Four PowerPoint and PDF report products generated from a single data model in one run.",
        ],
        stack: ["Python", "Flask", "OpenAI API", "PyMuPDF", "MySQL", "python-pptx"],
      },
      {
        name: "IRNM: Investor Relations Benchmarking",
        context: "Client portal and reporting",
        points: [
          "Client portal with secure per-company access, multi-year score trends, benchmarking dashboards, gap analysis and PDF export.",
          "Nine-step ETL pipeline producing sector averages and global, Nordic and country rankings as background jobs.",
          "Ten PowerPoint report products per company per year, enriched with sentiment analysis and a fine-tuned T5 summarizer.",
        ],
        stack: ["Python", "Flask", "Hugging Face T5", "NLP", "Pandas", "MySQL"],
      },
      {
        name: "Search Rank-Tracking Platform",
        context: "Web automation",
        points: [
          "Next.js and FastAPI platform with Selenium automation that tracks weekly, monthly and quarterly search rankings with no manual intervention.",
          "Scaled across distributed Celery and Redis workers, with reusable modules for navigation, retries and HTML parsing.",
        ],
        stack: ["Next.js", "FastAPI", "Selenium", "Celery", "Redis", "MySQL"],
      },
    ],
  },
  {
    title: "Data Analyst (Python)",
    company: "Isoftra Digital Private Limited",
    period: "Feb 2025 – Mar 2026",
    summary:
      "Automated data collection, validation and reporting workflows with Python and SQL, and worked with engineering teams on testing and root-cause analysis.",
    points: [
      "Reduced reporting turnaround time by 12% and improved data quality.",
      "Increased operational productivity by 14% by replacing manual processes with Python automation.",
      "Led functional and regression testing of reporting outputs and drove root-cause analysis with engineering.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  highlight: string;
  stack: string[];
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Agentic RAG Chatbot",
    description:
      "Ask questions across PDF, DOCX, PPTX, CSV, TXT and Markdown files. Ingestion, retrieval and response agents exchange structured messages; FAISS with MiniLM embeddings retrieves context, Llama 3 on Groq answers, and the Streamlit interface shows the source passages behind every reply.",
    highlight: "Multi-agent retrieval-augmented generation",
    stack: ["Python", "Streamlit", "FAISS", "Sentence-Transformers", "Groq"],
    href: "https://github.com/aman-sharma-ai/Agentic_RAG_chatbot",
    featured: true,
  },
  {
    name: "Student Performance Prediction",
    description:
      "End-to-end study comparing nine regression models to predict mathematics scores, plus a real-time driver drowsiness detector built on facial landmarks.",
    highlight: "Best model: Ridge, R² 0.88",
    stack: ["Scikit-learn", "XGBoost", "CatBoost", "OpenCV", "dlib"],
    href: "https://github.com/aman-sharma-ai/MLproject",
  },
  {
    name: "Power BI Dashboards",
    description:
      "Ten interactive business intelligence reports covering retail and sales performance, Zomato, HR analytics, COVID-19, the Olympics and web analytics.",
    highlight: "10 interactive reports",
    stack: ["Power BI", "Power Query", "DAX"],
    href: "https://github.com/aman-sharma-ai/Reports-PowerBI",
  },
  {
    name: "Exploratory Data Analysis",
    description:
      "Feature engineering on more than 550,000 Black Friday retail transactions, and an analysis of Zomato restaurant ratings and delivery availability across countries.",
    highlight: "550,000+ transactions analyzed",
    stack: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    href: "https://github.com/aman-sharma-ai/EDA",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "AI and Machine Learning",
    items: ["Generative AI", "LLMs", "OpenAI API", "LangChain", "RAG", "Prompt engineering", "NLP", "Hugging Face", "T5 fine-tuning", "Scikit-learn"],
  },
  {
    group: "Backend",
    items: ["Python", "Flask", "FastAPI", "REST APIs", "Celery", "Redis", "Docker", "Background jobs"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "JavaScript", "Razor", "HTML", "CSS"],
  },
  {
    group: "Data Engineering",
    items: ["ETL pipelines", "Data modeling", "Data validation", "MySQL", "Pandas", "NumPy", "Web scraping", "PyMuPDF"],
  },
  {
    group: "Testing and Tooling",
    items: ["Selenium", "API testing", "Postman", "JSON Schema", "Regression testing", "Git", "Power BI", "Agile"],
  },
];
