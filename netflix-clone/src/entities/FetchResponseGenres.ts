export interface Genre {
    id: number;
    name: string;
}

export interface FetchResponseGenres {
    genres: Genre[]
}