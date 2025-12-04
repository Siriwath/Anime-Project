export interface Anime {
    id: number,
    title: {
        romaji?: string;
        english?: string;
    };
    coverImage?: {
        large?: string;
        extraLarge?: string;
        medium?: string;
    }
    description?: string;
    genres: string[];
    averageScore?: number;
    season?: string;
    format?: string;
}