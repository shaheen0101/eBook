export interface Book {
    id:number;
    title: string;
    author: string;
    category: string;
    pages:number;
    perPageContent?: string[];
    progress?: string;
}