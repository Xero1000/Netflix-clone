import { useState, useEffect } from "react";
import getSlidesPerRow from "../utilities/getSlidesPerRow";

const useSlidesPerRow = () => {

    const [slidesPerRow, setSlidesPerRow] = useState(
        getSlidesPerRow(window.innerWidth)
    );

    // changes the number of slides displayed based on browser size
    useEffect(() => {
        const handleResize = () => {
          setSlidesPerRow(getSlidesPerRow(window.innerWidth));
        };
        
        window.addEventListener("resize", handleResize);
  
        // Clean up by removing the event listener when the component unmounts
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    return slidesPerRow
}

export default useSlidesPerRow