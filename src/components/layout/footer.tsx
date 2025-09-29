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
            <path fill="#009EE3" d="M10.7,39.1c0.1,1.3,0.3,2.6,0.6,3.9c2.8,13.4,15.8,22.3,29.2,19.5c4.3-0.9,8.3-3,11.5-6 c1.3-1.2,2.4-2.5,3.5-3.9c0.3-0.5,0.7-0.9,1.1-1.4c0.1-0.1,0.2-0.2,0.2-0.3c0.9-1.1,1.8,2.2,2.5-3.4c0.2-0.3,0.4-0.6,0.5-0.9 c1.8-3.2,2.7-6.8,2.6-10.5c-0.1-4.9-2.1-9.4-5.4-12.9C52.9,2.8,47.5,0.7,41.7,0.7c-6.1,0-11.7,2.3-15.8,6.6 C12.2,24,9.2,32.8,10.7,39.1z"></path>
        </svg>
    )
}

function VisaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 212.4 69.1"
        width="64" height="64"
        {...props}>
        <g>
            <path fill="#1A1F71" d="M162.7,69.1H141l21.3-69.1h21.6L162.7,69.1z M52.9,0l-52,69.1H21.4L64,0H52.9z M67.4,0L46.1,69.1h21.4l7-18.3h33.4l4.2,18.3h20.1L120.3,0H67.4z M104.9,40.1H80.2L92.6,4.9L104.9,40.1z M201.8,4.1c-3.1-2.1-7.8-4.1-13.6-4.1c-13.3,0-23.2,7.3-23.3,18c0,8.1,7.2,12.5,12.7,15.2c5.6,2.7,7.4,4.5,7.4,6.5c0,2.8-3.4,4.1-6.9,4.1c-4.6,0-7.8-1.2-10-2.6l-2,19.4c3.2,1.6,9.2,3,15.4,3c14.7,0,23.5-7.4,23.6-18.7c0-6.8-4.4-11.4-11.9-15c-5-2.4-8.1-4.2-8.1-6.4c0-2.1,2.4-3.8,6.6-3.8c3.8,0,6.5,1,8.8,2.2L201.8,4.1z"/>
        </g>
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
