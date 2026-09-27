import { Project, SkillCategory, JourneyMilestone, TransferableCompetency, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Simangele Tutubala',
  title: 'Junior Software Developer',
  badge: 'Girl in Tech · Women Techsters Fellow',
  portraitImage: '/src/assets/images/simangele_developer_portrait_1790544583057.jpg',
  positioningTagline: 'Junior Software Developer | Building practical, user-focused web applications',
  heroHeadline: 'I build responsive, user-focused web applications using modern web technologies, combining software development with a background in Mathematics and Technology education.',
  subHeadline: 'Building practical web applications with React, JavaScript, Python and Node.js.',
  girlInTechMotto: 'Empowering communities through clean code, mathematical logic, and increasing women\'s representation in engineering.',
  email: 'smangelent@gmail.com',
  github: 'https://github.com/simangeletutubala',
  linkedin: 'https://linkedin.com/in/simangele-tutubala',
  location: 'South Africa · Available for Remote & Hybrid Roles',
  availability: 'Actively seeking Junior Software Developer & Frontend Roles',
  aboutParagraphs: [
    "I'm a Junior Software Developer with hands-on experience gained through software development bootcamps, internships, collaborative projects and independent application development.",
    "My background in Mathematics and Technology education has strengthened my analytical thinking, problem-solving and communication skills. I now apply these skills to building practical digital solutions.",
    "I enjoy turning ideas into functional applications and continuously improving my skills through hands-on projects.",
    "As a proud woman in tech, I am passionate about leveraging software to create accessible digital spaces and championing greater female representation in engineering and STEM fields."
  ],
  stats: [
    { label: 'Core Projects Built', value: '3+' },
    { label: 'Tech Stacks Mastered', value: 'React · Node · Python' },
    { label: 'Women in Tech Fellow', value: 'Women Techsters' },
    { label: 'Analytical Foundation', value: 'BEd Math & Technology' }
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Frontend',
    description: 'Creating accessible, responsive, and intuitive interfaces with clean component architectures.',
    skills: [
      { name: 'HTML5', level: 'Semantic Markup & Accessibility', focus: 'Structured layouts, WCAG principles, ARIA semantics' },
      { name: 'CSS3', level: 'Responsive & Modern Layouts', focus: 'Flexbox, Grid, custom animations, Tailwind CSS' },
      { name: 'JavaScript (ES6+)', level: 'Core & Asynchronous Logic', focus: 'DOM manipulation, Promises, async/await, closures' },
      { name: 'React', level: 'Component-Driven Architecture', focus: 'Hooks (useState, useEffect, useMemo), Context API, SPA state' }
    ]
  },
  {
    category: 'Backend',
    description: 'Architecting robust server-side services, RESTful endpoints, and backend logic.',
    skills: [
      { name: 'Node.js', level: 'Runtime & Asynchronous Execution', focus: 'Event loop, file systems, HTTP servers, npm ecosystem' },
      { name: 'Express', level: 'REST API & Routing', focus: 'Middleware, error handling, route controllers, JSON payloads' },
      { name: 'Python', level: 'Scripting & Backend Foundations', focus: 'Data structures, algorithm design, clean modular coding' }
    ]
  },
  {
    category: 'Database',
    description: 'Data modeling, schema design, queries, and persistent application state.',
    skills: [
      { name: 'SQL', level: 'Relational Database Queries', focus: 'CRUD queries, table joins, data integrity, normalization' },
      { name: 'MongoDB', level: 'Document-Based NoSQL Data', focus: 'Mongoose schemas, aggregation, document collections' }
    ]
  },
  {
    category: 'Tools',
    description: 'Modern developer workflow, version control, and productivity tooling.',
    skills: [
      { name: 'Git', level: 'Version Control', focus: 'Branching, commits, merging, stash, resolving conflicts' },
      { name: 'GitHub', level: 'Collaboration & Repositories', focus: 'Pull requests, code reviews, documentation, repository hosting' },
      { name: 'VS Code', level: 'Primary Development Environment', focus: 'Debugging, extensions, linting, productivity setups' }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'mathspark',
    title: 'MathSpark',
    tagline: 'Interactive Grade 4 Mathematics Learning Platform',
    description: 'Interactive Grade 4 mathematics learning platform designed around visual explanations and learner-friendly experiences.',
    longDescription: 'MathSpark bridges the gap between abstract mathematical concepts and young learners by transforming traditional arithmetic exercises into intuitive, visual, and gamified problem-solving modules. Designed with pedagogical empathy from a Mathematics education background, it breaks down complex operations into manageable, engaging steps.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Web Audio API', 'Component State'],
    category: 'EdTech',
    features: [
      'Visual fraction & multiplication representations to make abstract math tangible',
      'Step-by-step interactive problem solver with immediate visual feedback',
      'Child-friendly UX with clear contrast, calming color palette, and micro-rewards',
      'Progress tracking state simulating student mastery levels and streaks'
    ],
    transferableStrengths: [
      'Translating pedagogical principles directly into empathetic software UX',
      'Modular state management for multi-stage problem flows',
      'Accessible UI design tailored specifically to lower-grade cognition'
    ],
    metricsOrOutcome: 'Tested with grade-level math curricula; provides instant visual verification of learner inputs.',
    githubUrl: 'https://github.com/simangeletutubala/mathspark',
    demoType: 'mathspark'
  },
  {
    id: 'freshbite',
    title: 'FreshBite',
    tagline: 'Responsive Online Food-Ordering & Cart Platform',
    description: 'Responsive online food-ordering platform with restaurants, menus, cart functionality and checkout workflow.',
    longDescription: 'FreshBite is an end-to-end e-commerce food ordering application engineered for frictionless browsing, real-time cart state synchronization, dynamic order calculation (taxes, delivery fee, discounts), and an intuitive multi-step checkout workflow.',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'Context API', 'CSS Grid/Flexbox'],
    category: 'Full-Stack',
    features: [
      'Restaurant discovery grid with dietary category filtering and search',
      'Interactive menu catalog with custom order modifiers (spice level, add-ons)',
      'Persistent cart with instant price recalculation and quantity adjustments',
      'Mock multi-step checkout with delivery address capture and order receipt generation'
    ],
    transferableStrengths: [
      'Robust global state synchronization for e-commerce shopping carts',
      'Clean separation between presentation components and business logic',
      'Responsive design ensuring zero layout disruption across mobile and desktop'
    ],
    metricsOrOutcome: 'Sub-second cart calculation latency; fully responsive across standard mobile and desktop viewports.',
    githubUrl: 'https://github.com/simangeletutubala/freshbite-order',
    demoType: 'freshbite'
  },
  {
    id: 'fitness-challenge-tracker',
    title: 'Fitness Challenge Tracker',
    tagline: 'Full-Stack Goal Tracking & Community Leaderboard',
    description: 'Full-stack application concept for creating fitness challenges, tracking activities and displaying leaderboards.',
    longDescription: 'A dynamic goal-oriented fitness tracking application that empowers users to create custom physical challenges (running, push-ups, daily hydration, steps), log daily progress with metric validation, and compete on dynamic real-time community leaderboards.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB / SQL', 'Chart.js / SVG', 'REST APIs'],
    category: 'Full-Stack',
    features: [
      'Custom challenge creation wizard with target deadlines and milestone units',
      'Daily activity logging form with input validation and cumulative streak calculation',
      'Visual progress rings and weekly completion analytics',
      'Dynamic community leaderboard ranking participants by completion percentage'
    ],
    transferableStrengths: [
      'Data modeling for multi-tenant challenges, user logs, and cumulative scores',
      'Algorithmic ranking calculations for leaderboard positioning',
      'Visual data representation without heavy external charting overhead'
    ],
    metricsOrOutcome: 'Simulates scalable multi-user challenge tracking with streak preservation logic.',
    githubUrl: 'https://github.com/simangeletutubala/fitness-challenge-tracker',
    demoType: 'fitnesstracker'
  }
];

export const JOURNEY_DATA: JourneyMilestone[] = [
  {
    year: '2024',
    role: 'Software Engineering Training',
    organization: 'Women Techsters',
    type: 'training',
    description: 'Selected for intensive software engineering curriculum focusing on full-stack web development fundamentals, software design patterns, and collaborative code practices.',
    skillsGained: ['JavaScript ES6+', 'HTML5/CSS3', 'Version Control with Git', 'Agile Team Collaboration']
  },
  {
    year: '2024',
    role: 'Web Development Internship',
    organization: 'CodSoft',
    type: 'internship',
    description: 'Completed practical development tasks and feature builds within a structured internship setting, translating real design briefs into responsive client-side web applications.',
    skillsGained: ['Responsive Web Design', 'Cross-Browser Compatibility', 'Task Automation', 'Independent Debugging']
  },
  {
    year: '2024',
    role: 'Software Development Training',
    organization: 'Tech4Dev',
    type: 'training',
    description: 'Deepened software engineering capabilities with hands-on labs in API integration, backend architectural concepts, and database operations.',
    skillsGained: ['Backend Basics (Node.js/Python)', 'RESTful Endpoints', 'Data Modeling', 'Code Reviews']
  },
  {
    year: '2024 - Present',
    role: 'Independent Application Development',
    organization: 'MathSpark · FreshBite · Fitness Tracker',
    type: 'development',
    description: 'Engineered complete, user-centered web applications from concept to deployment, solving real challenges and demonstrating modular React architectures and full-stack integration.',
    skillsGained: ['React Hooks & Context', 'State Synchronization', 'Full Project Lifecycle', 'UX Architecture']
  },
  {
    year: 'Present',
    role: 'Junior Software Developer',
    organization: 'Ready to contribute to engineering teams',
    type: 'milestone',
    description: 'Equipped with disciplined training, practical project evidence, and strong problem-solving acumen, actively seeking opportunities to deliver value to modern engineering teams.',
    skillsGained: ['Production Readiness', 'Continuous Learning', 'Team Integration', 'Practical Problem Solving']
  }
];

export const TRANSFERABLE_EXPERIENCE: TransferableCompetency[] = [
  {
    title: 'Problem Solving & Analytical Thinking',
    subtitle: 'From Mathematical Proofs to Algorithmic Code',
    description: 'Mathematics demands rigorous proof, decomposition of complex structures into fundamental theorems, and logical consistency. In software engineering, this translates into clean algorithmic problem breakdown, debugging tenacity, and systematic edge-case consideration.',
    developerApplication: 'Breaking down large features into modular components, isolating state bugs, and crafting clean conditional logic.',
    iconName: 'Binary'
  },
  {
    title: 'Communication & Technical Translation',
    subtitle: 'Explaining Complex Logic with Clarity',
    description: 'As an educator, conveying abstract mathematical principles to non-experts required exceptional empathy, clarity, and adaptive communication. In a development team, this fosters clear pull request descriptions, documentation, and healthy cross-functional alignment.',
    developerApplication: 'Writing readable, self-documenting code, constructive PR comments, and aligning technical specs with business needs.',
    iconName: 'MessageSquareText'
  },
  {
    title: 'Technology Integration & Digital Resources',
    subtitle: 'Bridging Software with User Needs',
    description: 'Integrated digital educational tools and designed interactive learning materials to elevate comprehension. This experience grounded software development in actual user behavior rather than theoretical design.',
    developerApplication: 'Intuitive user interface flows, accessibility considerations, and empathetic frontend state feedback.',
    iconName: 'Cpu'
  },
  {
    title: 'Project Planning & Structured Execution',
    subtitle: 'Milestone-Driven Delivery',
    description: 'Curriculum delivery requires meticulous backward planning, objective setting, and structured milestone tracking—directly analogous to agile sprint planning and iterative software releases.',
    developerApplication: 'Scoped task breakdown, time estimation, and adherence to clean git branching workflows.',
    iconName: 'CalendarCheck'
  }
];

export const EDUCATION_DATA: {
  degree: EducationItem;
  certifications: CertificationItem[];
} = {
  degree: {
    degree: 'Bachelor of Education (B.Ed)',
    institution: 'Senior Phase',
    field: 'Mathematics & Technology Education',
    highlights: [
      'Comprehensive study of analytical mathematics, curriculum engineering, and instructional design',
      'Applied technological integration in classroom and educational software contexts',
      'Fostered advanced competencies in critical thinking, logical sequencing, and quantitative analysis'
    ]
  },
  certifications: [
    {
      name: 'Software Engineering Training Program',
      issuer: 'Women Techsters',
      year: '2024',
      badge: 'Certified',
      skillsVerified: ['JavaScript', 'HTML5/CSS3', 'Git/GitHub', 'Web Architecture', 'Agile Principles']
    },
    {
      name: 'Web Development Internship Certificate',
      issuer: 'CodSoft',
      year: '2024',
      badge: 'Completed',
      skillsVerified: ['Responsive Layouts', 'Client-side Interactivity', 'DOM Manipulation', 'UI Engineering']
    },
    {
      name: 'Software Development Program',
      issuer: 'Tech4Dev',
      year: '2024',
      badge: 'Certified',
      skillsVerified: ['Full-Stack Fundamentals', 'Backend Concepts', 'RESTful Services', 'Database Design']
    }
  ]
};
