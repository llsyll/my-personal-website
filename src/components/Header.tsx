'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { name: '文章', path: '/blog' },
        { name: '作品', path: '/portfolio' },
        { name: '关于', path: '/about' },
    ];

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 50,
            borderBottom: '1px solid var(--colors-border)'
        }}>
            <div className="container" style={{
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Link href="/" className="logo">
                    P I X E L - W A V E
                </Link>

                <nav className="flex" style={{ gap: 'var(--spacing-8)' }}>
                    {navItems.map((item) => {
                        const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                style={{
                                    color: isActive ? 'var(--colors-foreground)' : 'var(--colors-subtle)',
                                    fontSize: '0.95rem',
                                    fontWeight: 500
                                }}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
