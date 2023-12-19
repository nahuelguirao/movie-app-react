import { useEffect, useState } from "react";

export function useSimilarSeries(serieId) {
    const [similar, setSimilar] = useState()

    const fetchSimilar = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/similar?api_key=728da900e98fea5404286dece66133fe`)
        const result = await response.json()
        setSimilar(result.results)
    }

    useEffect(() => {
        fetchSimilar()
    }, [serieId])

    return similar
}