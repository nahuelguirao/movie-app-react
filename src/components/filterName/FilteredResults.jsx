import { MoviesOption } from './MoviesOption';
import { TvSeriesOption } from './TvSeriesOption';
import { motion } from 'framer-motion';
import '../../styles/filteredResults.css'

export function FilteredResults({ data, error }) {
    if (error) return (<motion.h3 animate={{ scale: [0, 1] }} id='error'>⚠️ {error}</motion.h3>)
    return (
        <>
            <div className='posterContainer'>
                {data &&
                    data.map(movie => (
                        //If the movie doesn't have a poster path it doesn't appear and continue with the next one
                        movie.poster_path && (
                            <>
                                <MoviesOption movie={movie} />
                                <TvSeriesOption movie={movie} />
                            </>
                        )
                    ))
                }
            </div >
        </>
    )
}
