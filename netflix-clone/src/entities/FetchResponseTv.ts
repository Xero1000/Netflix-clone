export interface Tv {
    id: number;
    name: string;
    backdrop_path: string;
  }
  
  export interface FetchResponseTv {
    results: Tv[];
  }