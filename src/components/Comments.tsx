'use client';

import Giscus from '@giscus/react';

export default function Comments() {
    return (
        <div style={{ marginTop: 'var(--spacing-16)', borderTop: '1px solid var(--colors-border)', paddingTop: 'var(--spacing-8)' }}>
            <Giscus
                id="comments"
                repo="llsyll/my-personal-website"
                repoId="R_kgDORGn4AA"
                category="Announcements"
                categoryId="DIC_kwDORGn4AM4C1wo8"
                mapping="pathname"
                term="Welcome to my blog!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="preferred_color_scheme"
                lang="zh-CN"
                loading="lazy"
            />
        </div>
    );
}
