import { useNavigateMovies } from "../../../hooks/useNavigateMovies"
import { MoviePoster } from "../../home/trendingMovies/MoviePoster"
import { MovieInfo } from "../../home/trendingMovies/MovieInfo"
import { MovieCalification } from "../../home/trendingMovies/MovieCalification"
import { ClickToFav } from "../../home/trendingMovies/ClickToFav"

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
                                <div key={movie.id} className="cardTrending" >
                                    <MoviePoster movie={movie} />
                                    <MovieInfo movie={movie} onClick={() => handleCardClick(movie.id)} />
                                    <MovieCalification movie={movie} />
                                    <ClickToFav movie={movie} />
                                </div>
                            )
                        )))}
                    </div>
                </div>
            }
        </>
    )
}