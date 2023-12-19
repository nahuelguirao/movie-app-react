export function MoviePoster({ movie }) {
    return (
        <img className="posterTrending" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`'${movie.title}' poster`} draggable={false} ></img>
    )
}