'use client';

import { useState, useEffect, useRef } from 'react';

type Props = {
    text: string;
    className?: string;
    speed?: number;
};

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export default function HackerText({ text, className, speed = 25 }: Props) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const iterationRef = useRef(0);

    const startScramble = () => {
        clearInterval(intervalRef.current as NodeJS.Timeout);
        iterationRef.current = 0;

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split('')
                    .map((char, index) => {
                        if (index < iterationRef.current) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join('')
            );

            if (iterationRef.current >= text.length) {
                clearInterval(intervalRef.current as NodeJS.Timeout);
            }

            iterationRef.current += 1 / 3;
        }, speed);
    };

    // Clean up on unmount
    useEffect(() => {
        return () => clearInterval(intervalRef.current as NodeJS.Timeout);
    }, []);

    return (
        <span
            className={className}
            onMouseEnter={startScramble}
            style={{ display: 'inline-block', cursor: 'default' }} // Fix layout storage
        >
            {displayText}
        </span>
    );
}
