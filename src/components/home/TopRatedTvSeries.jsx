import { useTopRatedTvSeries } from "../../hooks/useTopRatedTvSeries"
import { ClickToFav } from "./trendingMovies/ClickToFav"
import { TvSerieCalification } from "./trendingTvSeries/TvSerieCalification"
import { TvSerieInfo } from "./trendingTvSeries/TvSerieInfo"
import { TvSeriePoster } from "./trendingTvSeries/TvSeriePoster"
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"

export function TopRatedTvSeries() {
    //Gets top rated Tv series
    const topRatedTvSeries = useTopRatedTvSeries()

    //To execute animation once
    const [ref, inView] = useInView({ triggerOnce: true })
    return (
        <div className="containerTrending">
            <section className="trendingSection">
                <motion.h3 whileInView={{ opacity: [0, .7] }} transition={{ duration: 1 }}>TOP RATED TV SERIES</motion.h3>
                <motion.div className="trendingContainer" ref={ref} animate={inView && { x: [-200, 0], opacity: [0, 1] }} transition={{ duration: 1 }}>
                    {topRatedTvSeries && (
                        topRatedTvSeries.map(serie => (
                            <div key={serie.id} className="cardTrending">
                                <TvSeriePoster serie={serie} />
                                <TvSerieInfo serie={serie} />
                                <TvSerieCalification serie={serie} />
                                <ClickToFav movie={serie} />
                            </div>
                        ))
                    )}
                </motion.div>
            </section >
        </div >
    )
}