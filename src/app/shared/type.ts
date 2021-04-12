export interface CategoryListResponse {
    pages: Category[];
}

export interface Category {
    title: string;
    slug: string;
    blocks: Blocks[];
}

export interface Blocks {
    type: string;
    headline: string;
    subhead: string;
    cta: string;
    background: string;
}
