export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  type: 'residential' | 'commercial' | 'industrial' | 'solar pump';
  location: string;
  outcome: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  deadline: string;
}