import { useState, useEffect } from "react"
import { fetchNowPlaying } from "../helpers/fetchNowPlaying"

export function useTrendingMovies() {
    const [data, setData] = useState()

    const getMovies = async () => {
        const results = await fetchNowPlaying()
        setData(results)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return data
}