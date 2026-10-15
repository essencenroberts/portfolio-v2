export const PROFILE = {
  name: "Essence Roberts",
  role: "Full Stack Developer",
  location: "Atlanta, GA",
  phone: "(314) 527-1385",
  email: "essencenroberts@gmail.com",
  linkedin: "https://linkedin.com/in/essencenroberts",
  github: "https://github.com/essencenroberts",
  summary:
    "I spent five years in digital marketing, running content startegy, social media, and campaigns for brands and clients. The whole time, I kept wanting to build the tolls instead of just using them. So I did. I taught myself JavaScript and React, built a time-tracking-app for a marketing lient, and then graduated from Per Schola's AI-Native Full Stack Development progam. Today I build full stack apps with React, TypeScript, Node.js, Express and MongoDBm from planning the data to deploying the app. My marketing background is uniqie selling proposition. Before I write code, I ask who's using it and what they need, because I've spent years being the person trying to reahc them. I;m looking for a frontend or full stack role on a team that craes about the people using what it builds.",
};

export const SKILL_GROUPS = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Swift (in progress)"],
  },
  {
    label: "Web Development",
    skills: ["HTML5", "CSS3", "React", "Node.js"],
  },
  {
    label: "Frameworks & Patterns",
    skills: ["API Design", "Design Patterns", "Tailwind CSS", "Bootstrap CSS", "Flutter (in progress)"],
  },
  {
    label: "Databases",
    skills: ["MongoDB (NoSQL)", "Database Design & Optimization"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["Netlify", "Render", "GitHub Actions"],
  },
  {
    label: "Testing & Quality",
    skills: ["Unit Testing", "Integration Testing", "Test Automation", "Code Reviews", "Code Refactoring"],
  },
  {
    label: "Agile & Version Control",
    skills: ["Git", "Scrum", "User Stories", "Sprint Planning"],
  },
  {
    label: "Security",
    skills: ["OWASP Top Ten", "Secure Coding Practices", "Encryption"],
  },
  {
    label: "Algorithms & Data Structures",
    skills: ["Algorithm Design", "Data Structure Implementation", "Big-O Notation"],
  },
  {
    label: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn"],
  },
  {
    label: "AI & Automation",
    skills: ["ChatGPT", "Claude", "Microsoft Copilot", "Prompt Engineering"],
  },
];

export const EXPERIENCE = [
  {
    title: "Content Strategist",
    company: "Georgia Plastic & Reconstructive Surgery",
    location: "Marietta, GA",
    period: "09/2024 – 01/2025",
    bullets: [
      "Launched and managed Facebook/Meta ad campaigns, leveraging audience targeting, A/B testing, and performance analysis to attract new patients and increase consultations.",
      "Developed and executed content marketing campaigns across social media, email, and paid search that drove a 25% increase in brand awareness, client acquisition, and engagement.",
    ],
  },
  {
    title: "Digital Marketing Manager",
    company: "Dr. Shell's Soul Food Kitchen",
    location: "Atlanta, GA",
    period: "05/2020 – 05/2026",
    bullets: [
      "Built a custom clock-in web app for internal business operations, owning the full development lifecycle from requirements to deployment on Netlify using React, reducing clock-in time by 50%.",
      "Designed and launched a lead-generating business website on Wix, optimizing SEO and managing web content monthly to drive a 30% month-over-month increase in website traffic and revenue.",
      "Managed end-to-end digital campaigns, growing Instagram following from 5K to 29.5K in 6 months and boosting engagement by 300% through trend-based content and community engagement.",
    ],
  },
  {
    title: "Social Media Strategist",
    company: "Diamond Diaspora Media Group",
    location: "Atlanta, GA",
    period: "05/2023 – 11/2023",
    bullets: [
      "Developed a cross-platform strategy that drove traffic from social media to the website, reengaging an existing audience of 45K+ on Instagram and 1M+ on Facebook while growing Instagram audience to 80K+ in three months.",
      "Supervised and managed a team of Social Media Reporters, ensuring effective content creation and strategic implementation of campaigns.",
      "Coordinated with cross-functional editorial, marketing, and design teams, using analytics tools to track key metrics and make data-driven optimization decisions.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "30Days: Content Challenge Planner",
    period: "10/2026",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "TailwindCSS", "JWT"],
    image: "thirtyday-app.png",
    liveUrl: "https://thirtyday.onrender.com",
    repoUrl: "https://github.com/essencenroberts/30days-backend",
    backendRepoUrl: "https://github.com/essencenroberts/30days-backend",
    bullets: ["Built a full stack app that helps content creators plan and finish 30-day posting challenges, with a post planned for every day.", "Shows each challenge three ways (calendar grid, list, and status board), with live progress bars and posting streaks."],
  },
  {
    title: "Full Stack Notes Application",
    period: "04/2026",
    tags: ["MERN", "MongoDB", "REST API"],
    image: "notes-app.png",
    liveUrl: "https://notesapp2026.netlify.app/",
    repoUrl: "https://github.com/essencenroberts/notesapp/",
    bullets: [
      "Built a full-stack MERN application with separate frontend and backend repositories, implementing full CRUD functionality with a MongoDB database.",
      "Designed RESTful API endpoints and connected them to a React frontend, managing state and data flow across the application.",
    ],
  },
  {
    title: "Client Time-Tracking Web App",
    period: "02/2026",
    tags: ["React", "Client Project", "Netlify"],
    image: "time-tracker-app-image.png",
    liveUrl: "https://time-tracker-demo.netlify.app/",
    repoUrl: "https://github.com/essencenroberts/time-tracker-demo",
    bullets: [
      "Developed a custom React-based time tracking application for a digital marketing client, translating business requirements into a functional tool.",
      "Managed the project independently from requirements gathering through delivery, applying client communication skills built through years of freelance work.",
    ],
  },
];
