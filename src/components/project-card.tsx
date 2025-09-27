import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { formatCurrency } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const placeholderImage = PlaceHolderImages.find((img) => img.id === project.imageId);

  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          {placeholderImage && (
            <div className="aspect-video overflow-hidden">
              <Image
                src={placeholderImage.imageUrl}
                alt={placeholderImage.description}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={placeholderImage.imageHint}
              />
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="font-headline text-2xl mb-2">{project.name}</CardTitle>
          <p className="text-muted-foreground">{project.tagline}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-between items-center">
          <Badge variant="secondary" className="text-lg font-bold py-1 px-3">
            {formatCurrency(project.price)}
          </Badge>
          <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
