import { motion } from 'framer-motion'

export function TvSerieInfo({ serie }) {
    return (
        <div className="infoExtra" >
            <motion.h4 whileInView={{ scale: [0, 1.1, 1] }}>{serie.name}</motion.h4>
            <motion.p whileInView={{ scale: [0, 1.1, 1] }}>{serie.first_air_date.slice(0, 4)}</motion.p>
        </div>
    )
}