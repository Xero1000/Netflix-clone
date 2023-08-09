import axios, { AxiosRequestConfig } from "axios";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export interface FetchResponseData<T> {
  results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "5054016756784fdb1c14d5a803573027"
    }
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponseData<T>>(this.endpoint, config)
      .then(res => res.data)
  }
}

export default APIClient

