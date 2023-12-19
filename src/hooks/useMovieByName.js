import { useState, useEffect } from "react"
import { fetchMovie } from "../helpers/fetchMovie"

export function useMovieByName(movieOrTv) {
    //Sets default search
    const [inputMovie, setInputMovie] = useState(movieOrTv == 'movie' ? 'Avengers' : 'The walking dead')
    const [data, setData] = useState()
    const [error, setError] = useState()
    //Creates an object with the name searched
    const onSearch = (event) => {
        event.preventDefault()
        const fields = Object.fromEntries(new window.FormData(event.target))
        setInputMovie(fields.filterByNameSearch)
    }

    const getData = async () => {
        try {
            if (inputMovie < 1) return
            //Uses fetchMovie helper to call the API with the name searched
            const json = await fetchMovie(movieOrTv, inputMovie)
            //If the helper returns a json.results with at least 1 result sets data
            if (json && json.results && json.results.length > 0) {
                setData(json.results)
                setError(null)
            } else {
                setData([])
                setError("The name searched doesn't exists!")
            }
        } catch (error) {
            setData([])
            setError(error.message)
        }
    }
    //Every time input changes it tries to call the api again
    useEffect(() => {
        getData()
    }, [inputMovie])

    return { data, onSearch, error }
}
