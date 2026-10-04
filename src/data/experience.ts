export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  website?: string;
  technologies: string[];
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string[];
}

export const experiences: Experience[] = [
  {
    company: "Hobfit Technologies Pvt. Ltd.",
    role: "HR Executive",
    period: "April 2026 – Present",
    location: "Faridabad, India",
    website: "https://www.hobfitwellness.com/",
    technologies: [
      "HR Operations",
      "Employee Lifecycle",
      "HRIS",
      "Payroll Inputs",
      "Talent Acquisition",
      "Advanced Excel",
      "Employee Relations",
      "Policy Compliance"
    ],
    responsibilities: [
      "Manage end-to-end HR operations and employee lifecycle processes for a 120+ employee workforce, covering onboarding, documentation, employee support, performance processes, payroll coordination and exits.",
      "Primary HR point of contact for employees, addressing workplace queries and concerns and coordinating with relevant stakeholders for timely resolution.",
      "Maintain accurate employee records, HRIS data and payroll inputs while ensuring adherence to internal policies and established HR processes.",
      "Coordinate 20+ critical hires across IT, Sales, Marketing and Leadership, managing recruitment, interview coordination, selection and onboarding activities.",
      "Partner with managers and employees to resolve people-related issues, support performance discussions and maintain positive employee relations.",
      "Executed 5+ employee engagement and wellbeing initiatives, supporting employee experience and cross-functional collaboration.",
      "Identified opportunities to streamline HR processes and documentation to improve operational efficiency and reduce manual errors."
    ]
  },
  {
    company: "Civil Hospital Gurugram, THSTI",
    role: "Psychologist (Research)",
    period: "Jan 2025 – Jun 2025",
    location: "Gurugram, India",
    website: "https://thsti.res.in/",
    technologies: [
      "Behavioral Assessment",
      "Psychometrics",
      "Healthcare Operations",
      "Stakeholder Management",
      "Protocol Compliance"
    ],
    responsibilities: [
      "Coordinated participant operations and developmental assessment activities within a multidisciplinary healthcare and research program.",
      "Conducted 250+ assessments while maintaining documentation accuracy, quality standards and protocol compliance.",
      "Coordinated with clinicians, researchers and other stakeholders to support timely completion of assessment and documentation processes."
    ]
  },
  {
    company: "Department of Neurology, AIIMS Delhi",
    role: "Research Assistant",
    period: "Mar 2024 – Sep 2024",
    location: "New Delhi, India",
    website: "https://www.aiims.edu/",
    technologies: [
      "REDCap",
      "Data Integrity",
      "Participant Screening",
      "Intervention Protocols",
      "Confidentiality & Reporting"
    ],
    responsibilities: [
      "Coordinated participant screening, scheduling and intervention activities within a multidisciplinary research project.",
      "Maintained research databases using REDCap, ensuring data integrity, confidentiality and timely reporting.",
      "Developed clear participant communication and educational materials to support engagement and effective intervention delivery."
    ]
  },
  {
    company: "Department of Psychiatry, PGIMER",
    role: "Field Research Assistant",
    period: "Oct 2023 – Feb 2024",
    location: "Chandigarh, India",
    website: "https://pgimer.edu.in/",
    technologies: [
      "SPSS",
      "Statistical Analysis",
      "Data Documentation",
      "Field Research",
      "Structured Interviews"
    ],
    responsibilities: [
      "Coordinated participant enrolment, interviews and follow-ups across multiple study sites involving 100+ participants.",
      "Maintained datasets using SPSS and supported reporting, data analysis and research documentation."
    ]
  }
];

export const educationList: Education[] = [
  {
    institution: "Panjab University",
    degree: "MA in Psychology",
    period: "2021 – 2023",
    location: "Chandigarh, India",
    details: [
      "Specialization in behavioral assessment, cognitive psychology, and research methodology",
      "Conducted extensive academic research and quantitative data analysis"
    ]
  },
  {
    institution: "Amity University",
    degree: "BA (Hons) in Psychology",
    period: "2018 – 2021",
    location: "Noida, India",
    details: [
      "Core coursework in organizational behavior, counseling psychology, and statistical methods"
    ]
  }
];
