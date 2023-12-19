import { useEffect, useState } from "react"
import { fetchTvOnTheAir } from "../helpers/fetchTvOnTheAir"
import { carouselControls } from "../helpers/carouselControls"

export function useCarouselTvSeries() {
    const [actualIndex, setactualIndex] = useState(0)
    const [data, setData] = useState()

    const { previousOne, nextOne } = carouselControls(data, actualIndex, setactualIndex)

    //async Function to call FetchTvOnTheAir
    const getOnTheAirSeries = async () => {
        const results = await fetchTvOnTheAir()
        setData(results)
    }

    //Calls for only one time the 20 now playing tv series
    useEffect(() => {
        getOnTheAirSeries()
    }, [])

    //Interval to automatically swipe next movie
    useEffect(() => {
        const nextSerie = setInterval(() => {
            nextOne();
        }, 25000);
        return () => {
            clearInterval(nextSerie);
        };
    }, [actualIndex])

    return { actualIndex, data, previousOne, nextOne }
}