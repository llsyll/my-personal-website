'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from '../app/portfolio/portfolio.module.css';

interface PortfolioItemProps {
    title: string;
    description: string;
    slug: string;
    image?: string;
    basePath?: string;
}

export default function PortfolioItem({ title, description, slug, image, basePath = '' }: PortfolioItemProps) {
    const itemRef = useRef<HTMLAnchorElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.5,
                rootMargin: '-20% 0px -20% 0px'
            }
        );

        const currentRef = itemRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const displayImage = image
        ? (image.startsWith('/') ? `${basePath}${image}` : image)
        : null;

    return (
        <Link
            ref={itemRef}
            href={`/portfolio/${slug}`}
            className={`${styles.item} ${isVisible ? styles.active : ''}`}
        >
            {displayImage ? (
                <img
                    src={displayImage}
                    alt={title}
                    className={styles.image}
                />
            ) : (
                <div className={styles.placeholder}>
                    {title.substring(0, 2).toUpperCase()}
                </div>
            )}
        </Link>
    );
}
