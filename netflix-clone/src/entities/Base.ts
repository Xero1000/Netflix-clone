// Properties shared between All, Movie, and Tv entities
interface Base {
  id: number;
  backdrop_path: string;
  media_type: string;
  overview: string;
  vote_average: number;
  genre_ids: number[];  
}