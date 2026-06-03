export const personalInfo = {
  name: "Prateek Sagar",
  title: "AI/ML Engineer",
  subtitle: "GenAI & Agentic AI Practitioner",
  tagline: "Focused on GenAI, Agentic AI, RAG Systems, Recommender Systems, Protein Language Modeling, and Power BI & Data Analytics.",
  email: "itsprateeksr@gmail.com",
  github: "https://github.com/PrateekSagarIND",
  linkedin: "https://www.linkedin.com/in/prateek-sagar-b9841417b",
  profileImg: "/profile.jpg",
  about: "I am an M.Tech CSE student at IIIT Delhi specializing in AI/ML, Generative AI, Agentic AI, Retrieval-Augmented Generation, Recommender Systems, Protein Language Models, and Power BI & Data Analytics. I enjoy building practical AI systems, research-driven ML pipelines, and intelligent applications that solve real-world problems."
};

export const skillCategories = [
  {
    category: "Core AI/ML & Deep Learning",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "OpenCV", level: 75 }
    ]
  },
  {
    category: "Generative AI & Agents",
    skills: [
      { name: "LLMs and RAG", level: 85 },
      { name: "Agentic AI", level: 80 },
      { name: "LangChain and LangGraph", level: 75 }
    ]
  },
  {
    category: "Languages & Tools",
    skills: [
      { name: "Python", level: 90 },
      { name: "FastAPI", level: 75 },
      { name: "SQL", level: 80 },
      { name: "Git and GitHub", level: 85 },
      { name: "Power BI & Data Analytics", level: 80 }
    ]
  }
];

export const experience = [
  {
    role: "Research Intern",
    company: "Microbiome Informatics Lab, IIIT Delhi",
    duration: "Jan 2025 - Present",
    description: "Working on genotoxicity prediction in the human gut microbiome using Transformer-based protein language models, ProtBERT-style embeddings, DIAMOND BLASTp pipelines, and supervised ML/DL evaluation."
  },
  {
    role: "Teaching Assistant",
    company: "IIIT Delhi",
    duration: "July 2024 - May 2026",
    description: "Assisted in teaching and evaluation for technical courses including Computer Networks, Data Structures & Algorithms, and Computer Organization."
  }
];

export const projects = [
  {
    title: "Agentic Code Intelligence using A2A + MCP",
    description: "Built an AI-powered code intelligence system using MCP tools and A2A orchestration for file-level summaries, function-level summaries, dependency graphs, and test generation.",
    tech: ["Python", "FastAPI", "MCP", "A2A", "OpenAI API"],
    github: "https://github.com/PrateekSagarIND"
  },
  {
    title: "YouTube RAG Chatbot",
    description: "Built a retrieval-augmented chatbot that answers questions from YouTube video transcripts using embeddings and vector search.",
    tech: ["Python", "LangChain", "FAISS", "OpenAI Embeddings"],
    github: "https://github.com/PrateekSagarIND"
  },
  {
    title: "Genotoxicity Prediction using Protein Language Models",
    description: "Developed ML/DL pipelines for protein sequence classification using transformer-based embeddings and bioinformatics preprocessing.",
    tech: ["ProtBERT", "PyTorch", "Transformers", "DIAMOND BLASTp"],
    github: "https://github.com/PrateekSagarIND"
  },
  {
    title: "CineMatch – Hybrid Movie Recommendation System",
    description: "Built a hybrid movie recommendation system using MovieLens data, TMDB metadata, collaborative filtering, embedding-based similarity search, and LLM-based re-ranking for personalized movie recommendations.",
    tech: ["Python", "FastAPI", "MovieLens", "TMDB", "SVD", "LLM", "Recommendation System"],
    github: "https://github.com/PrateekSagarIND/Cinematch-Movie-Recommendation-System"
  },
  {
    title: "Single Object Tracking using Computer Vision",
    description: "Built a custom object tracking pipeline using motion compensation, HOG/LBP features, and hybrid regression models.",
    tech: ["OpenCV", "scikit-learn", "HOG", "LBP", "Random Forest"],
    github: "https://github.com/PrateekSagarIND"
  },
  {
    title: "2048 RL Agent / AAIPL Hackathon",
    description: "Worked on reinforcement-learning based LLM/agent systems for game-playing and adversarial MCQ competitions.",
    tech: ["Python", "RL", "GRPO", "Qwen", "LoRA"],
    github: "https://github.com/PrateekSagarIND"
  },
  {
    title: "Power BI Business Analytics Dashboard",
    description: "Built interactive Power BI dashboards for KPI tracking, trend analysis, reporting, and business intelligence. Developed data models, DAX measures, and visual analytics to transform raw data into actionable insights.",
    tech: ["Power BI", "DAX", "Data Modeling", "Data Visualization", "Business Intelligence"],
    github: "https://github.com/PrateekSagarIND/Power_BI"
  }
];

export const certifications = [
  {
    title: "AI A-Z 2026: Agentic AI, Gen AI, Prompt Engineering and RL",
    issuer: "Udemy",
    date: "2026"
  },
  {
    title: "Ethical Hacking Essentials",
    issuer: "EC-Council / Coursera",
    date: "2025"
  },
  {
    title: "GATE CSE 2024 Qualified",
    issuer: "Graduate Aptitude Test in Engineering (Computer Science & IT)",
    date: "2024"
  },
  {
    title: "GATE Data Science & AI 2025 Qualified",
    issuer: "Graduate Aptitude Test in Engineering (Data Science & AI)",
    date: "2025"
  }
];
