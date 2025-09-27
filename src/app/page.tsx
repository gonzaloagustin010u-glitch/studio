import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/placeholder-data';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-card border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Monetize Your Masterpieces
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  CodeCanvas is the ultimate marketplace for developers. Turn your programming projects into profit and discover high-quality code from a global community.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/sell">
                    Start Selling Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#projects">
                    Explore Projects
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
               <div className="w-full max-w-md p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl shadow-lg border border-primary/20">
                    <pre className="text-sm text-foreground/80 overflow-x-auto p-4 bg-background/50 rounded-lg"><code>
<span className="text-purple-400">const</span> <span className="text-blue-400">project</span> = {"{"}
  <span className="text-red-400">name</span>: <span className="text-green-400">'My Awesome App'</span>,
  <span className="text-red-400">author</span>: <span className="text-green-400">'You'</span>,
  <span className="text-red-400">price</span>: <span className="text-yellow-400">49.99</span>,
  <span className="text-red-400">forSale</span>: <span className="text-blue-400">true</span>
{"}"};

<span className="text-purple-400">marketplace.</span><span className="text-yellow-400">list</span>(project);
<span className="text-gray-500">// Your journey begins...</span>
                    </code></pre>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover a curated selection of top-tier projects from talented developers around the world.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
