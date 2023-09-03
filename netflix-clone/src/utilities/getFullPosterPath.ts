// Retrieving the backdrop image
// If a poster size is not provided, the original backdrop image is returned
const getFullPosterPath = (posterPath: string, posterSize?: string) => {
    if (posterSize) return `https://image.tmdb.org/t/p/w${posterSize}${posterPath}`
    
    return `https://image.tmdb.org/t/p/original${posterPath}`
} 

export default getFullPosterPath