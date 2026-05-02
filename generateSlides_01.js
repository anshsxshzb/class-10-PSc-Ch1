import fs from 'fs';

const slideHeader = `import { ReactNode } from 'react';
import { AlertCircle, BookOpen, AlertTriangle, Lightbulb, Landmark, Scale, Users, Activity } from 'lucide-react';

export type SlideData = {
  id: number;
  type: 'title' | 'content' | 'comparison' | 'interactive' | 'questions';
  title?: string;
  subtitle?: string;
  focus: string;
  isHighWeightage?: boolean;
  content?: ReactNode;
};

export const slides: SlideData[] = [
`;

fs.writeFileSync('src/data/slides.tsx', slideHeader);
