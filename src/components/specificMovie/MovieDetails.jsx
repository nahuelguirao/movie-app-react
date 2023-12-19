import { useSimilarMovies } from "../../hooks/useSimilarMovies"
import { useInidividualMovie } from "../../hooks/useIndividualMovie"
import { MovieInfo } from "./details/MovieInfo"
import { ActorsContainer } from "./details/ActorsContainer"
import { TrailerContainer } from "./details/TrailerContainer"
import { SimilarTitles } from "./details/SimilarTitles"
import { useParams } from "react-router-dom"
import { motion } from 'framer-motion'
import "../../styles/movieDetails.css"


export function MovieDetails() {
    //Gets the url's id with useParams
    const { id: movieId } = useParams()
    //Gets specific info about a movie
    const { info, trailerKey } = useInidividualMovie(movieId)
    //Gets similar titles
    const similar = useSimilarMovies(movieId)

    return (
        <>
            {info && (
                <main className="mainMovieIndividual">
                    <div className="movieIndividualInfo" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${info.backdrop_path})`, backgroundColor: 'rgba(0, 0, 0, 0.521)' }} />
                    <div className="individualInfo">
                        <motion.img className="individualPoster" src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} alt={`Poster of ${info.title}`} whileInView={{ scale: [0, 1] }} />
                    </div>
                    <div className="infoContainer">
                        <MovieInfo info={info} />
                        <ActorsContainer info={info} />
                        <TrailerContainer trailerKey={trailerKey} />
                        <SimilarTitles similar={similar} />
                    </div>
                </main >
            )
            }
        </>
    )
}