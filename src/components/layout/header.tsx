'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code, Menu, Monitor, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import * as React from 'react';

const navLinks: { href: string; label: string }[] = [];

function GVLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      width="150" 
      height="50" 
      viewBox="0 0 150 150"
      fill="currentColor"
      className="text-primary"
      {...props}
    >
      <g transform="translate(10, 10)">
        {/* Icon: Monitor with code and pencil */}
        <g transform="translate(80, 0)">
          <path d="M12 11.5v-5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M12 11.5h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M18 11.5v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M14 14.5h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          {/* Code icon inside monitor */}
          <path d="m15 7-2 2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="m21 7 2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

          {/* Pencil Icon */}
          <g transform="translate(20, 5) scale(1.2)">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </g>
        </g>
        
        {/* Text: GV */}
        <text x="0" y="70" fontFamily="Playfair Display, serif" fontSize="50" fontWeight="bold">G</text>
        <text x="45" y="70" fontFamily="Playfair Display, serif" fontSize="50" fontWeight="bold">V</text>

        {/* Text: WEB DEVELOPER & DESIGNER */}
        <text x="0" y="95" fontFamily="PT Sans, sans-serif" fontSize="12">WEB DEVELOPER</text>
        <text x="35" y="110" fontFamily="PT Sans, sans-serif" fontSize="12">& DESIGNER</text>
      </g>
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GVLogo />
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Alternar Menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <GVLogo />
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'transition-colors hover:text-foreground',
                      pathname === link.href ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
           {/* Future elements can go here */}
        </div>
      </div>
    </header>
  );
}
