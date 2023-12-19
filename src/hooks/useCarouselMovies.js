import { useEffect, useState } from "react"
import { carouselControls } from "../helpers/carouselControls"
import { fetchNowPlaying } from "../helpers/fetchNowPlaying"

export function useCarouselMovies(initialPosition) {
    const [actualIndex, setactualIndex] = useState(initialPosition)
    const [data, setData] = useState()

    const { previousOne, nextOne } = carouselControls(data, actualIndex, setactualIndex)

    //async Function to call fetchNowPlaying || FetchTvOnTheAir
    const getNowPlaying = async () => {
        const results = await fetchNowPlaying()
        setData(results)
    }

    //Calls for only one time the 20 now playing movies
    useEffect(() => {
        getNowPlaying()
    }, [])

    //Interval to automatically swipe next movie
    useEffect(() => {
        const nextMovie = setInterval(() => {
            nextOne();
        }, 25000);
        return () => {
            clearInterval(nextMovie);
        };
    }, [actualIndex])

    return { actualIndex, data, previousOne, nextOne }
}