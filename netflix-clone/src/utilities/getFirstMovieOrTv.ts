import { All } from "../entities/all";


const getFirstMovieOrTv = (data: All[]) => {
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].media_type !== "person") {
            return data[i]
        }
    }

    return null
}

export default getFirstMovieOrTv;