import { Video } from "../entities/Video";

const getFirstTrailer = (data: Video[]) => {

    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "Trailer") 
            return data[i]
    }

    return null
}

export default getFirstTrailer