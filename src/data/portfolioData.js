export const profile = {
  name: 'Divyanshu Sharma',
  role: 'Computer Science Undergraduate & Backend/Full-Stack Developer',
  bio: 'Computer Science undergraduate (JECRC University) with strong foundations in Java, Python, DSA, and OOP, plus hands-on backend development using FastAPI, SQL, and REST APIs. Skilled in ServiceNow platform administration.',
  email: 'divyanshu.7711@gmail.com',
  phone: '+91 8078627743',
  location: 'Jaipur, Rajasthan',
  github: 'https://github.com/divyanshu7711',
  linkedin: 'https://linkedin.com/in/REPLACE_ME',
  leetcode: 'https://leetcode.com/REPLACE_ME',
}

export const skills = [
  'Java', 'Python', 'SQL', 'FastAPI', 'REST APIs', 'Maven', 'MySQL', 'DSA', 'OOP',
  'DBMS', 'Operating Systems', 'ServiceNow (Admin Panel, ACLs, Workflows)',
  'Git', 'GitHub', 'IntelliJ IDEA', 'VS Code', 'Linux', 'Postman',
]

export const projects = [
  {
    id: 'sign-language-translator',
    name: 'Sign Language Translator',
    description: 'FastAPI backend with OpenCV and Keras, real-time gesture prediction from live video streams.',
    url: 'https://github.com/divyanshu7711/SignLanguageTranslator',
    icon: 'sign',
  },
  {
    id: 'ai-resume-analyzer',
    name: 'AI Resume Analyzer',
    description: 'Generative AI system evaluating resumes and generating actionable feedback via structured prompts.',
    url: 'https://github.com/divyanshu7711/ai-resume-analyzer',
    icon: 'resume',
  },
  {
    id: 'taskflow-api',
    name: 'TaskFlow (Spring Boot API)',
    description: 'REST API built with Java Spring Boot, Hibernate, and MySQL for task/employee CRUD management.',
    url: 'https://github.com/divyanshu7711/taskflow-api-springboot',
    icon: 'taskflow',
  },
]

export const education = [
  {
    degree: 'B.Tech in Computer Science',
    institute: 'JECRC University',
    detail: 'CGPA 8.3',
    period: '2022 – 2026',
  },
  {
    degree: 'Senior Secondary',
    institute: 'Rajni Public School',
    detail: '93.6%',
    period: '2021',
  },
]

export const experience = [
  {
    title: 'ServiceNow Administration Intern',
    company: 'Cyntexa',
    points: [
      'Administered platform modules including user/role management, ACLs, workflows, and business rules.',
      'Configured admin panel (forms, UI policies, catalog items) to reduce manual configuration effort.',
    ],
  },
]

export const achievements = [
  '500+ DSA problems solved on LeetCode/GFG',
  'Winner, CodeHunt 2025 — Rank 1, JECRC University',
  'Led NGO blood-donation campaign contributing 20,000+ units',
]

export const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio Contact')}&body=${encodeURIComponent('Hi Divyanshu,\n')}`
