import { motion } from 'framer-motion'

export function MovieInfo({ movie, handleCardClick }) {
    return (
        <div className="infoExtra" onClick={() => handleCardClick(movie.id)}>
            <motion.h4 whileInView={{ scale: [0, 1.1, 1] }}>
                {movie.title ? movie.title : movie.name}
            </motion.h4>
            <motion.p whileInView={{ scale: [0, 1.1, 1] }}>
                {movie.release_date ? movie.release_date.slice(0, 4) : movie.first_air_date.slice(0, 4)}
            </motion.p>
        </ div>
    )
}