'use client';

import {ReactNode, useState} from 'react';
import Link from 'next/link';

export const LINKS = [
    { href: "/", label: "Főoldal" },
    { href: "/ontozorendszer", label: "Öntözőrendszer" },
    { href: "/kertkarbantartas", label: "Kertkarbantartás" },
    { href: "/zoldfal", label: "Zöldfal" },
    { href: "/mezogazdasagi-ontozes", label: "Mezőgazdasági öntözőrendszer" },
    { href: "#idopont", label: "Időpontfoglalás" },
    { href: "#kapcsolat", label: "Kapcsolat" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 flex flex-col md:flex-row items-stretch justify-center bg-[var(--green)] shadow-md">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-white md:hidden focus:outline-none"
                aria-expanded={isOpen}
            >
                <span className="font-medium">Minden ami öntözés</span>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                    {isOpen ? '✕' : '☰'}
                </span>
            </button>

            <div className={`
                grid transition-[grid-template-rows] duration-300 ease-in-out
                ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} 
                md:flex md:grid-rows-none w-full md:w-auto
            `}>
                <div className="overflow-hidden flex flex-col md:flex md:flex-row md:overflow-visible items-center">
                    {LINKS.map((link) => (
                        <NavLink key={link.href} href={link.href}>
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
    return (
        <Link
            href={href}
            className="w-full text-center md:w-auto px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-black/10 md:py-4"
        >
            {children}
        </Link>
    );
}
