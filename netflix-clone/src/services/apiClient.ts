import axios from "axios";


export default axios.create({
    baseURL: "https://api.themoviedb.org/3/discover",
    params: {
        api_key: "5054016756784fdb1c14d5a803573027"
    }
})

