import { useNavigateMovies } from "../../../hooks/useNavigateMovies"
import { MoviePoster } from "../../home/trendingMovies/MoviePoster"
import { MovieInfo } from "../../home/trendingMovies/MovieInfo"
import { MovieCalification } from "../../home/trendingMovies/MovieCalification"
import { motion } from 'framer-motion'

export function AppearOnSection({ appear }) {
    const { handleCardClick } = useNavigateMovies()

    return (
        <>
            {appear.length > 1 && <motion.h3 className="specialH3" whileInView={{ opacity: [0, .8] }}>Appeared on:</motion.h3>}
            <motion.section whileInView={{ x: [-200, 0] }} transition={{ duration: 1 }} className="trendingContainer">
                {appear.map(movie =>
                    movie.poster_path && (
                        <div key={movie.id} className="cardTrending" onClick={() => handleCardClick(movie.id)}>
                            <MoviePoster movie={movie} />
                            <MovieInfo movie={movie} />
                            <MovieCalification movie={movie} />
                        </div>
                    )
                )}
            </motion.section>
        </>
    )
}