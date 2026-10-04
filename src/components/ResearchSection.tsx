import { GraduationCap } from 'lucide-react';

const GOOGLE_SCHOLAR_URL = 'https://scholar.google.com/citations?hl=en&user=bPq2beMAAAAJ';

const publications = [
  {
    title: 'Development of a multimodal health education module for dementia prevention in at-risk rural Indian elders: A SMRUTHI INDIA Initiative',
    citation: 'Frontiers in Dementia, 2026',
    contribution: 'Co-author',
    url: 'https://www.frontiersin.org/journals/dementia/articles/10.3389/frdem.2026.1914082/abstract',
  },
  {
    title: 'Strategic multimodal intervention in at-risk elderly Indians for prevention of dementia (SMRUTHI INDIA): a cohort multiple randomised controlled trial protocol',
    citation: 'BMJ Open, 2025; 15(6): e084050',
    contribution: 'SMRUTHI INDIA Collaborator',
    url: 'https://bmjopen.bmj.com/content/15/6/e084050',
  },
];

const ResearchSection = () => (
  <section className="animate space-y-4">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <h2 className="font-semibold text-black dark:text-white text-lg">
        Research & Publications
      </h2>
      <a
        href={GOOGLE_SCHOLAR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="jrzs-link inline-flex items-center gap-1.5 text-sm"
      >
        <GraduationCap className="h-4 w-4" />
        Google Scholar
      </a>
    </div>

    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
      Research experience in structured interviews, participant assessments, and accurate study documentation supports an evidence-led, people-centered approach to HR analysis. Selected contributions through the SMRUTHI INDIA dementia-prevention research program:
    </p>

    <ul className="flex flex-col gap-3">
      {publications.map((publication) => (
        <li key={publication.title}>
          <a
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-black/15 dark:border-white/20 px-4 py-3 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
          >
            <span className="block pr-5 font-semibold text-black dark:text-white text-sm leading-relaxed">
              {publication.title}
            </span>
            <span className="mt-1 block text-xs text-neutral-500 dark:text-neutral-400">
              {publication.citation} · {publication.contribution}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default ResearchSection;
