import { useNavigateMovies } from '../../hooks/useNavigateMovies'
import { getCalificationBackground } from '../../helpers/calificationBackground'
import { motion } from 'framer-motion'

export function MoviesOption({ movie }) {
    const handleCardClick = useNavigateMovies()

    return (
        movie.title && (
            <motion.div key={movie.id} className='card' whileInView={{ opacity: [0, 1] }} transition={{ duration: .5 }} whileHover={{ scale: 1.05 }} onClick={() => handleCardClick(movie.id)}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`'${movie.title}' poster`} />
                <div className='data'>
                    <motion.h4 whileInView={{ scale: [0, 1.1, 1] }}>{movie.title}</motion.h4>
                    <motion.p whileInView={{ scale: [0, 1.1, 1] }}>{movie.release_date.slice(0, 4)}</motion.p>
                </div>
                {(movie.vote_average > 0) &&
                    <motion.h4 className={`${getCalificationBackground(movie.vote_average.toFixed(1))} h4Valoration`} whileInView={{ scale: [0, 1.1, 1] }}>
                        {movie.vote_average.toFixed(1)}
                    </motion.h4>
                }
            </motion.div>
        ))
}