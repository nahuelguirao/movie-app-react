import { useNavigateMovies } from "../../../hooks/useNavigateMovies"
import { MoviePoster } from "../../home/trendingMovies/MoviePoster"
import { MovieInfo } from "../../home/trendingMovies/MovieInfo"
import { MovieCalification } from "../../home/trendingMovies/MovieCalification"

export function AppearOnSection({ appear }) {
    const handleCardClick = useNavigateMovies()

    return (
        <section className="trendingContainer">
            {appear.map(movie =>
                movie.poster_path && (
                    <div key={movie.id} className="cardTrending" onClick={() => handleCardClick(movie.id)}>
                        <MoviePoster movie={movie} />
                        <MovieInfo movie={movie} />
                        <MovieCalification movie={movie} />
                    </div>
                )
            )}
        </section>
    )
}