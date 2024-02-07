import { useContext } from 'react'
import { FavMoviesContext } from '../../../context/FavMoviesContext'
import { getCalificationBackground } from '../../../helpers/calificationBackground'
import { motion } from 'framer-motion'
import { FaStar } from "react-icons/fa";

export function SerieInfo({ info }) {
    const { addFavMovie } = useContext(FavMoviesContext)
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
            <motion.p whileInView={{ scale: [0, 1] }} viewport={{ once: true }} whileHover={{ scale: 1.1 }} className='paragraphAddToFav' onClick={() => addFavMovie(info)}>Add To Favs <FaStar /> </motion.p>
        </>
    )
}