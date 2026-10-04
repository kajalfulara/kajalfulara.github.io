import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase } from 'lucide-react';

const GOOGLE_SCHOLAR_URL = 'https://scholar.google.com/citations?hl=en&user=bPq2beMAAAAJ';
const HOBFIT_URL = 'https://www.hobfitwellness.com/';

const Hero = () => {
  const handleScrollToConnect = (e: React.MouseEvent) => {
    const el = document.getElementById('connect');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="space-y-6">
      {/* Status Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="animate inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-700 dark:text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to Opportunities</span>
        </div>

        <div className="animate inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 text-xs font-mono text-neutral-600 dark:text-neutral-400">
          <Briefcase className="w-3 h-3 opacity-60" />
          <span>HR Executive @ Hobfit Technologies</span>
        </div>

        <a
          href={GOOGLE_SCHOLAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="animate inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/5 hover:bg-blue-500/10 text-xs font-mono text-blue-700 dark:text-blue-300 transition-colors"
          title="View published research on Google Scholar"
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Google Scholar</span>
        </a>
      </div>

      <div className="animate flex items-center gap-4">
        <img
          src="/kajal-profile.png"
          alt="Kajal Fulara"
          className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-full object-cover border-2 border-white dark:border-neutral-900 ring-2 ring-emerald-500/30 shadow-md"
        />
        <h1 className="font-semibold text-2xl md:text-3xl text-black dark:text-white">
          Hi, I'm Kajal.
        </h1>
      </div>

      {/* Recruiter Callout Banner */}
      <div className="animate p-3.5 rounded-lg border border-emerald-500/25 bg-emerald-500/5 dark:bg-emerald-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs md:text-sm">
        <div className="flex items-start sm:items-center gap-2.5">
          <span className="relative flex h-2 w-2 mt-1 sm:mt-0 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-neutral-800 dark:text-neutral-200 leading-snug">
            <strong>Currently looking for new roles:</strong> <strong>HR Operations</strong>, <strong>People Operations</strong>, <strong>Talent Acquisition</strong>, <strong>HR Analyst</strong>, and <strong>Qualitative Analyst</strong>.
          </span>
        </div>
        <Link
          to="/contact"
          onClick={handleScrollToConnect}
          className="jrzs-link shrink-0 font-medium text-emerald-700 dark:text-emerald-300 self-start sm:self-auto cursor-pointer"
        >
          Get in touch &rarr;
        </Link>
      </div>

      <article className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <p className="animate">
          I'm an HR Operations and Talent Management professional based in Delhi NCR, currently steering end-to-end employee lifecycle processes, compliance, and talent acquisition for a 120+ employee workforce at{' '}
          <a
            href={HOBFIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="jrzs-link font-medium"
          >
            Hobfit Technologies
          </a>
          .
        </p>

        <p className="animate">
          With an <strong>MA in Psychology</strong> and clinical research experience at premier institutions including the{' '}
          <span className="text-black dark:text-white font-medium">Department of Neurology at AIIMS Delhi</span>,{' '}
          <span className="text-black dark:text-white font-medium">THSTI</span>, and{' '}
          <span className="text-black dark:text-white font-medium">PGIMER Chandigarh</span>, I bring a unique dual advantage to People Operations: a deep, scientific understanding of human behavior paired with disciplined, data-informed execution.
        </p>

        <p className="animate">
          My day-to-day focuses on building seamless employee onboarding and offboarding journeys, driving error-free HRIS and payroll input audits in Advanced Excel, closing 20+ critical hires across IT & leadership, and creating empathetic workplace dispute resolution mechanisms. Key initiatives include{' '}
          <Link to="/projects" className="jrzs-link">
            Lifecycle Operations Architecture
          </Link>
          ,{' '}
          <Link to="/projects" className="jrzs-link">
            Technical & Leadership Hiring
          </Link>
          , and{' '}
          <Link to="/projects" className="jrzs-link">
            HRIS Data & Payroll Framework
          </Link>
          .
        </p>
      </article>
    </section>
  );
};

export default Hero;
