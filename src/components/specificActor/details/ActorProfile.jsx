export function ActorProfile({ actorInfo }) {
    return (
        <>
            <img src={`https://image.tmdb.org/t/p/w500/${actorInfo.profile_path}`} alt={`${actorInfo.name} photo`} className="actorPhoto" />
            <h2>{actorInfo.name}</h2>
            <p>{actorInfo.biography ? actorInfo.biography : "This person doesn't have a biography"}</p>
            <h3>Appeared on:</h3>
        </>
    )
}