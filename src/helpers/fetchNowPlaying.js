export async function fetchNowPlaying() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=728da900e98fea5404286dece66133fe')
        const json = await response.json()
        return json.results
    } catch (error) {
        console.error(error)
        throw new Error('Error fetching "Now Playing" movies')
    }
}

