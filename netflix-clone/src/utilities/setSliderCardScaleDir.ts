/* 
    Function used for cards that are children of Slider

    startIndex is the index of the leftmost card currently visible on the screen
    endIndex is for the rightmost card currently visible on the screen

    the return value is the direction the card will scale up in on mouse hover
*/

const setSliderCardScaleDir = (cardIndex: number, startIndex: number, endIndex: number) => {
    if (cardIndex === startIndex) return "left";
    else if (cardIndex === endIndex) return "right";
    else return "center";
  };

export default setSliderCardScaleDir