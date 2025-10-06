'use client';

import Link from 'next/link';
import { Code, Monitor, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as React from 'react';

const navLinks: { href: string; label: string }[] = [];

function GVLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      width="50" 
      height="50" 
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      className="text-primary"
      {...props}
    >
      <circle cx="50" cy="50" r="45" strokeWidth="4"/>
      
      {/* GV Text */}
      <text x="18" y="85" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="currentColor" stroke="none">G</text>
      <text x="50" y="85" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="currentColor" stroke="none">V</text>

      {/* Monitor Icon */}
      <g strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* Screen */}
        <path d="M42 22 H68 C69 22 70 23 70 24 V40 C70 41 69 42 68 42 H42 C41 42 40 41 40 40 V24 C40 23 41 22 42 22 Z" />
        {/* Stand */}
        <path d="M50 42 V 48" />
        <path d="M45 48 H 65" />
        {/* Code inside screen */}
        <g strokeWidth="2.5">
          <path d="M50 29 L 47 32 L 50 35" />
          <path d="M60 29 L 63 32 L 60 35" />
        </g>
      </g>
      
      {/* Pencil Icon */}
      <g transform="translate(65, 18) rotate(15)">
        <path d="M0 0 L15 0" strokeWidth="3" strokeLinecap="round" />
        <path d="M15 0 L12 -2 L12 2 Z" fill="currentColor" strokeWidth="0" />
        <rect x="0" y="-3" width="10" height="6" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-sm supports-[backdrop-filter]:bg-background/30">
      <div className="container flex h-20 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-4">
            <GVLogo />
            <span className="font-bold text-accent text-lg hidden sm:inline-block">gvnzza programmer</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
           {/* Future elements can go here */}
        </div>
      </div>
    </header>
  );
}
