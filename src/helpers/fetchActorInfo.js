export async function fetchActorInfo(actorId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=728da900e98fea5404286dece66133fe`)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
        throw new Error('Error fetching actor info')
    }
}