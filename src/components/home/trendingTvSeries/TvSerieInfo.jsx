import { motion } from 'framer-motion'

export function TvSerieInfo({ serie, handleCardClick }) {
    return (
        <div className="infoExtra" onClick={() => handleCardClick(serie.id)}>
            <motion.h4 whileInView={{ scale: [0, 1.1, 1] }}>{serie.name}</motion.h4>
            <motion.p whileInView={{ scale: [0, 1.1, 1] }}>{serie.first_air_date.slice(0, 4)}</motion.p>
        </div>
    )
}