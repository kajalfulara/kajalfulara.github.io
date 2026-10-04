import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: "Talent Acquisition",
    description: "End-to-End Recruitment, IT & Non-IT Hiring, Leadership Search, Campus Hiring, Interview Coordination",
    skills: ["Full-Cycle Recruitment", "Technical Sourcing", "Campus Hiring", "Candidate Screening", "Offer Management"]
  },
  {
    title: "HR Operations & Compliance",
    description: "Employee Lifecycle, Onboarding, Offboarding, Documentation, Policy Implementation, Payroll Coordination",
    skills: ["HR Operations", "HRIS", "Payroll Inputs", "Attendance & Leaves", "Statutory Compliance"]
  },
  {
    title: "Employee Relations",
    description: "Workplace Counseling, Conflict Resolution, Grievance Handling, Engagement Initiatives",
    skills: ["Workplace Counseling", "Conflict Resolution", "Active Listening", "Employee Engagement", "Retention"]
  },
  {
    title: "Tools & Analytics",
    description: "Advanced MS Excel, People Analytics, Research Databases, Statistical Analysis",
    skills: ["Advanced Excel (VLOOKUP, Pivots)", "HRIS Platforms", "REDCap", "SPSS", "Google Workspace"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Core Competencies</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Empowering high-performance teams through structured operations and behavioral insight
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card border-none h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-blue-500/10 text-blue-300 border border-blue-500/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
