/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import { 
  User, 
  Users,
  GraduationCap, 
  Code, 
  Briefcase, 
  BookOpen, 
  FileText, 
  Award, 
  Trophy,
  Linkedin,
  Github,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
  Building2,
  ChevronRight,
  Search,
  Layers,
  Monitor,
  Server,
  Database,
  Settings,
  Menu,
  X,
  Globe,
  Sun,
  Moon,
  BookMarked,
  Star,
  ChevronDown
} from 'lucide-react';
import { 
  personalInfo, 
  education, 
  // researchInterests, 
  skills, 
  workExperience, 
  teachingExperience, 
  publications, 
  certificates, 
  awards, 
  services 
} from './data';
import { FaGoogleScholar, FaResearchgate } from 'react-icons/fa6';

type TabType = 'about' | 'skills' | 'work' | 'teaching' | 'publications' | 'certificates' | 'awards';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode

  // Handle dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const tabs = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'work', label: 'Experience', icon: Briefcase },
    { id: 'teaching', label: 'Teaching', icon: BookOpen },
    { id: 'publications', label: 'Publications', icon: FileText },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'awards', label: 'Awards & Services', icon: Trophy },
  ];

  // Close mobile menu and scroll to top when tab changes
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-slate-600 dark:text-zinc-400 font-sans selection:bg-accent-500/30 selection:text-accent-900 dark:selection:text-accent-200 transition-colors duration-300">
      {/* Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent-500/5 dark:bg-accent-600/10 blur-[120px] rounded-full transition-colors duration-300"></div>
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-blue-500/5 dark:bg-blue-600/5 blur-[100px] rounded-full transition-colors duration-300"></div>
      </div>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-[100] bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-slate-200 dark:border-zinc-800/50 px-4 py-4 flex justify-between items-center transition-colors duration-300">
        <div className="flex items-center gap-3">
          <img 
            src={personalInfo.photo} 
            alt={personalInfo.name}
            className="w-10 h-10 rounded-lg object-cover border border-slate-200 dark:border-zinc-800"
            referrerPolicy="no-referrer"
          />
          <span className="text-slate-900 dark:text-zinc-100 font-bold tracking-tight">{personalInfo.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="relative p-2 w-10 h-10 flex items-center justify-center overflow-hidden rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDarkMode ? 'dark' : 'light'}
                initial={{ y: -20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                {isDarkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-slate-700 dark:text-white" />}
              </motion.div>
            </AnimatePresence>
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 z-[90] bg-white/65 dark:bg-black/75 backdrop-blur-sm pt-20 px-6 pb-6 flex flex-col overflow-y-auto transition-colors duration-300 pointer-events-auto"
          >
            <nav className="flex flex-col gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex items-center gap-4 p-4 rounded-2xl text-lg font-medium transition-all ${
                    activeTab === tab.id 
                      ? 'bg-accent-50 text-accent-600 border border-accent-200 dark:bg-accent-500/10 dark:text-accent-500 dark:border-accent-500/20' 
                      : 'text-slate-600 hover:text-slate-900 dark:text-zinc-500 dark:hover:text-zinc-200'
                  }`}
                >
                  <tab.icon size={20} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row min-h-screen relative">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex flex-col w-80 fixed h-screen border-r border-slate-200 dark:border-zinc-800/50 bg-white/50 dark:bg-black/20 backdrop-blur-sm p-8 z-50 transition-colors duration-300">
          <div className="mb-8 flex justify-between items-start">
            <div>
              <img 
                src={personalInfo.photo} 
                alt={personalInfo.name}
                className="w-32 h-32 rounded-2xl object-cover shadow-xl shadow-accent-500/20 mb-6 border-2 border-slate-200 dark:border-zinc-800"
                referrerPolicy="no-referrer"
              />
              <h1 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 tracking-tight leading-tight mb-2">
                {personalInfo.name}
              </h1>
              <p className="text-sm text-slate-500 dark:text-zinc-500 font-medium leading-relaxed">
                {personalInfo.title}
              </p>
            </div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="relative p-2 w-10 h-10 flex items-center justify-center overflow-hidden rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDarkMode ? 'dark' : 'light'}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  {isDarkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-slate-700 dark:text-white" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>

          <nav className="flex-1 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all relative group ${
                  activeTab === tab.id 
                    ? 'text-accent-600 bg-accent-50 dark:text-accent-500 dark:bg-accent-500/5' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-zinc-500 dark:hover:text-zinc-300 dark:hover:bg-zinc-800/30'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute left-0 w-1 h-6 bg-accent-500 rounded-full"
                  />
                )}
                <tab.icon size={18} className={activeTab === tab.id ? 'text-accent-500' : 'text-slate-400 group-hover:text-slate-600 dark:text-zinc-600 dark:group-hover:text-zinc-400'} />
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-slate-200 dark:border-zinc-800/50 transition-colors duration-300">
            <div className="flex gap-3">
              <SidebarSocialLink href={personalInfo.linkedin} icon={FaLinkedin} />
              <SidebarSocialLink href={personalInfo.github} icon={FaGithub} />
              <SidebarSocialLink href={personalInfo.scholar} icon={FaGoogleScholar} />
              <SidebarSocialLink href={personalInfo.researchgate} icon={FaResearchgate} />
              <SidebarSocialLink href={`mailto:${personalInfo.email}`} icon={FaEnvelope} />
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 lg:ml-80 pt-24 lg:pt-0">
          <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="w-full"
              >
                {activeTab === 'about' && <AboutSection />}
                {activeTab === 'skills' && <SkillsSection />}
                {activeTab === 'work' && <WorkSection />}
                {activeTab === 'teaching' && <TeachingSection />}
                {activeTab === 'publications' && <PublicationsSection />}
                {activeTab === 'certificates' && <CertificatesSection />}
                {activeTab === 'awards' && <AwardsSection />}
              </motion.div>
            </AnimatePresence>
          </div>

          <footer className="px-6 lg:px-12 py-12 border-t border-slate-200 dark:border-zinc-800/50 mt-12 transition-colors duration-300">
            {/* Mobile Social Links */}
            <div className="lg:hidden mb-8 flex justify-center gap-4">
              <SidebarSocialLink href={personalInfo.linkedin} icon={FaLinkedin} />
              <SidebarSocialLink href={personalInfo.github} icon={FaGithub} />
              <SidebarSocialLink href={personalInfo.scholar} icon={FaGoogleScholar} />
              <SidebarSocialLink href={personalInfo.researchgate} icon={FaResearchgate} />
              <SidebarSocialLink href={`mailto:${personalInfo.email}`} icon={FaEnvelope} />
            </div>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 dark:text-zinc-600 text-xs uppercase tracking-widest font-semibold">
                Last Update April-2026
              </p>
              <p className="text-slate-500 dark:text-zinc-500 text-sm">
                © 2022 - {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

function SidebarSocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 hover:text-accent-600 hover:border-accent-300 hover:bg-accent-50 dark:bg-zinc-900/50 dark:border-zinc-800/50 dark:text-zinc-500 dark:hover:text-accent-500 dark:hover:border-accent-500/30 dark:hover:bg-accent-500/5 transition-all"
    >
      <Icon size={18} />
    </a>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-zinc-100 tracking-tight mb-4 transition-colors duration-300">
        {title}
      </h2>
      {subtitle && <p className="text-slate-500 dark:text-zinc-500 text-lg max-w-2xl leading-relaxed transition-colors duration-300">{subtitle}</p>}
      <div className="w-12 h-1 bg-accent-600 rounded-full mt-6"></div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="space-y-8">
      <div className="mb-12">
        <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-zinc-100 tracking-tight mb-4 transition-colors duration-300">
          Who am I?
        </h1>
        <p className="text-xl text-slate-600 dark:text-zinc-400 leading-relaxed max-w-3xl font-light transition-colors duration-300">
          A researcher and engineer focused on advancing AI/ML-driven solutions, distributed infrastructures, and scalable, privacy-preserving intelligent applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Bio & Education */}
        <div className="lg:col-span-2 space-y-6">
          {/* Biography Card */}
          <div className="bg-white dark:bg-zinc-900/30 p-8 rounded-3xl border border-slate-200 dark:border-zinc-800/50 shadow-sm transition-colors duration-300">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 mb-6 flex items-center gap-3 transition-colors duration-300">
              <div className="p-2 bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 rounded-xl">
                <BookMarked size={24} />
              </div>
              Biography
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-zinc-400 leading-relaxed text-justify font-light transition-colors duration-300">
              <p>
                I am a Ph.D. candidate and Graduate Research and Teaching Assistant, specializing in AI/ML-driven software systems and distributed infrastructures. My work focuses on federated learning, anomaly detection, and privacy-preserving machine learning across edge, cloud, and high-performance environments, with an emphasis on building scalable, production-grade systems.
              </p>
              <p>
                I have hands-on experience developing machine learning pipelines, large-scale monitoring frameworks, and cloud-native systems using modern DevOps and MLOps practices. My recent work extends to large language models, AI agents, and system-level design of intelligent, data-driven applications.
              </p>
              <p>
                With a strong background in software engineering, cloud computing, and system design, I aim to bridge the gap between advanced machine learning research and real-world, scalable system deployment.
              </p>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white dark:bg-zinc-900/30 p-8 rounded-3xl border border-slate-200 dark:border-zinc-800/50 shadow-sm transition-colors duration-300">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 mb-8 flex items-center gap-3 transition-colors duration-300">
              <div className="p-2 bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400 rounded-xl">
                <GraduationCap size={24} />
              </div>
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {index !== education.length - 1 && (
                    <div className="absolute left-0 top-12 bottom-[-2rem] w-px bg-slate-200 dark:bg-zinc-800"></div>
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-zinc-100 transition-colors duration-300">{edu.degree}</h4>
                      <div className="text-blue-600 dark:text-blue-400 font-medium mt-1">{edu.institution}</div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-zinc-500 text-sm mt-2 transition-colors duration-300">
                        <MapPin size={14} />
                        {edu.location}
                      </div>
                      {edu.description && (
                        <p className="text-slate-600 dark:text-zinc-400 text-sm mt-3 font-light transition-colors duration-300">
                          {edu.description}
                        </p>
                      )}
                    </div>
                    <div className="shrink-0">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-zinc-300 text-xs font-semibold border border-slate-200 dark:border-zinc-700 transition-colors duration-300">
                        {edu.period.includes('now') ? 'Current' : 'Completed'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Role & Interests */}
        <div className="space-y-6">
          {/* Current Role Card */}
          <div className="bg-white dark:bg-zinc-900/30 p-8 rounded-3xl border border-slate-200 dark:border-zinc-800/50 shadow-sm transition-colors duration-300">
            <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-6 flex items-center gap-3 transition-colors duration-300">
              <div className="p-2 bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 rounded-xl">
                <Award size={20} />
              </div>
              Current Role
            </h3>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-zinc-100 mb-2 transition-colors duration-300">Graduate Research and Teaching Assistant</h4>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-light transition-colors duration-300">
                Driving research in AI/ML systems while mentoring the next generation of engineers.
              </p>
            </div>
          </div>

          {/* Research Interests Card */}
          <div className="bg-white dark:bg-zinc-900/30 p-8 rounded-3xl border border-slate-200 dark:border-zinc-800/50 shadow-sm transition-colors duration-300">
            <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-6 flex items-center gap-3 transition-colors duration-300">
              <div className="p-2 bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400 rounded-xl">
                <Search size={20} />
              </div>
              Research Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Distributed Systems",
                "Cloud Computing",
                "Federated Learning",
                "Machine Learning",
                "Workflow Scheduling",
                "Resource Management",
                "Anomaly Detection",
                "AI/ML for Systems",
                "Software Systems",
                "High-Performance Computing (HPC)",
                "Large Language Models (LLMs)",
                "MLOps and Scalable ML Systems"
              ].map((interest, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-700 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300 rounded-lg text-xs font-medium transition-colors duration-300">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  // Helper to parse comma-separated skills into an array
  const parseSkills = (skillsString: string) => {
    return skillsString
      .replace('Expert in ', '')
      .replace('Familiar with ', '')
      .split(/[,.]/)
      .map(s => s.trim())
      .filter(s => s.length > 0);
  };

  return (
    <div>
      <SectionHeader title="Technical Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillGroup, index) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            key={index} 
            className="relative overflow-hidden bg-white dark:bg-zinc-900/40 p-8 rounded-[2rem] border border-slate-200 dark:border-zinc-800/50 hover:border-accent-200 dark:hover:border-accent-500/20 hover:shadow-md transition-all group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-accent-500/0 group-hover:bg-accent-500 transition-colors duration-300"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-200/60 text-accent-600 dark:bg-zinc-800 dark:text-accent-500 rounded-2xl flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-all duration-500">
                <SkillIcon name={skillGroup.icon} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 transition-colors duration-300">{skillGroup.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {parseSkills(skillGroup.skills).map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-0.5 bg-slate-200/60 text-slate-700 dark:bg-zinc-800/80 dark:text-zinc-300 rounded-md text-sm font-medium border border-transparent hover:border-slate-300 dark:hover:border-zinc-600 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SkillIcon({ name }: { name: string }) {
  switch (name) {
    case 'code': return <Code size={24} />;
    case 'layers': return <Layers size={24} />;
    case 'settings': return <Settings size={24} />;
    case 'database': return <Database size={24} />;
    case 'monitor': return <Monitor size={24} />;
    case 'server': return <Server size={24} />;
    default: return <Code size={24} />;
  }
}

function WorkSection() {
  return (
    <div>
      <SectionHeader title="Work Experience" />
      <div className="space-y-12">
        {workExperience.map((work, index) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={index} 
            className="relative pl-12 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-slate-200 dark:before:bg-zinc-800"
          >
            <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-accent-600 ring-8 ring-accent-100 dark:ring-accent-600/10"></div>
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 mb-1 transition-colors duration-300">{work.title}</h3>
                <div className="text-accent-600 dark:text-accent-500 font-semibold tracking-wide uppercase text-xs transition-colors duration-300">{work.institution}</div>
              </div>
              <div className="flex flex-col md:items-end gap-2">
                <span className="text-xs font-mono bg-slate-100 border border-slate-200 text-slate-600 dark:bg-zinc-900 dark:border-zinc-800 px-3 py-1 rounded-full dark:text-zinc-400 transition-colors duration-300">{work.date}</span>
                <span className="text-xs text-slate-500 dark:text-zinc-600 flex items-center gap-1 transition-colors duration-300">
                  <MapPin size={12} />
                  {work.location}
                </span>
              </div>
            </div>
            <ul className="space-y-1">
              {work.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-slate-600 dark:text-zinc-400 flex items-start gap-3 text-base font-light leading-relaxed transition-colors duration-300">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-zinc-700 shrink-0 transition-colors duration-300"></div>
                  {resp}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TeachingSection() {
  return (
    <div>
      <SectionHeader title="Teaching" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {teachingExperience.map((exp, index) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            key={index} 
            className="relative overflow-hidden bg-white dark:bg-zinc-900/30 p-6 rounded-[1.5rem] border border-slate-200 dark:border-zinc-800/50 flex flex-col shadow-sm transition-colors duration-300 group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-accent-500/0 group-hover:bg-accent-500 transition-colors duration-300"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-slate-100 text-accent-600 dark:bg-zinc-800 dark:text-accent-500 rounded-xl group-hover:bg-accent-500 group-hover:text-white transition-all duration-500">
                <BookOpen size={20} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest bg-accent-50 text-accent-600 border border-accent-200 dark:bg-accent-500/10 dark:text-accent-500 px-2 py-1 rounded-md dark:border-accent-500/20 transition-colors duration-300">
                {exp.period}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-1 transition-colors duration-300">{exp.course}</h3>
            <div className="text-sm text-slate-600 dark:text-zinc-500 font-medium mb-1 transition-colors duration-300">{exp.role}</div>
            <div className="text-xs text-slate-500 dark:text-zinc-600 mb-4 transition-colors duration-300">{exp.institution}</div>
            <div className="mt-auto pt-4 border-t border-slate-200 dark:border-zinc-800/50 text-sm text-slate-500 dark:text-zinc-400 italic leading-relaxed transition-colors duration-300">
              {exp.responsibilities}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PublicationsSection() {
  return (
    <div>
      <SectionHeader title="Publications" />
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={index} 
            className="relative overflow-hidden bg-white dark:bg-zinc-900/20 p-6 rounded-3xl border border-slate-200 dark:border-zinc-800/50 hover:shadow-md dark:hover:bg-zinc-900/40 dark:hover:border-zinc-700 transition-all group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-accent-500/0 group-hover:bg-accent-500 transition-colors duration-300"></div>
            {/* Top Row */}
            <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
              <div className="flex items-center gap-3">
                {pub.type && (
                  <span className="px-3 py-1 text-xs font-medium bg-slate-200/60 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300 rounded-full border border-slate-200 dark:border-zinc-700">
                    {pub.type}
                  </span>
                )}
                <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-zinc-500">
                  <Calendar size={14} />
                  {pub.year}
                </div>
              </div>
              
              {pub.doiUrl && (
                <a 
                  href={pub.doiUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 px-4 py-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  <ExternalLink size={14} />
                  View Paper
                </a>
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 leading-snug mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-500 transition-colors">
              {pub.title}
            </h3>

            {/* Authors & Journal */}
            <div className="space-y-1.5 mb-4">
              <div className="flex items-start gap-2 text-slate-600 dark:text-zinc-400 text-sm">
                <Users size={16} className="shrink-0 mt-0.5" />
                <span dangerouslySetInnerHTML={{ __html: pub.authors.replace('E. Saeedizade', '<span class="text-slate-900 dark:text-zinc-100 font-semibold">E. Saeedizade</span>') }} />
              </div>
              <div className="flex items-start gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                <FileText size={16} className="shrink-0 mt-0.5" />
                <span>{pub.journal}</span>
              </div>
            </div>

            {/* Description */}
            {pub.description && (
              <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                {pub.description}
              </p>
            )}

            {/* Tags */}
            {pub.tags && pub.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {pub.tags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-slate-200/60 text-slate-600 dark:bg-zinc-800/80 dark:text-zinc-400 rounded-md text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CertificatesSection() {
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number>(0);

  return (
    <div>
      <SectionHeader title="Certificates & Courses" />
      <div className="space-y-4">
        {certificates.map((category, index) => {
          const isOpen = openCategoryIndex === index;
          return (
            <div key={index} className="bg-white dark:bg-zinc-900/30 rounded-[2rem] border border-slate-200 dark:border-zinc-800/50 overflow-hidden transition-colors duration-300">
              <button 
                onClick={() => setOpenCategoryIndex(isOpen ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-3">
                  <div className="p-2 bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400 rounded-xl">
                    <Award size={20} />
                  </div>
                  {category.category}
                  <span className="text-sm font-normal text-slate-500 dark:text-zinc-500 bg-slate-100 dark:bg-zinc-800 px-2.5 py-0.5 rounded-full ml-2">
                    {category.items.length}
                  </span>
                </h3>
                <ChevronDown 
                  size={20} 
                  className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 border-t border-slate-100 dark:border-zinc-800/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {category.items.map((cert, certIndex) => (
                          <div 
                            key={certIndex} 
                            className="bg-slate-50 dark:bg-zinc-800/30 p-5 rounded-2xl border border-slate-200/50 dark:border-zinc-700/50 hover:border-accent-300 dark:hover:border-accent-500/30 hover:shadow-sm transition-all duration-300 flex flex-col group"
                          >
                            <h4 className="font-bold text-slate-900 dark:text-zinc-100 mb-1 line-clamp-2 transition-colors duration-300">{cert.title}</h4>
                            <div className="text-sm text-slate-600 dark:text-zinc-500 mb-3 transition-colors duration-300">{cert.institution}</div>
                            <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-200/50 dark:border-zinc-700/50">
                              <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-600 uppercase tracking-widest transition-colors duration-300">{cert.date}</span>
                              {cert.url && (
                                <a 
                                  href={cert.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-xs font-bold text-accent-600 dark:text-accent-500 hover:text-accent-700 dark:hover:text-accent-400 flex items-center gap-1.5 transition-colors duration-300"
                                >
                                  Verify
                                  <ExternalLink size={12} />
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AwardsSection() {
  return (
    <div className="space-y-16">
      <div>
        <SectionHeader title="Awards" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {awards.map((award, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              key={index} 
              className="group relative bg-white dark:bg-zinc-900/40 p-5 rounded-2xl border border-slate-200 dark:border-zinc-800/50 hover:border-accent-300 dark:hover:border-accent-500/30 hover:shadow-lg hover:shadow-accent-500/5 transition-all duration-300 overflow-hidden flex items-start gap-4"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-500/0 group-hover:bg-accent-500 transition-colors duration-300"></div>
              <div className="p-2.5 bg-accent-50 dark:bg-accent-500/10 text-accent-600 dark:text-accent-500 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Trophy size={20} />
              </div>
              <p className="text-slate-600 dark:text-zinc-300 text-sm leading-relaxed pt-1 transition-colors duration-300">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <SectionHeader title="Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              key={index} 
              className="group bg-white dark:bg-zinc-900/40 p-5 rounded-2xl border border-slate-200 dark:border-zinc-800/50 hover:border-accent-300 dark:hover:border-accent-500/30 hover:shadow-lg hover:shadow-accent-500/5 transition-all duration-300"
            >
              <h3 className="font-bold text-slate-900 dark:text-zinc-100 mb-2 flex items-center gap-3 transition-colors duration-300">
                <div className="w-8 h-8 rounded-lg bg-accent-50 dark:bg-accent-500/10 text-accent-600 dark:text-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star size={16} />
                </div>
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-500 leading-relaxed font-light transition-colors duration-300 pl-11">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
