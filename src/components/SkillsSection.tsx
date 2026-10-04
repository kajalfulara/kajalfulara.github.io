const skillCategories = [
  {
    name: "Talent Acquisition & Recruitment",
    skills: [
      "End-to-End Recruitment",
      "IT & Non-IT Hiring",
      "Executive & Leadership Search",
      "Candidate Screening",
      "Interview Coordination",
      "Campus Hiring",
      "Offer Negotiation & Pre-boarding"
    ]
  },
  {
    name: "HR Operations & Compliance",
    skills: [
      "Employee Lifecycle Management",
      "Structured Onboarding & Offboarding",
      "HR Documentation & Audits",
      "HRIS Administration",
      "Payroll Input Coordination",
      "Attendance & Leave Governance",
      "Statutory & Policy Compliance"
    ]
  },
  {
    name: "Employee Relations & Wellbeing",
    skills: [
      "Workplace Counseling",
      "Conflict Resolution",
      "Grievance Redressal",
      "Active Listening",
      "Employee Engagement Initiatives",
      "Cross-Functional Stakeholder Alignment",
      "Performance Management Support"
    ]
  },
  {
    name: "HR Analytics & Software",
    skills: [
      "Advanced MS Excel (VLOOKUP, Pivot Tables)",
      "HRIS Systems",
      "REDCap Research Database",
      "SPSS Statistical Analysis",
      "Google Workspace & Data Reconciliation"
    ]
  },
  {
    name: "Behavioral Assessment & Research",
    skills: [
      "250+ Psychological & Developmental Assessments",
      "Clinical Protocol Compliance",
      "Multidisciplinary Research Coordination",
      "Data Integrity & Confidentiality"
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="animate space-y-6">
      <div className="flex flex-wrap gap-y-2 items-center justify-between">
        <h5 className="font-semibold text-black dark:text-white text-lg">
          Core Competencies & Expertise
        </h5>
      </div>

      <div className="space-y-5">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-sm font-semibold text-black dark:text-white">
              {cat.name}
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {cat.skills.join('  /  ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
