import { motion } from 'framer-motion'

export function TrailerContainer({ trailerKey }) {
    return (
        <>
            {trailerKey &&
                <motion.div key={trailerKey} className="trailerContainer" whileInView={{ opacity: [0, 1] }} viewport={{ once: true }}>
                    <h3>Trailer</h3>
                    <div className="iframeContainer">
                        <iframe title="Trailer" src={`https://www.youtube.com/embed/${trailerKey}`} allowFullScreen />
                    </div>
                </motion.div>
            }
        </>
    )
}