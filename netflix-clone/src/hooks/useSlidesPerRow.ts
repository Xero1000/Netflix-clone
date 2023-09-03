import { useState, useEffect } from "react";

// Gets the number of slides to display in grids and sliders 
// based on the size of the browser window 
const useSlidesPerRow = () => {

    // The number of slides to show depending on the size of
    // the browser window
    const getSlidesPerRow = (width: number) => {
      if (width > 1399) return 5;
      if (width > 799) return 4;
      if (width > 499) return 3;

      return 2;
    };

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