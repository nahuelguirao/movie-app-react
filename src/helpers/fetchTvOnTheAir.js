export async function fetchTvOnTheAir() {
    //SEARCHES TV SERIES
    try {
        const response = await fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=728da900e98fea5404286dece66133fe')
        const json = await response.json()
        return json.results
    } catch (error) {
        console.error(error)
        throw new Error('Error fetching "Now Playing" movies')
    }
}
