import { useNavigateTvSeries } from '../../../hooks/useNavigateTvSeries'
import { useNavigateMovies } from '../../../hooks/useNavigateMovies'
import { motion } from 'framer-motion'

export function FavMovieInfo({ movie }) {
    const { handleCardClick: handleMovie } = useNavigateMovies()
    const { handleCardClick: handleTvSerie } = useNavigateTvSeries()

    return (
        <div className="infoExtra" onClick={movie.title ? () => handleMovie(movie.id) : () => handleTvSerie(movie.id)}>
            <motion.h4 whileInView={{ scale: [0, 1.1, 1] }}>
                {movie.title ? movie.title : movie.name}
            </motion.h4>
            <motion.p whileInView={{ scale: [0, 1.1, 1] }}>
                {movie.release_date ? movie.release_date.slice(0, 4) : movie.first_air_date.slice(0, 4)}
            </motion.p>
        </ div>
    )
}