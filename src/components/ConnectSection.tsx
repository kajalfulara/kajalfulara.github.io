import { useState } from 'react';
import { GraduationCap, Linkedin, Mail, Phone, FileText } from 'lucide-react';

const EMAIL = 'kajal.fulara19@gmail.com';
const PHONE = '+91 7838728912';
const LINKEDIN_URL = 'https://www.linkedin.com/in/kajal-f/';
const GOOGLE_SCHOLAR_URL = 'https://scholar.google.com/citations?hl=en&user=bPq2beMAAAAJ';
const RESUME_URL = 'https://drive.google.com/file/d/1TD-lXjK8c7MbJz_dHCdVu_ecqZ-1Wetq/view?usp=drive_link';

const ConnectSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PHONE);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="connect" className="animate space-y-4">
      <div className="flex items-center justify-between">
        <h5 className="font-semibold text-black dark:text-white text-lg">
          Let's Connect
        </h5>
        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span>Available for hire</span>
        </span>
      </div>

      <article>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
          I am <strong>actively open to full-time opportunities</strong> in HR Operations, People Operations, Talent Acquisition, HR Analyst, and Qualitative Analyst roles. If you're hiring, looking to collaborate on research, or simply want to chat, feel free to reach out directly.
        </p>
      </article>

      <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400">
        <li className="flex gap-x-2 text-nowrap items-center">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="jrzs-link inline-flex items-center gap-1"
            aria-label="Kajal Fulara on LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>linkedin</span>
          </a>
          <span>/</span>
        </li>

        <li className="flex gap-x-2 text-nowrap items-center">
          <a
            href={GOOGLE_SCHOLAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="jrzs-link inline-flex items-center gap-1"
            aria-label="Kajal Fulara on Google Scholar"
          >
            <GraduationCap className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
            <span>google scholar</span>
          </a>
          <span>/</span>
        </li>

        <li className="flex gap-x-2 text-nowrap items-center">
          <button
            onClick={handleCopyEmail}
            className="jrzs-link inline-flex items-center gap-1 text-left"
            title="Click to copy email"
            aria-label="Copy Email"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{EMAIL}</span>
          </button>
          {copiedEmail && (
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 animate-fadeIn">
              (copied!)
            </span>
          )}
          <span>/</span>
        </li>

        <li className="flex gap-x-2 text-nowrap items-center">
          <button
            onClick={handleCopyPhone}
            className="jrzs-link inline-flex items-center gap-1 text-left"
            title="Click to copy phone number"
            aria-label="Copy Phone"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{PHONE}</span>
          </button>
          {copiedPhone && (
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 animate-fadeIn">
              (copied!)
            </span>
          )}
          <span>/</span>
        </li>

        <li className="flex gap-x-2 text-nowrap items-center">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="jrzs-link inline-flex items-center gap-1"
            aria-label="View Kajal Fulara Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>resume</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ConnectSection;
