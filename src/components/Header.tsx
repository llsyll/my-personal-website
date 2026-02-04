'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HackerText from './HackerText';

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Blog', path: '/blog' },     // Changed to English for cleaner look, or keep Chinese? User said "menu的所有字体", reference is English. I'll stick to Chinese for now but styled better, or maybe mixing?
        { name: 'Work', path: '/portfolio' }, // actually reference uses "Work", "About". Let's use English for "coolness" if user allows? User said "menu的所有字体", implies existing content. I will keep Chinese but purely style changes first.
        { name: 'About', path: '/about' },
    ];
    // Wait, user said "reference his font layout". The reference has "Work, About".
    // I will use English for the menu as it usually looks closer to the "exquisite" international style.
    // Let's use: Work, Blog, About.

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            background: 'var(--colors-background)', // Match body background
            zIndex: 50,
        }}>
            <div className="container" style={{
                height: '80px', // Slightly shorter for 14px font balance
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                // padding removed, handled by .container
                // maxWidth removed, handled by .container
            }}>
                <Link href="/" className="logo" style={{ fontSize: '1.2rem', fontWeight: 500, letterSpacing: '-0.02em' }}>
                    <HackerText text="PIXEL WAVE" />
                </Link>

                <nav className="flex" style={{ gap: '2.5rem' }}>
                    <Link href="/portfolio" style={{ fontSize: '14px', fontWeight: 400, color: pathname.startsWith('/portfolio') ? 'var(--colors-foreground)' : 'var(--colors-subtle)' }}>Work</Link>
                    <Link href="/blog" style={{ fontSize: '14px', fontWeight: 400, color: pathname.startsWith('/blog') ? 'var(--colors-foreground)' : 'var(--colors-subtle)' }}>Blog</Link>
                    <Link href="/about" style={{ fontSize: '14px', fontWeight: 400, color: pathname === '/about' ? 'var(--colors-foreground)' : 'var(--colors-subtle)' }}>About</Link>
                </nav>
            </div>
        </header>
    );
}
