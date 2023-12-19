export function carouselControls(data, actualIndex, setactualIndex) {
    const nextOne = () => {
        data && actualIndex >= (data.length - 1) ? setactualIndex(0) : setactualIndex(actualIndex + 1)
    }

    const previousOne = () => {
        actualIndex <= 0 ? setactualIndex(data.length - 1) : setactualIndex(actualIndex - 1)
    }
    return { nextOne, previousOne }
}