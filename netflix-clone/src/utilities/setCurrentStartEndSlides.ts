/* 
    Used exclusively with Slider component.

    Code is large so I moved it here for better seperation of concerns and
    readability

    Used to determine the indicies of the current visible leftmost and rightmost slides
    inside of a slider.

    Function is called when user clicks either the left or right slider buttons.
    The button pushed determines the calculations done.

    The final else statement is meant for recalculating the end slide index
    upon browser resizing.
*/

const setCurrentStartEndSlides = (
    currentStartSlide: number,
    setCurrentStartSlide: (value: number) => void,
    setCurrentEndSlide: (value: number) => void,
    slidesPerRow: number,
    dataLength: number) => (direction?: "left" | "right") => {

    let newCurrentStartSlide: number;
    let newCurrentEndSlide: number;

    // user clicks the left slider button
    if (direction === "left") {
      newCurrentStartSlide = currentStartSlide - slidesPerRow;

      if (newCurrentStartSlide < 0) {
        newCurrentStartSlide = newCurrentStartSlide + dataLength;
      }

      newCurrentEndSlide = newCurrentStartSlide + slidesPerRow - 1

      if (newCurrentEndSlide >= dataLength) {
        newCurrentEndSlide = newCurrentEndSlide - dataLength;
      }

      setCurrentStartSlide(newCurrentStartSlide);
      setCurrentEndSlide(newCurrentEndSlide)

    } 
    // user clicks the right slider button
    else if (direction === "right") {
      newCurrentStartSlide = currentStartSlide + slidesPerRow;

      if (newCurrentStartSlide >= dataLength) {
        newCurrentStartSlide = newCurrentStartSlide - dataLength;
      }

      newCurrentEndSlide = calculateNewEndSlide(newCurrentStartSlide, slidesPerRow, dataLength)

      setCurrentStartSlide(newCurrentStartSlide);
      setCurrentEndSlide(newCurrentEndSlide)
    }
    else {
      newCurrentEndSlide = newCurrentEndSlide = calculateNewEndSlide(currentStartSlide, slidesPerRow, dataLength)

      setCurrentEndSlide(newCurrentEndSlide)
    }
};

// helper function to determine the index of the new visible end slide
const calculateNewEndSlide = (startSlide: number, slidesPerRow: number, dataLength: number) => {
  let newEndSlide = startSlide + slidesPerRow - 1
  
  if (newEndSlide >= dataLength) {
    newEndSlide = newEndSlide - dataLength
  }

  return newEndSlide
}

export default setCurrentStartEndSlides