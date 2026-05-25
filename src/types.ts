export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  tags: string[];
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  stats?: { label: string; value: string }[];
  // Interactive mock simulation data
  mockType: 'analytics' | 'engine' | 'commerce' | 'database';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
  level: number; // 0 to 100
  iconName: string;
  duration: string; // e.g. "4 anos"
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  avatar: string;
}

