import { motion } from 'framer-motion'

export function MovieInfo({ movie }) {
    return (
        <div className="infoExtra" >
            <motion.h4 whileInView={{ scale: [0, 1.1, 1] }}>{movie.title}</motion.h4>
            <motion.p whileInView={{ scale: [0, 1.1, 1] }}>{movie.release_date.slice(0, 4)}</motion.p>
        </div>
    )
}