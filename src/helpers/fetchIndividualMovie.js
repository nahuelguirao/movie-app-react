export async function fetchIndividualMovie(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=728da900e98fea5404286dece66133fe&append_to_response=credits,videos`)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
        throw new Error('error fetching individual movie')
    }
}