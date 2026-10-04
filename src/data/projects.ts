export interface Project {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "End-to-End Employee Lifecycle Architecture (120+ Workforce)",
    description: "Standardized the complete employee journey from pre-boarding to offboarding across a 120+ member organization. Created digital documentation checklists, SLA-driven query resolution workflows, and structured exit interview protocols that significantly cut onboarding friction.",
    tags: ["HR Operations", "Onboarding", "Lifecycle Management", "HRIS", "Process Optimization"],
    featured: true
  },
  {
    title: "Cross-Functional Talent Acquisition Pipeline (20+ Critical Hires)",
    description: "Spearheaded hiring across IT, Sales, Marketing, and Leadership teams. Implemented competency-based screening, structured interview loops, and consistent candidate engagement throughout notice periods, maintaining a high offer-acceptance rate.",
    tags: ["Talent Acquisition", "Technical Hiring", "Interview Coordination", "Candidate Experience"],
    featured: true
  },
  {
    title: "HRIS & Payroll Input Reconciliation Framework",
    description: "Engineered automated Advanced Excel reconciliation models (utilizing VLOOKUP, INDEX/MATCH, and dynamic pivot tables) to audit biometric attendance, leave deductions, and compensation adjustments, delivering error-free payroll inputs every monthly cycle.",
    tags: ["MS Excel", "Payroll Inputs", "HRIS", "People Analytics", "Compliance"],
    featured: true
  },
  {
    title: "Workplace Wellbeing & Employee Relations Initiatives",
    description: "Designed and rolled out 5+ employee engagement and wellness initiatives. Leveraged behavioral psychology background to provide confidential workplace counseling, support constructive performance discussions, and resolve employee grievances.",
    tags: ["Employee Relations", "Workplace Counseling", "Conflict Resolution", "Culture & Wellbeing"],
    featured: true
  },
  {
    title: "Developmental & Behavioral Assessment Protocol (AIIMS & THSTI)",
    description: "Conducted 250+ developmental and psychological evaluations across clinical research studies at THSTI and AIIMS Delhi. Managed centralized REDCap and SPSS research databases with rigorous data integrity and confidentiality compliance.",
    tags: ["Behavioral Assessment", "Psychology", "REDCap", "SPSS", "AIIMS Delhi", "THSTI"],
    featured: true
  }
];
