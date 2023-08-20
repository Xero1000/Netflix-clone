export interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  media_type: string;
  vote_average: number;
  genre_ids: number[];
}
