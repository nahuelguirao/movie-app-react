export async function fetchAppearOn(actorId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=728da900e98fea5404286dece66133fe`)
        const result = await response.json()
        return result.cast.slice(0, 20)
    } catch (error) {
        console.error(error)
        throw new Error('Error fetching appear on')
    }
}