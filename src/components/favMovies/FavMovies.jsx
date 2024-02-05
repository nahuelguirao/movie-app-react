import { useContext } from "react"
import { FavMoviesContext } from "../../context/FavMoviesContext"
import { MoviePoster } from "../home/trendingMovies/MoviePoster"
import { MovieInfo } from "../home/trendingMovies/MovieInfo"
import { useNavigateMovies } from "../../hooks/useNavigateMovies"
import { useNavigateTvSeries } from "../../hooks/useNavigateTvSeries"
import { TiDeleteOutline } from "react-icons/ti";
import '../../styles/favContent.css'

export function FavMovies() {
    const { favMovies, removeFavMovie } = useContext(FavMoviesContext)
    const { handleCardClick: handleMovie } = useNavigateMovies()
    const { handleCardClick: handleTvSerie } = useNavigateTvSeries()

    return (
        <section className="favContentSection">
            <h1>Your Favs</h1>
            {favMovies && favMovies.length >= 1 ? (
                <div className="favContentContainer">
                    {favMovies && (
                        favMovies.map(movie => (
                            <div key={movie.id} className="favCard" >
                                <MoviePoster movie={movie} />
                                <MovieInfo movie={movie} handleCardClick={movie.title ? () => handleMovie(movie.id) : () => handleTvSerie(movie.id)} />
                                <TiDeleteOutline className="deleteIcon" onClick={() => removeFavMovie(movie.id)} />
                            </div>
                        ))
                    )}
                </div>
            ) : (
                <div className="waitingFavContentContainer">
                    <h1 className="waitingTitle">Add a movie or a tv serie!</h1>
                </div>
            )}
        </section>
    )
}