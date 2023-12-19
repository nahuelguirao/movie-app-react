export async function fetchMovie(movieOrTv, movieName) {
    const API_KEY = '728da900e98fea5404286dece66133fe'
    const URL = `https://api.themoviedb.org/3/search/${movieOrTv}?api_key=${API_KEY}&query=${movieName}`
    try {
        const response = await fetch(URL)
        const json = await response.json()
        return json
    } catch (error) {
        throw new Error(`Error calling the API: ${error.message}`)
    }
}
