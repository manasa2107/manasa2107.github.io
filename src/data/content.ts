/** Set `email` when you want a mailto button on the site. */
export const contact = {
  email: "" as string,
  linkedin: "https://www.linkedin.com/in/boyapati-yagna-manasa",
  github: "https://github.com/manasa2107",
  scholar:
    "https://scholar.google.com/citations?hl=en&authuser=3&user=8y3mWR4AAAAJ",
};

export const hero = {
  name: "Yagna Manasa Boyapati",
  roles: ["Full Stack Developer", "AI / ML Engineer", "HCI & Robotics Researcher"],
  tagline:
    "Ph.D. candidate building intelligent systems—from federated multi-LLM inference to caregiver-centered mobile apps—that bridge research and real-world impact.",
};

export const about = [
  "I am pursuing a Ph.D. in Computer Science and Engineering at the University of Cincinnati (Aug 2025 - May 2029, expected), after completing my master's in computer science at University of Minnesota, Duluth (GPA 4.0).",
  "My work spans teaching, research, human-robot interaction, mobile applications, AI/ML, and full-stack engineering. I design AI solutions that combine privacy-preserving methods, federated inference, and heterogeneous large language models to solve real-world problems.",
];

export const education = [
  {
    school: "University of Cincinnati",
    degree: "Ph.D., Computer Science and Engineering",
    period: "Aug 2025 – May 2029 (expected)",
    detail: "Research and teaching in CS/AI; Teaching & Laboratory Assistant for Digital Design.",
  },
  {
    school: "University of Minnesota Duluth",
    degree: "M.S., Computer Science",
    period: "Completed",
    detail: "GPA 4.0. Graduate research across CS, Electrical Engineering, and Civil Engineering; GTA and graduate student mentor.",
  },
];

export const experience = [
  {
    title: "Graduate Research Assistant",
    org: "University of Cincinnati",
    period: "May 2026 - Present",
    bullets: [
      "Advancing applied AI research across privacy-preserving inference, heterogeneous LLM workflows, and real-world evaluation.",
    ],
  },
  {
    title: "Teaching & Laboratory Assistant",
    org: "University of Cincinnati",
    period: "Aug. 2025 - May 2026",
    bullets: [
      "Supporting the Digital Design course with labs, demos, and student mentoring.",
    ],
  },
  {
    title: "Summer Research Intern — Human–Robot Interaction",
    org: "Hope House Adult Day Services",
    period: "June 2025 - Aug. 2025",
    bullets: [
      "Deployed the Pepper social robot for a seven-week user study with individuals living with dementia and learning disabilities.",
      "Collected and analyzed sensor and survey data; observed reduced stress and increased participation among participants.",
    ],
  },
  {
    title: "Graduate Research Assistant",
    org: "University of Minnesota Duluth — multiple departments",
    period: "May 2024 - Aug. 2025",
    bullets: [
      "CS: Built a Flutter/Firebase mobile app for dementia caregivers—stress tracking and personalized relief tools; ran a two-week trial; EDA and modeling with Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn.",
      "EE: Internet of Underground Things for environmental monitoring with AI/ML-based edge acceleration.",
      "Civil Eng.: Route analysis under varying weather using traffic simulation tools.",
    ],
  },
  {
    title: "Graduate Teaching Assistant",
    org: "University of Minnesota Duluth",
    period: "Aug. 2023 - Jan. 2025",
    bullets: [
      "Courses: Linear Systems and Signal Analysis, Digital Systems, Microprocessor Systems.",
    ],
  },
  {
    title: "Java Full Stack Developer Intern",
    org: "Zemoso Technologies",
    period: "Nov. 2022 - May 2023",
    bullets: [
      "Contributed to a job application tracking site and a restaurant ordering portal using HTML, CSS, Bootstrap, Java, JavaScript, TypeScript, React, and PHP.",
    ],
  },
];

export const researchThemes = [
  "Privacy-preserving heterogeneous multi-LLM federated inference for cognitive diagnosis",
  "Dementia caregiver support and cognitive reserve measurement",
  "AI-enabled exoskeletal robotics and robot acceptance in caregiving",
  "Gender differences in emotional responses to stress during problem solving",
];

export const projects = [
  {
    name: "PACR: Secure runtime defense layer for OpenClaw AI agents",
    description:
      "Ongoing research project securing OpenClaw against prompt injection and unsafe tool execution. Built a PACR security module, tested trusted and malicious scenarios, added decision logging, and integrated policy checks into the exec approval runtime path to block risky commands before execution.",
    tech: [
      "TypeScript",
      "Python",
      "Node.js",
      "pnpm",
      "Linux",
      "Shell scripting",
      "OpenClaw",
      "LLM agents",
      "Prompt injection defense",
      "Runtime security",
      "Policy-based access control",
      "Secure tool execution",
      "Audit logging",
      "Git",
    ],
  },
  {
    name: "Federated multi-LLM cognitive diagnosis",
    description:
      "Multi-agent framework where multiple large language models collaborate on cognitive diagnosis without sharing raw patient data—privacy-preserving heterogeneous federated inference.",
    tech: ["Python", "LLMs", "Federated learning", "Multi-agent systems"],
  },
  {
    name: "AI healthcare chatbot",
    description:
      "LLaMA-2 based assistant with LoRA fine-tuning, PEFT, and 4-bit quantization; built with PyTorch and Streamlit for interactive demos.",
    tech: ["PyTorch", "LoRA", "PEFT", "Quantization", "Streamlit", "LLaMA-2"],
  },
  {
    name: "Dementia caregiver mobile app",
    description:
      "End-to-end mobile experience for stress tracking and personalized relief, from Figma design through Firebase-backed Flutter implementation and trial logistics.",
    tech: ["Flutter", "Firebase", "Figma", "Android Studio", "Jira"],
  },
  {
    name: "Auto insurance churn prediction",
    description:
      "Comparative ML study across SVM, Random Forest, Logistic Regression, and Decision Trees to surface drivers of customer churn.",
    tech: ["Scikit-learn", "Python", "Classification", "EDA"],
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["C", "C++", "Java", "Python", "R", "SQL", "HTML", "CSS", "Bootstrap", "JavaScript", "TypeScript", "PHP", "Flutter"],
  },
  {
    label: "Frameworks & Design",
    items: [
      "React",
      "Node.js",
      "Flask",
      "Django",
      "J2EE",
      "Agile and Scrum",
      "UI Design",
      "UX Design",
      "Wireframing",
      "Prototyping",
      "Apache Hadoop",
      "Apache Spark",
    ],
  },
  {
    label: "AI / ML Tools",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Vertex AI",
      "LLM",
      "Claude",
      "Prompt Engineering",
      "RAG",
      "MCP",
      "Generative AI APIs",
      "LoRA Fine-Tuning",
      "Differential Privacy",
      "LLM Agents",
    ],
  },
  {
    label: "Agent Security",
    items: [
      "OpenClaw",
      "Prompt Injection Defense",
      "Runtime Security",
      "Policy-Based Access Control",
      "Secure Tool Execution",
      "Audit Logging",
    ],
  },
  {
    label: "Developer Tools",
    items: [
      "Git",
      "pnpm",
      "VS Code",
      "Visual Studio",
      "PyCharm",
      "IntelliJ",
      "Eclipse",
      "Jupyter Notebook",
      "Keil uVision",
      "Android Studio",
      "Figma",
      "Jira",
      "GitHub Copilot",
      "Claude Code",
      "OpenAI Codex",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Google Cloud Platform", "Docker", "Kubernetes", "Linux", "Shell scripting", "Routers", "VPNs", "Servers", "Switches", "Virtualization"],
  },
  {
    label: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
];

export const certifications = [
  "Human subjects research",
  "Research ethics",
  "Reproducibility of research",
  "C / C++ / Java / Python coursework certifications",
  "Cisco Python Essentials",
  "Sensors and Internet of Things",
];

export const leadership =
  "Graduate Student Representative, International Club — University of Minnesota Duluth.";
