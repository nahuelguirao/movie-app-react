import { motion } from 'framer-motion'
import { useNavigateTvSeries } from '../../../hooks/useNavigateTvSeries'

export function CarouselData({ actualIndex, data }) {
    const { handleCardClick } = useNavigateTvSeries()
    return (
        <>
            <motion.img
                animate={{ opacity: [0, .5] }}
                src={`https://image.tmdb.org/t/p/w1280${data[actualIndex].backdrop_path}`}
                alt={`Poster of: '${data[actualIndex].name}`}
            />
            <div className='carouselData'>
                <motion.h2 animate={{ y: [-500, 0] }}>{data[actualIndex].name}</motion.h2>
                <div className='carouselButtonContainer'>
                    <motion.p animate={{ y: [-500, 0] }}>{data[actualIndex].overview.length > 1 ? data[actualIndex].overview : "This Movie doesn't have an overview"}</motion.p>
                    <button className='carouselButton' onClick={() => handleCardClick(data[actualIndex].id)}>Click for more info</button>
                </div>
            </div>
        </>
    )
}