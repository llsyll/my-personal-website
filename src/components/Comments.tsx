'use client';

import Giscus from '@giscus/react';

export default function Comments() {
    return (
        <div style={{ marginTop: 'var(--spacing-16)', borderTop: '1px solid var(--colors-border)', paddingTop: 'var(--spacing-8)' }}>
            <Giscus
                id="comments"
                repo="[YOUR_REPO_OWNER]/[YOUR_REPO_NAME]"
                repoId="[YOUR_REPO_ID]"
                category="Announcements"
                categoryId="[YOUR_CATEGORY_ID]"
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
