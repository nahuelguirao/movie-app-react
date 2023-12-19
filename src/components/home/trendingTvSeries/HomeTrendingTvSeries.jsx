import { useTvOnTheAir } from "../../../hooks/useTvOnTheAir"
import { useNavigateTvSeries } from "../../../hooks/useNavigateTvSeries"
import { TvSeriePoster } from "./TvSeriePoster"
import { TvSerieInfo } from "./TvSerieInfo"
import { TvSerieCalification } from "./TvSerieCalification"
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"


export function HomeTrendingTvSeries() {
    //Calls trending Tv series
    const tvSeries = useTvOnTheAir()

    //To open a page with specific info
    const handleCardClick = useNavigateTvSeries()

    //To execute animation once
    const [ref, inView] = useInView({ triggerOnce: true })

    return (
        <div className="containerTrending">
            <section className="trendingSection">
                <motion.h3 whileInView={{ opacity: [0, .7] }} transition={{ duration: 1 }}>TRENDING TV SERIES</motion.h3>
                <motion.div ref={ref} className="trendingContainer" animate={inView && { x: [-200, 0], opacity: [0, 1] }} transition={{ duration: 1 }}>
                    {tvSeries && (
                        tvSeries.map(serie => (
                            <div key={serie.id} className="cardTrending" onClick={() => handleCardClick(serie.id)}>
                                <TvSeriePoster serie={serie} />
                                <TvSerieInfo serie={serie} />
                                <TvSerieCalification serie={serie} />
                            </div>
                        ))
                    )}
                </motion.div>
            </section >
        </div >
    )
}
