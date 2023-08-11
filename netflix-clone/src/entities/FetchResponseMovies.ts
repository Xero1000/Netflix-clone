export interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
}

export interface FetchResponseMovies {
  results: Movie[];
}
