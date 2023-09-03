import { Video } from "../entities/Video";

// Videos besides trailers are retrieved
const getFirstTrailer = (data: Video[]) => {

    // Check that a trailer is returned
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "Trailer") 
            return data[i]
    }

    return null
}

export default getFirstTrailer