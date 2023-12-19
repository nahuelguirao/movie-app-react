import { useEffect, useState } from "react"
import { fetchIndividualMovie } from "../helpers/fetchIndividualMovie"

export function useInidividualMovie(movieId) {
    const [info, setInfo] = useState()
    const [trailerKey, setTrailerKey] = useState()

    const getInfo = async () => {
        const result = await fetchIndividualMovie(movieId)
        setInfo(result)
        //Searches if the movie has an official trailer
        const officialTrailer = result.videos.results.find(video => video.name === 'Official Trailer')
        if (officialTrailer) { setTrailerKey(officialTrailer.key) } else { setTrailerKey(null) }
    }

    useEffect(() => {
        getInfo()
    }, [movieId])

    return { info, trailerKey }
}