export interface Anime {
    id: number,
    title: {
        romanji?: string;
        english?: string;
    };
    description?: string;
    genres: string[];
    averageScore?: number;
    season?: string;
    format?: string;
}