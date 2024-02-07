import { useEffect, useState } from 'react'

export function useIndividualSerie(serieId) {
    const [info, setInfo] = useState()
    const [trailerKey, setTrailerKey] = useState()

    const fetchIndividualSerie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${serieId}?api_key=728da900e98fea5404286dece66133fe&append_to_response=credits,videos`)
        const result = await response.json()
        setInfo(result)
        setTrailerKey(result.videos.results[0]?.key)
    }

    useEffect(() => {
        fetchIndividualSerie()
    }, [serieId])

    return { info, trailerKey }
}