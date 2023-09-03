
// Get an array of values from 0 to num - 1
const getRange = (num: number): number[] => {
    return Array.from({ length: num }, (_, i) => i)
}

export default getRange