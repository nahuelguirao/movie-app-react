import { motion } from 'framer-motion'
import { useNavigateActors } from '../../../hooks/useNavigateActors'

export function ActorsContainer({ info }) {

    const handleCardClick = useNavigateActors()
    return (
        <>
            {info.credits?.cast?.length > 1 && (
                <>
                    <h3>Cast</h3>
                    <motion.div className="trendingContainer" whileInView={{ opacity: [0, 1] }} viewport={{ once: true }} transition={{ duration: 1 }}>
                        {info.credits.cast && info.credits.cast.map(actor =>
                            actor.profile_path && (
                                <div className="cardTrending" key={actor.id} onClick={() => handleCardClick(actor.id)}>
                                    <img className="posterTrending" src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} />
                                    <motion.p className="actorName" whileInView={{ scale: [0, 1] }}>{actor.name}</motion.p>
                                </div>
                            )
                        )}
                    </motion.div>
                </>
            )}
        </>
    )
}