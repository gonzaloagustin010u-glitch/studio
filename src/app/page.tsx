import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/placeholder-data';
import { ArrowRight, Code, Palette, Rocket, LifeBuoy, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Code className="w-10 h-10 text-accent" />,
    title: 'Proyectos de Programación',
    description: 'Soluciones de software a medida, robustas y escalables para necesidades complejas.',
  },
  {
    icon: <Palette className="w-10 h-10 text-accent" />,
    title: 'Diseños Web',
    description: 'Plantillas y diseños web modernos y atractivos para potenciar tu presencia online.',
  },
  {
    icon: <Rocket className="w-10 h-10 text-accent" />,
    title: 'Despliegue Rápido',
    description: 'Productos listos para usar que te permiten lanzar tu proyecto en tiempo récord.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-background text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-30"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0% 100%)',
          }}
        ></div>
        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none text-primary">
              Ventas de páginas web para tu negocio
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Creamos soluciones digitales a medida para potenciar tu negocio. Explora nuestra selección de proyectos y diseños listos para usar.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#projects">
                  Ver Proyectos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/sell">
                  Vender Ahora
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-20 md:py-28 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">Nuestros Servicios</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ofrecemos una gama de productos digitales para satisfacer todas tus necesidades.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-10 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-background rounded-full border">
                  {service.icon}
                </div>
                <h3 className="font-headline text-2xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
             <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-background rounded-full border">
                  <HelpCircle className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-headline text-2xl font-bold">Preguntas y Consultas</h3>
                <p className="text-muted-foreground">¿Tienes dudas? Visita nuestra sección de preguntas frecuentes o contáctanos para más información abajo de todo esta nuestras redes y numero de whatsapp.</p>
              </div>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full py-20 md:py-28 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">Proyectos Destacados</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre una selección curada de proyectos y diseños de primer nivel de creadores talentosos.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
           <div className="text-center mt-20">
            <Button asChild size="lg" variant="outline" className="text-lg py-6 px-10">
              <Link href="/#projects">
                Ver Todos los Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
