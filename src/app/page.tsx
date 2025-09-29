import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/placeholder-data';
import { ArrowRight, Code, Palette, Rocket, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2M12.04 20.12c-1.5 0-2.95-.41-4.22-1.16l-.3-.18-3.12.82.83-3.04-.2-.32a8.13 8.13 0 0 1-1.26-4.38c0-4.54 3.68-8.21 8.21-8.21s8.21 3.68 8.21 8.21-3.68 8.21-8.21 8.21m4.52-6.13c-.25-.12-1.47-.72-1.7-.82s-.39-.12-.55.12c-.16.25-.64.82-.79.99s-.29.19-.55.06c-.25-.12-1.07-.39-2.04-1.26s-1.45-1.92-1.61-2.24c-.16-.32-.02-.48.11-.61s.25-.29.38-.44a1.38 1.38 0 0 0 .25-.42c.03-.12-.02-.24-.08-.36s-.55-1.32-.76-1.82c-.2-.5-.41-.43-.55-.43h-.48c-.16 0-.42.06-.64.3s-.86.84-.86 2.05c0 1.21.88 2.37 1 2.53s1.74 2.65 4.22 3.72c.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18s-.24-.18-.48-.3z" />
    </svg>
  );
}

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
                <p className="text-muted-foreground">
                ¿Tienes dudas? Visita nuestra sección de preguntas frecuentes o contáctanos para más información abajo de todo esta nuestras redes y numero de whatsapp.
                </p>
              </div>
          </div>
          <div className="text-center mt-20">
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white text-lg py-6 px-10">
              <Link href="https://wa.me/5491144393556" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                Chatear por WhatsApp
              </Link>
            </Button>
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
        </div>
      </section>
    </div>
  );
}
