import { getCalificationBackground } from '../../../helpers/calificationBackground'
import { motion } from 'framer-motion'

export function SerieInfo({ info }) {
    return (
        <>
            <div className="ratingAndTitle">
                <motion.h3 whileInView={{ scale: [0, 1] }} viewport={{ once: true }} className="title">{info.name} - {info.first_air_date && info.first_air_date.slice(0, 4)}</motion.h3>
                {info.vote_average.toFixed(1) > 1 &&
                    <motion.p className={`${getCalificationBackground(info.vote_average.toFixed(1))} rating`} whileInView={{ scale: [0, 1] }} viewport={{ once: true }}>{info.vote_average.toFixed(1)}</motion.p>
                }
            </div>
            {info.genres && (
                <div className="genres">
                    {info.genres.map(genre => (
                        <motion.p key={genre.id} whileInView={{ scale: [0, 1] }} viewport={{ once: true }}>{genre.name}</motion.p>
                    ))}
                </div>
            )}
            <motion.p whileInView={{ scale: [0, 1] }} viewport={{ once: true }} className="overview">{info.overview ? info.overview : "This Tv serie doesn't have an overview."}</motion.p>
        </>
    )
}