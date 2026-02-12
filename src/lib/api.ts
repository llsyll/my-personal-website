import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BASE_PATH } from './constants';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getPostSlugs() {
    if (!fs.existsSync(postsDirectory)) return [];
    return fs.readdirSync(postsDirectory);
}

export function getProjectSlugs() {
    if (!fs.existsSync(projectsDirectory)) return [];
    return fs.readdirSync(projectsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    return getItemBySlug(slug, postsDirectory, fields);
}

export function getProjectBySlug(slug: string, fields: string[] = []) {
    return getItemBySlug(slug, projectsDirectory, fields);
}

function getItemBySlug(slug: string, directory: string, fields: string[] = []) {
    const realSlug = decodeURIComponent(slug).replace(/\.md$/, '');
    const fullPath = path.join(directory, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`Item not found: ${realSlug} in ${directory}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    type Items = {
        [key: string]: string | string[] | undefined;
    };

    const items: Items = {};

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (typeof data[field] !== 'undefined') {
            let val = data[field];
            // Decap CMS/Gray-matter parses dates as Date objects
            // We need to serialize them to strings for Next.js consistency
            if (val instanceof Date) {
                val = val.toISOString();
            }
            items[field] = val;
        }
    });

    return items as any;
}

export function getAllPosts(fields: string[] = []) {
    const slugs = getPostSlugs();
    const posts = slugs
        .filter((slug) => slug.endsWith('.md'))
        .map((slug) => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export function getAllProjects(fields: string[] = []) {
    const slugs = getProjectSlugs();
    const projects = slugs
        .filter((slug) => slug.endsWith('.md'))
        .map((slug) => getProjectBySlug(slug, fields))
        // Projects might not have date, sort by order or title? Let's sort by title needed.
        // Or just return as is.
        .sort((p1, p2) => (p1.title > p2.title ? 1 : -1));
    return projects;
}

export async function markdownToHtml(markdown: string) {
    const result = await remark().use(html).process(markdown);
    return result.toString();
}
