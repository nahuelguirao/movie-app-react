import { useTopRatedMovies } from "../../hooks/useTopRatedMovies"
import { useNavigateMovies } from "../../hooks/useNavigateMovies"
import { MoviePoster } from "./trendingMovies/MoviePoster"
import { MovieInfo } from "./trendingMovies/MovieInfo"
import { MovieCalification } from "./trendingMovies/MovieCalification"
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"

export function TopRatedMovies() {
    //Gets top rated movies
    const topRatedMovies = useTopRatedMovies()

    //Navigates when clicks a card
    const handleCardClick = useNavigateMovies()

    //To execute animation once
    const [ref, inView] = useInView({ triggerOnce: true })

    return (
        <>
            <div className="containerTrending">
                <section className="trendingSection">
                    <motion.h3 whileInView={{ opacity: [0, .7] }} transition={{ duration: 1 }}>TOP RATED MOVIES</motion.h3>
                    <motion.div className="trendingContainer" ref={ref} animate={inView && { x: [200, 0], opacity: [0, 1] }} transition={{ duration: 1 }}>
                        {topRatedMovies && (
                            topRatedMovies.map(movie => (
                                <div key={movie.id} className="cardTrending" onClick={() => handleCardClick(movie.id)}>
                                    <MoviePoster movie={movie} />
                                    <MovieInfo movie={movie} />
                                    <MovieCalification movie={movie} />
                                </div>
                            ))
                        )}
                    </motion.div>
                </section >
            </div >
        </>
    )
}