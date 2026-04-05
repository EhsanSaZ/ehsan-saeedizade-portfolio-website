declare module '*.png';

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: string;
}

export interface WorkExperience {
  date: string;
  title: string;
  institution: string;
  location: string;
  responsibilities: string[];
}

export interface TeachingExperience {
  course: string;
  period: string;
  role: string;
  institution: string;
  responsibilities: string;
}

export interface Publication {
  authors: string;
  title: string;
  journal: string;
  year: string;
  doi?: string;
  doiUrl?: string;
  type?: string;
  description?: string;
  tags?: string[];
}

export interface Certificate {
  title: string;
  institution: string;
  date: string;
  url?: string;
}

export interface CertificateCategory {
  category: string;
  items: Certificate[];
}

export interface Award {
  description: string;
}

export interface Service {
  title: string;
  description: string;
}
