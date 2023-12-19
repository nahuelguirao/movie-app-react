import { getCalificationBackground } from "../../../helpers/calificationBackground"
import { motion } from 'framer-motion'

export function MovieCalification({ movie }) {
    return (
        <>
            {(movie.vote_average > 0) &&
                < div className='calification'>
                    <motion.h4 className={`${getCalificationBackground(movie.vote_average.toFixed(1))}`} whileInView={{ scale: [0, 1.1, 1] }}>
                        {movie.vote_average.toFixed(1)}
                    </motion.h4>
                </div>
            }
        </>
    )
}