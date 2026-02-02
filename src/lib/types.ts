export type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags?: string[];
    content: string;
};

export type Project = {
    slug: string;
    title: string;
    description: string;
    image?: string;
    link?: string;
    content: string;
};
