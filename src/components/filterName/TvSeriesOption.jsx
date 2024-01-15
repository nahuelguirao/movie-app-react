import { useNavigateTvSeries } from '../../hooks/useNavigateTvSeries'
import { getCalificationBackground } from '../../helpers/calificationBackground'
import { motion } from 'framer-motion'

export function TvSeriesOption({ movie }) {
    const handleCardClick = useNavigateTvSeries()
    return (
        movie.name &&
        <motion.div key={movie.id} className='card' whileInView={{ opacity: [0, 1] }} transition={{ duration: .5 }} whileHover={{ scale: 1.05 }} onClick={() => handleCardClick(movie.id)}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`'${movie.name}' poster`} />
            <div className='data'>
                <h4>{movie.name}</h4>
                <p>{movie.first_air_date.slice(0, 4)}</p>
            </div>
            {(movie.vote_average > 0) &&
                <motion.h4 className={`${getCalificationBackground(movie.vote_average.toFixed(1))} h4Valoration`} whileInView={{ scale: [0, 1.1, 1] }}>
                    {movie.vote_average.toFixed(1)}
                </motion.h4>
            }
        </motion.div>
    )
}