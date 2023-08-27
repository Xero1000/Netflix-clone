import { useState, useEffect } from "react";
import getSlidesToShow from "../utilities/getSlidesToShow";

const useSlidesToShow = () => {

    const [slidesToShow, setSlidesToShow] = useState(
        getSlidesToShow(window.innerWidth)
    );

    // changes the number of slides displayed based on browser size
    useEffect(() => {
        const handleResize = () => {
          setSlidesToShow(getSlidesToShow(window.innerWidth));
        };
        
        window.addEventListener("resize", handleResize);
  
        // Clean up by removing the event listener when the component unmounts
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    return slidesToShow
}

export default useSlidesToShow