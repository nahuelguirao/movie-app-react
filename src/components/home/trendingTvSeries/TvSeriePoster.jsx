export function TvSeriePoster({ serie }) {
    return (
        <img className="posterTrending" src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={`'${serie.name}' poster`} draggable={false} />
    )
}