import { useEffect, useState } from "react"
import { fetchTopMovies } from "../helpers/fetchTopMovies"

export function useTopRatedMovies() {
    const [topRatedMovies, setTopRatedMovies] = useState()

    const getTopRatedMovies = async () => {
        const results = await fetchTopMovies()
        setTopRatedMovies(results)
    }

    useEffect(() => {
        getTopRatedMovies()
    }, [])

    return topRatedMovies
}