export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: string;
  features: string[];
  imageId: string;
  encoding?: string;
}
