
const getFullPosterPath = (posterPath: string, posterSize?: string) => {
    if (posterSize) return `https://image.tmdb.org/t/p/w${posterSize}${posterPath}`
    
    return `https://image.tmdb.org/t/p/original${posterPath}`
} 

export default getFullPosterPath