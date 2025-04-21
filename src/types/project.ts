export interface Project {
  id: string;
  name: string;
  location: string;
  capacity: string;
  category: 'commercial' | 'industrial' | 'residential' | 'ground-mounted' | 'solar-pump';
  image: string;
  description?: string;
}