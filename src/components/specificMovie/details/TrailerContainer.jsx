import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function TrailerContainer({ trailerKey }) {
    //To execute animation once
    const [ref, inView] = useInView({ triggerOnce: true })

    return (
        <>
            {trailerKey &&
                <motion.div key={trailerKey} ref={ref} className="trailerContainer" animate={inView && { x: [200, 0] }} transition={{ duration: 1 }}>
                    <h3>Trailer</h3>
                    <div className="iframeContainer">
                        <iframe title="Trailer" src={`https://www.youtube.com/embed/${trailerKey}`} allowFullScreen />
                    </div>
                </motion.div>
            }
        </>
    )
}