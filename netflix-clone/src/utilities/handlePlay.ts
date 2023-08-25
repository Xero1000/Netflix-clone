import { NavigateFunction } from "react-router-dom";

const handlePlay = (contentType: string, id: number, navigate: NavigateFunction) => {
    navigate(`/trailer/${contentType}/${id}`);
};

export default handlePlay