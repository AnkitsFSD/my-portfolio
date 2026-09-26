// ============================================================
// DATA.JS – Portfolio Content for Ankit Singh
// ============================================================

const PORTFOLIO_DATA = {
  personal: {
    name: "Ankit Singh",
    tagline: ["Front-End Developer", "MERN Stack Developer", "AI Workflow Automator", "Platform QA"],
    bio: `I'm a B.Tech CSE graduate and Full-Stack Developer focusing on the MERN stack and intelligent automation. Whether it's crafting responsive front-end modules or designing n8n pipelines to automate repetitive tasks, I love building scalable systems that just work.`,
    bioExtended: `Currently, I work as a Front-End Developer & Platform QA at Skill Bloomer, where I ensure platform stability and build AI-driven operational workflows. I thrive in startup environments where I can act as a continuous learner, combining technical problem-solving with workflow automation to drive real business efficiency.`,
    location: "Gurugram, India",
    email: "mrankitsingh4@gmail.com",
    phone: "+91-9693198670",
    available: true,
    avatar: "./asset/ankit_profile.png", // Add your avatar image path here
    resumeUrl: "./asset/Ankit_Resume.pdf", // Add your PDF resume link here
    stats: [
      { label: "Bugs Triaged", value: "100+" },
      { label: "AI Workflows", value: "Custom" },
      { label: "Core Focus", value: "MERN Stack" },
      { label: "Degree", value: "B.Tech CSE" },
    ],
    socials: [
      { name: "GitHub",   icon: "fab fa-github",   url: "https://github.com/AnkitsFSD" }, // Update with your link
      { name: "LinkedIn", icon: "fab fa-linkedin",  url: "https://www.linkedin.com/in/ankitsingh-dev/" }, // Update with your link
      { name: "Email",    icon: "fas fa-envelope",  url: "mailto:mrankitsingh4@gmail.com" },
    ],
  },

  skills: {
    categories: [
      {
        name: "Frontend Development",
        icon: "fas fa-laptop-code",
        color: "#6366f1",
        items: [
          { name: "React.js",         level: 90 },
          { name: "JavaScript (ES6+)",level: 85 },
          { name: "HTML5 / CSS3",     level: 95 },
          { name: "Tailwind CSS",     level: 88 },
          { name: "Responsive UI",    level: 90 },
        ],
      },
      {
        name: "Backend & Database",
        icon: "fas fa-server",
        color: "#10b981",
        items: [
          { name: "Node.js",          level: 82 },
          { name: "Express.js",       level: 80 },
          { name: "MongoDB",          level: 78 },
          { name: "MySQL",            level: 75 },
          { name: "REST APIs",        level: 85 },
        ],
      },
      {
        name: "Automation & QA",
        icon: "fas fa-robot",
        color: "#f59e0b",
        items: [
          { name: "n8n Workflows",    level: 85 },
          { name: "AI Agents",        level: 80 },
          { name: "Webhooks",         level: 88 },
          { name: "Platform QA",      level: 90 },
          { name: "Bug Triaging",     level: 85 },
        ],
      },
    ],
    technologies: [
      "React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "JavaScript",
      "n8n", "AI Agents", "Webhooks", "HTML5", "CSS3", "Tailwind CSS",
      "Git", "GitHub", "REST APIs", "QA Testing"
    ],
  },

  projects: [
    {
      id: 1,
      title: "LinkedIn Auto Comment Bot",
      description: "An AI-powered automation workflow that extracts LinkedIn post content and generates highly context-aware comments, automating end-to-end engagement while maintaining authenticity.",
      tags: ["n8n", "AI Agents", "Webhooks", "Automation"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
      github: "#",
      live: "#",
      featured: true,
      category: "AI & Automation",
    },
    {
      id: 2,
      title: "Employee Management System",
      description: "A comprehensive CRUD-based system to manage employee records, secure authentication, and track attendance using structured relational database operations.",
      tags: ["JavaScript", "Java", "MySQL", "Backend"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      github: "#",
      live: "#",
      featured: true,
      category: "Full-Stack",
    },
    {
      id: 3,
      title: "Responsive HTML Email Templates",
      description: "Custom, fully responsive HTML email templates designed for high deliverability across cross-client platforms (Gmail, Outlook) with dynamic data placeholders for automated delivery.",
      tags: ["HTML", "CSS", "Inline Styling", "Email Dev"],
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
      github: "#",
      live: "#",
      featured: false,
      category: "Frontend",
    }
  ],

  experience: [
    {
      id: 1,
      role: "Front-End Developer & Platform QA",
      company: "Skill Bloomer",
      period: "June 2025 – Present",
      description: "Building scalable front-end MERN modules and ensuring platform stability. Designed AI-driven automation workflows using n8n to streamline operations.",
      achievements: [
        "Identified & triaged 100+ critical LMS bugs",
        "Audited WebRTC live-session streams",
        "Automated event metadata with n8n & AI"
      ],
      tech: ["React.js", "n8n", "QA Testing", "WebRTC"],
      type: "work",
    },
    {
      id: 2,
      role: "B.Tech in Computer Science Engineering",
      company: "Institute of Technology and Management",
      period: "Graduated 2024",
      description: "Completed undergraduate degree with a 70% score, focusing on software engineering fundamentals, algorithms, and practical web development.",
      achievements: ["70% Aggregate Score", "Core CSE Curriculum"],
      tech: [],
      type: "education",
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Placeholder Contact",
      role: "Project Manager",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manager&backgroundColor=c0aede",
      quote: "Ankit is a highly adaptive learner who seamlessly bridges the gap between front-end development and backend automation. His QA audits saved us countless hours.",
    }
    
    // You can remove or add real testimonials later
  ],
  
};