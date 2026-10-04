import { Link } from 'react-router-dom';
import { experiences, educationList } from '@/data/experience';
import { GraduationCap, Briefcase } from 'lucide-react';

interface WorkSectionProps {
  limit?: number;
  showLink?: boolean;
}

const WorkSection = ({ limit, showLink = true }: WorkSectionProps) => {
  const displayExperiences = limit ? experiences.slice(0, limit) : experiences;

  return (
    <section className="animate space-y-10">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-y-2 items-center justify-between">
          <h5 className="font-semibold text-black dark:text-white text-lg inline-flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-neutral-500" />
            <span>Professional Experience</span>
          </h5>
          {showLink && (
            <Link to="/work" className="jrzs-link text-sm">
              See all experience
            </Link>
          )}
        </div>

        <ul className="flex flex-col space-y-8">
          {displayExperiences.map((exp, index) => (
            <li key={index} className="space-y-1.5">
              <div className="text-sm opacity-75 text-neutral-600 dark:text-neutral-400">
                {exp.period}
              </div>
              <div className="font-semibold text-black dark:text-white text-base">
                {exp.website ? (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="jrzs-link"
                  >
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </div>
              <div className="text-sm opacity-75 text-neutral-600 dark:text-neutral-400">
                {exp.role} • {exp.location}
              </div>
              <article className="pt-2">
                <ul className="list-disc pl-4 space-y-1.5 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </article>
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono pt-1">
                  {exp.technologies.join('  /  ')}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6 border-t border-black/10 dark:border-white/10 pt-8">
        <div className="flex flex-wrap gap-y-2 items-center justify-between">
          <h5 className="font-semibold text-black dark:text-white text-lg inline-flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-neutral-500" />
            <span>Education</span>
          </h5>
        </div>

        <ul className="flex flex-col space-y-6">
          {educationList.map((edu, index) => (
            <li key={index} className="space-y-1">
              <div className="text-sm opacity-75 text-neutral-600 dark:text-neutral-400">
                {edu.period}
              </div>
              <div className="font-semibold text-black dark:text-white text-base">
                {edu.institution}
              </div>
              <div className="text-sm opacity-75 text-neutral-600 dark:text-neutral-400">
                {edu.degree} • {edu.location}
              </div>
              {edu.details && (
                <ul className="list-disc pl-4 space-y-1 text-sm text-neutral-700 dark:text-neutral-300 pt-1 leading-relaxed">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WorkSection;
