import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/placeholder-data';
import { ArrowRight, Code, Palette, Rocket } from 'lucide-react';
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
      <section className="w-full py-24 md:py-32 lg:py-40 bg-background border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-primary">
                  Ventas de páginas web para tu negocio
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Creamos soluciones digitales a medida para potenciar tu negocio. Explora nuestra selección de proyectos y diseños listos para usar.
                </p>
              </div>
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
            <div className="hidden lg:flex items-center justify-center">
               <div className="w-full max-w-md p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl shadow-lg border border-primary/20">
                    <pre className="text-sm text-foreground/80 overflow-x-auto p-4 bg-background/50 rounded-lg"><code>
<span style={{color: '#C38FFF'}}>const</span> <span style={{color: '#79B8FF'}}>sitioWeb</span> = {"{"}
  <span style={{color: '#FF9B9B'}}>nombre</span>: <span style={{color: '#A6E22E'}}>'Mi Landing Page'</span>,
  <span style={{color: '#FF9B9B'}}>diseñador</span>: <span style={{color: '#A6E22E'}}>'CodeCanvas'</span>,
  <span style={{color: '#FF9B9B'}}>servicios</span>: [
    <span style={{color: '#A6E22E'}}>'Diseño UI/UX'</span>, 
    <span style={{color: '#A6E22E'}}>'Desarrollo'</span>, 
    <span style={{color: '#A6E22E'}}>'SEO'</span>
  ],
  <span style={{color: '#FF9B9B'}}>lanzamiento</span>: <span style={{color: '#79B8FF'}}>true</span>
{"}"};

<span style={{color: '#C38FFF'}}>mercado.</span><span style={{color: '#FFD700'}}>publicar</span>(sitioWeb);
<span style={{color: '#8A93A0'}}>// Tu negocio despega...</span>
                    </code></pre>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-20 md:py-28 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Nuestros Servicios</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ofrecemos una gama de productos digitales para satisfacer tus necesidades.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="bg-background border-border/50 hover:border-accent transition-colors">
                <CardHeader className="flex flex-col items-center text-center gap-4">
                  {service.icon}
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="w-full py-20 md:py-28 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Proyectos Destacados</h2>
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
           <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline">
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
