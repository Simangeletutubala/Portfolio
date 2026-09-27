export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'Frontend' | 'Full-Stack' | 'EdTech';
  features: string[];
  transferableStrengths: string[];
  metricsOrOutcome: string;
  githubUrl: string;
  demoType: 'mathspark' | 'freshbite' | 'fitnesstracker';
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    focus: string;
  }[];
}

export interface JourneyMilestone {
  year: string;
  role: string;
  organization: string;
  type: 'education' | 'internship' | 'training' | 'development' | 'milestone';
  description: string;
  skillsGained: string[];
}

export interface TransferableCompetency {
  title: string;
  subtitle: string;
  description: string;
  developerApplication: string;
  iconName: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year?: string;
  field: string;
  highlights: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  badge: string;
  skillsVerified: string[];
}
