'use client';

import { Github, Twitter, Mail } from 'lucide-react';
// Note: Lucide doesn't have WeChat or Behance by default, using placeholders or text for now, or feather icons?
// Actually Lucide usually has generic icons. I will use what's available or SVGs for specific ones if needed.
// For Behance and WeChat, I might need custom SVGs or just explicit text/icons.
// Let's use SVGs for WeChat/Behance to be safe and "Behance" is important for the user.

const SocialIcons = () => {
    return (
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginTop: '1.5rem' }}>
            {/* WeChat - Custom SVG */}
            <a href="#" className="social-icon" aria-label="WeChat">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 10C17 13.31 14.31 16 11 16C10.5 16 10.03 15.93 9.58 15.8L7 17.5V15.5C5.25 14.65 4 12.96 4 11C4 7.69 6.69 5 10 5C13.31 5 17 7.69 17 10Z" />
                    <path d="M21 16.5C21 18.43 19.43 20 17.5 20C17.18 20 16.87 19.95 16.58 19.86L15 21V19.5C14.07 19.11 13.43 18.25 13.15 17.25C13.88 17.41 14.65 17.5 15.5 17.5C18.54 17.5 21 15.04 21 12C21 11.5 20.93 11 20.8 10.54C21.55 11.05 22 11.95 22 13C22 14.36 21.2 15.57 20 16.2L21 16.5Z" />
                </svg>
            </a>

            {/* X / Twitter */}
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)">
                <Twitter size={24} />
            </a>

            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <Github size={24} />
            </a>

            {/* Behance - Custom SVG or search for it. Often simpler to use an SVG path */}
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Behance">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 13H14" />
                    <path d="M19 10H14" />
                    <path d="M2 13H10" />
                    <path d="M2 10H10" />
                    {/* Simplified placeholder for Behance unique text logo vibe */}
                    <rect x="2" y="7" width="20" height="10" rx="2" style={{ opacity: 0.1 }} />
                    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="8" fill="currentColor">Be</text>
                </svg>
            </a>

            {/* Mail */}
            <a href="mailto:your@email.com" className="social-icon" aria-label="Email">
                <Mail size={24} />
            </a>

            <style jsx>{`
        .social-icon {
          color: var(--colors-subtle);
          transition: color 0.2s, transform 0.2s;
        }
        .social-icon:hover {
          color: var(--colors-foreground);
          transform: translateY(-2px);
        }
      `}</style>
        </div>
    );
};

export default SocialIcons;
