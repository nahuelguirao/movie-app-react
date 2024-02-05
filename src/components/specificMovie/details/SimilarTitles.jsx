import { useNavigateMovies } from "../../../hooks/useNavigateMovies"
import { MoviePoster } from "../../home/trendingMovies/MoviePoster"
import { MovieInfo } from "../../home/trendingMovies/MovieInfo"
import { MovieCalification } from "../../home/trendingMovies/MovieCalification"

export function SimilarTitles({ similar }) {
    const { handleCardClick } = useNavigateMovies()

    return (
        <>
            {(similar && similar.length > 1) &&
                <div className="similarTitles">
                    <h3>Similar titles</h3>
                    <div className="trendingContainer">
                        {similar && (similar.map(movie => (
                            movie.poster_path && (
                                <div key={movie.id} className="cardTrending" onClick={() => handleCardClick(movie.id)}>
                                    <MoviePoster movie={movie} />
                                    <MovieInfo movie={movie} />
                                    <MovieCalification movie={movie} />
                                </div>
                            )
                        )))}
                    </div>
                </div>
            }
        </>
    )
}