import { useTrendingMovies } from "../../../hooks/useTrendingMovies"
import { useNavigateMovies } from "../../../hooks/useNavigateMovies"
import { MoviePoster } from "./MoviePoster"
import { MovieInfo } from "./MovieInfo"
import { MovieCalification } from "./MovieCalification"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import "../../../styles/trendingContainers.css"

export function HomeTrendingMovies() {
    //Calls trending movies
    const movies = useTrendingMovies()

    //To search specific info
    const handleCardClick = useNavigateMovies()

    //To execute animation once
    const [ref, inView] = useInView({ triggerOnce: true })

    return (
        <div className="containerTrending">
            <section className="trendingSection">
                <motion.h3 whileInView={{ opacity: [0, .7] }} transition={{ duration: 1 }}>TRENDING MOVIES</motion.h3>
                <motion.div ref={ref} className="trendingContainer" animate={inView && { x: [200, 0], opacity: [0, 1] }} transition={{ duration: 1 }}>
                    {movies && (
                        movies.map(movie => (
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
    )
}