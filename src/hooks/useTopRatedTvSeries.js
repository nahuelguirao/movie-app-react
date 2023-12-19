import { useEffect, useState } from "react"
import { fetchTopTvSeries } from "../helpers/fetchTopTvSeries"

export function useTopRatedTvSeries() {
    const [topRatedTvSeries, setTopRatedTvSeries] = useState()

    const getTopRatedTvSeries = async () => {
        const results = await fetchTopTvSeries()
        setTopRatedTvSeries(results)
    }

    useEffect(() => {
        getTopRatedTvSeries()
    }, [])

    return topRatedTvSeries
}