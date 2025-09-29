import { Code, Github, Instagram } from 'lucide-react';
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

function MercadoPagoIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
            width="64" height="64"
            {...props}
        >
            <path fill="#00B1EA" d="M85.3,56.9c-0.1-1.3-0.3-2.6-0.6-3.9c-2.8-13.4-15.8-22.3-29.2-19.5c-4.3,0.9-8.3,3-11.5,6 c-1.3,1.2-2.4,2.5-3.5,3.9c-0.3,0.5-0.7,0.9-1.1,1.4c-0.1,0.1-0.2,0.2-0.2,0.3c-0.9,1.1-1.8,2.2-2.5,3.4c-0.2,0.3-0.4,0.6-0.5,0.9 c-1.8,3.2-2.7,6.8-2.6,10.5c0.1,4.9,2.1,9.4,5.4,12.9c3.9,4.1,9.3,6.2,15.1,6.2c6.1,0,11.7-2.3,15.8-6.6 C82.8,75.2,85.8,66.4,85.3,56.9z"></path>
            <path fill="#009EE3" d="M10.7,39.1c0.1,1.3,0.3,2.6,0.6,3.9c2.8,13.4,15.8,22.3,29.2,19.5c4.3-0.9,8.3-3,11.5-6 c1.3-1.2,2.4-2.5,3.5-3.9c0.3-0.5,0.7-0.9,1.1-1.4c0.1-0.1,0.2-0.2,0.2-0.3c0.9-1.1,1.8-2.2,2.5-3.4c0.2-0.3,0.4-0.6,0.5-0.9 c1.8-3.2,2.7-6.8,2.6-10.5c-0.1-4.9-2.1-9.4-5.4-12.9C52.9,2.8,47.5,0.7,41.7,0.7c-6.1,0-11.7,2.3-15.8,6.6 C12.2,24,9.2,32.8,10.7,39.1z"></path>
        </svg>
    )
}

function VisaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
        width="64" height="64"
        {...props}>
        <path fill="#1A1F71" d="M1.3,3.79a1.28,1.28,0,0,1,1.28-1.28H21.43a1.28,1.28,0,0,1,1.28,1.28v2.6H1.3Z"/>
        <path fill="#FBBF24" d="M1.3,17.61a1.28,1.28,0,0,0,1.28,1.28H21.43a1.28,1.28,0,0,0,1.28-1.28v-2.6H1.3Z"/>
        <path fill="#fff" d="M1.3,6.39H22.7V15H1.3Z"/>
        <path fill="#1A1F71" d="M9.31,13.31l-1.3-6.13H6.48l-2,6.13H5.85l.39-1.2h2L8.52,13.31ZM6.3,11.23,7.2,8.15l.3,1.38.39,1.7Z"/>
        <path fill="#1A1F71" d="M14.65,7.18h1.56l-1,6.13H13.62Zm-1.89.8L12.05,11a5.61,5.61,0,0,0,.45-2.2,2.1,2.1,0,0,0-2.31-2.22,3,3,0,0,0-2.68,1.52L8.29,7.39A4.14,4.14,0,0,1,11,6a3.34,3.34,0,0,1,3.48,3.22,4.86,4.86,0,0,1-.6,2.24l.87,1.86Z"/>
        <path fill="#1A1F71" d="M19.46,10.63a1.59,1.59,0,0,1,1.44-.45,1,1,0,0,1,.81.8,1.29,1.29,0,0,1-1.3,1.4,1.48,1.48,0,0,1-1.39-1.12l-1.22,1.3A2.88,2.88,0,0,0,19.3,13a2.63,2.63,0,0,0,2.68-2.67,2.5,2.5,0,0,0-2.58-2.62,2.63,2.63,0,0,0-2.53,1.82Z"/>
    </svg>
  )
}

function MasterCardIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="64" height="64"
            {...props}
        >
            <circle cx="8" cy="12" r="7" fill="#EA001B"></circle>
            <circle cx="16" cy="12" r="7" fill="#F79E1B"></circle>
            <path d="M12,12a7,7,0,0,1,0-7a7,7,0,0,0,0,7Z" fill="#FF5F00"></path>
        </svg>
    )
}

function DolarAppIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            width="64" height="64"
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            {...props}
        >
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
    )
}

function EfectivoIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            width="64" height="64"
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            {...props}
        >
            <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
            <circle cx="12" cy="12" r="3"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
        </svg>
    )
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container flex flex-col items-center justify-between gap-8 py-8">
        <div className="w-full flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-col items-center gap-2 text-center md:text-left md:items-start">
                <div className="flex items-center space-x-2">
                    <Code className="h-6 w-6 text-primary" />
                    <span className="font-bold">gvnzza programmer</span>
                </div>
                <p className="text-sm text-muted-foreground">
                    &copy; {year} gvnzza programmer. Todos los derechos reservados.
                </p>
            </div>
            <div className='flex flex-col items-center md:items-end gap-4'>
                <p className="text-sm text-muted-foreground">¡No dudes en contactarnos!</p>
                <div className="flex items-center space-x-6">
                <Link href="https://wa.me/5491144393556" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
                    <WhatsAppIcon className="h-6 w-6" />
                    <span className="sr-only">WhatsApp</span>
                </Link>
                <Link href="https://instagram.com/gvnzzaprogrammer" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">Github</span>
                </Link>
                </div>
            </div>
        </div>

        <div className="w-full border-t border-border pt-8">
            <h3 className="text-center text-lg font-semibold text-muted-foreground mb-4">Métodos de Pago</h3>
            <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <EfectivoIcon className="h-8 w-8" />
                    <span>Efectivo</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <MercadoPagoIcon className="h-8 w-auto" />
                    <span>MercadoPago</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <MasterCardIcon className="h-8 w-auto" />
                    <span>MasterCard</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <VisaIcon className="h-8 w-auto" />
                    <span>Visa</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <DolarAppIcon className="h-8 w-8" />
                    <span>DolarApp</span>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
