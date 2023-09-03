import { All } from "../entities/All";

// Retrieve the first movie or tv show 
const getFirstMovieOrTv = (data: All[]) => {
    
    // check to make sure a person is not returned
    for (let i = 0; i < data.length; i++) {
        if (data[i].media_type !== "person") {
            return data[i]
        }
    }

    return null
}

export default getFirstMovieOrTv;