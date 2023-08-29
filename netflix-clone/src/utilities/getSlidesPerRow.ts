
// The number of slides to show depending on the size of
// the browser window
const getSlidesPerRow = (width: number) => {
    if (width > 1399) return 5;
    if (width > 799) return 4;
    if (width > 499) return 3;

    return 2;
};

export default getSlidesPerRow