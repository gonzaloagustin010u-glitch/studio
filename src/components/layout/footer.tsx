import { Code, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}


export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <Code className="h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">
            &copy; {year} CodeCanvas. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://wa.me/5491144393556" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
            <WhatsAppIcon className="h-6 w-6" />
            <span className="sr-only">WhatsApp</span>
          </Link>
          <Link href="https://instagram.com/itsgonza_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
            <Instagram className="h-6 w-6" />
             <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">Github</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
