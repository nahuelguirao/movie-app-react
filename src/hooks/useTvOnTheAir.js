import { useEffect, useState } from "react"
import { fetchTvOnTheAir } from "../helpers/fetchTvOnTheAir"

export function useTvOnTheAir() {
    const [tvSeries, setTvSeries] = useState()

    const getTvSeries = async () => {
        const data = await fetchTvOnTheAir()
        setTvSeries(data)
    }

    useEffect(() => {
        getTvSeries()
    }, [])
    return tvSeries
}