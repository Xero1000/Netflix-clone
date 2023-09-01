
/*  Determines the direction cards will scale up in upon mouse hover
       Card on left edge of screen will scale up towards the right
       Card on right edge will scale up towards the left
       Every other card will scale up from the center

    Using the formula = (cardIndex + 1) % currentSlidesPerRow
        Left most cards will equal 1
        Right most cards will equal 0
*/

const setScaleDirection = (cardIndex: number, currentSlidesPerRow: number) => {
    const incrementedIndex = cardIndex + 1
    const directionVal = incrementedIndex % currentSlidesPerRow

    if (directionVal === 1) {
        return "left" // setting left makes card scale up towards right 
    }
    else if (directionVal === 0) {
        return "right" // setting right makes card scale up towards left
    }
    
    return "center"
}

export default setScaleDirection