import axios from "axios";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export interface FetchResponseData {
  results: Movie[];
}

export default axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "5054016756784fdb1c14d5a803573027"
    }
})

