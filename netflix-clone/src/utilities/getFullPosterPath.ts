
const POSTER_SIZE = "w500"

const getFullPosterPath = (posterPath: string) => {
    return `https://image.tmdb.org/t/p/${POSTER_SIZE}${posterPath}`
} 

export default getFullPosterPath