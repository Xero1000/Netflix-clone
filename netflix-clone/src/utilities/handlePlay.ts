import { NavigateFunction } from "react-router-dom";

// When play button on Banner, HoverCard, or ContentModal is clicked,
// user is redirected to the trailer page 
const handlePlay = (contentType: string, id: number, navigate: NavigateFunction) => {
    navigate(`/trailer/${contentType}/${id}`);
};

export default handlePlay