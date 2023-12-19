import { useIndividualSerie } from '../../hooks/useIndividualSerie'
import { useSimilarSeries } from '../../hooks/useSimilarSeries'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SerieInfo } from './details/SerieInfo'
import { ActorsContainer } from '../specificMovie/details/ActorsContainer'
import { TrailerContainer } from '../specificMovie/details/TrailerContainer'
import { SimilarNames } from './details/SimilarNames'

export function SerieDetails() {
    //Gets the URL's id with use Params
    const { id: serieId } = useParams()
    //Gets the specific info
    const { info, trailerKey } = useIndividualSerie(serieId)
    //Gets similar results
    const similar = useSimilarSeries(serieId)

    return (
        <>
            {info && (
                <main className="mainMovieIndividual">
                    <div className="movieIndividualInfo" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${info.backdrop_path})`, backgroundColor: 'rgba(0, 0, 0, 0.521)' }} />
                    <div className="individualInfo">
                        <motion.img className="individualPoster" src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} alt={`Poster of ${info.title}`} whileInView={{ scale: [0, 1] }} />
                    </div>
                    <div className="infoContainer">
                        <SerieInfo info={info} />
                        <ActorsContainer info={info} />
                        <TrailerContainer trailerKey={trailerKey} />
                        <SimilarNames similar={similar} />
                    </div>
                </main >
            )}
        </>
    )
}