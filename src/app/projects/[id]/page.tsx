import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ShoppingCart, Code, Layers } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const placeholderImage = PlaceHolderImages.find((img) => img.id === project.imageId);

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="aspect-video md:aspect-square">
          {placeholderImage && (
            <div className="w-full h-full overflow-hidden rounded-lg border shadow-lg">
              <Image
                src={placeholderImage.imageUrl}
                alt={placeholderImage.description}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                data-ai-hint={placeholderImage.imageHint}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <Badge variant="outline" className="mb-2">{project.category}</Badge>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">{project.name}</h1>
            <p className="text-xl text-muted-foreground">{project.tagline}</p>
          </div>
          
          <p className="text-lg">
            {project.description}
          </p>


          <Separator />

          <div className="space-y-4">
             <h3 className="text-xl font-semibold">Características Clave:</h3>
             <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Layers className="h-4 w-4" />
              <span>Categoría: <strong>{project.category}</strong></span>
              {project.encoding && (
                <>
                  <Separator orientation="vertical" className="h-4" />
                  <Code className="h-4 w-4" />
                  <span>Codificación: <strong>{project.encoding}</strong></span>
                </>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}
