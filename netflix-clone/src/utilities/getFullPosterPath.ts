
const POSTER_SIZE = "w300"

const getFullPosterPath = (posterPath: string) => {
    return `https://image.tmdb.org/t/p/original${posterPath}`
} 

export default getFullPosterPath