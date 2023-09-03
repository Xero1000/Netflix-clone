import Movie from "../entities/Movie";
import Tv from "../entities/Tv";

// Movie has unique property of title and Tv has unique property of name
// Therefore, this function is needed to check if content is an instance of
// Movie or Tv
const isMovie = (content: Movie | Tv): content is Movie => {
    return (content as Movie).title !== undefined;
};

export default isMovie