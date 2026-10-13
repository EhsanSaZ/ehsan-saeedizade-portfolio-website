import { Briefcase, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data';

export default function OpenToWorkBanner() {
  return (
    <div className="bg-gradient-to-br from-amber-50/90 via-orange-50/30 to-amber-50/10 dark:from-cyan-950/80 dark:via-slate-900/90 dark:to-cyan-950/70 p-5 sm:p-6 rounded-3xl border border-amber-300/80 dark:border-cyan-500/40 shadow-sm transition-colors duration-300">
      {/* Compact Header: Title and Active Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-amber-100 text-amber-700 dark:bg-cyan-500/25 dark:text-cyan-300 rounded-lg transition-colors duration-300">
            <Briefcase size={18} />
          </div>
          <div className="flex flex-wrap items-baseline gap-1.5">
            <h3 className="text-lg sm:text-lg font-bold text-slate-900 dark:text-zinc-100 transition-colors duration-300">
              Open to Work
            </h3>
            <span className="text-slate-400 dark:text-cyan-500/50 hidden sm:inline text-xs font-normal">|</span>
            <span className="text-sm sm:text-sm font-semibold text-amber-900 dark:text-cyan-300">
              Full-Time &amp; Internship Opportunities
            </span>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs sm:text-xs font-semibold bg-amber-100/90 text-amber-900 dark:bg-cyan-500/20 dark:text-cyan-300 border border-amber-300/80 dark:border-cyan-400/40 transition-colors duration-300 shrink-0">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 dark:bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-600 dark:bg-cyan-400"></span>
          </span>
          Actively Seeking Roles
        </span>
      </div>

      {/* Main Narrative - Mobile kept at text-sm, Large screen reversed back to sm:text-sm */}
      <div className="space-y-2.5 text-sm sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed font-light transition-colors duration-300">
        <p>
          I am actively seeking <strong className="font-semibold text-slate-900 dark:text-zinc-100">full-time and internship opportunities</strong> in{' '} engineering and research roles, including{' '}
          <strong className="font-semibold text-slate-900 dark:text-zinc-100">AI/ML Engineering</strong>,{' '}
          <strong className="font-semibold text-slate-900 dark:text-zinc-100">Data Engineering</strong>,{' '}
          <strong className="font-semibold text-slate-900 dark:text-zinc-100">Software Engineering</strong>,{' '}
          <strong className="font-semibold text-slate-900 dark:text-zinc-100">Distributed Systems Engineering</strong>, and{' '}
          <strong className="font-semibold text-slate-900 dark:text-zinc-100">Applied Research</strong>.
        </p>

        {/* Work Authorization Callout */}
        <div className="p-2.5 sm:py-2 sm:px-3 rounded-xl bg-white/80 dark:bg-slate-950/60 border border-amber-200/80 dark:border-cyan-500/30 flex items-center gap-2.5 transition-colors duration-300">
          <div className="p-1 rounded-full bg-amber-100 text-amber-700 dark:bg-cyan-500/25 dark:text-cyan-300 shrink-0 transition-colors duration-300">
            <ShieldCheck size={15} />
          </div>
          <p className="text-sm sm:text-sm text-slate-700 dark:text-zinc-200 leading-normal">
            <strong className="font-semibold text-slate-900 dark:text-zinc-100">Work Authorization:</strong>{' '}
            <span className="italic font-normal">
              U.S. Permanent Resident (Green Card holder). Authorized to work in the United States without employer sponsorship.
            </span>
          </p>
        </div>

        {/* Closing Invitation & CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
          <p className="text-sm sm:text-sm text-slate-600 dark:text-zinc-300 italic">
            I welcome opportunities to connect with recruiters, hiring managers, and research teams.</p>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white dark:bg-cyan-600 dark:hover:bg-cyan-500 transition-colors shadow-sm"
            >
              <Mail size={13} />
              <span>Get in Touch</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white/90 hover:bg-amber-50 text-slate-700 border border-amber-200/80 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-zinc-100 dark:border-cyan-500/30 transition-colors"
            >
              <FaLinkedin size={13} />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
