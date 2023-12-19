import { motion } from 'framer-motion'

export function ActorProfile({ actorInfo }) {
    return (
        <>
            <motion.img whileInView={{ scale: [0, 1] }} src={`https://image.tmdb.org/t/p/w500/${actorInfo.profile_path}`} alt={`${actorInfo.name} photo`} className="actorPhoto" />
            <motion.h2 whileInView={{ scale: [0, 1] }}>{actorInfo.name}</motion.h2>
            <p className="actorProfileP">{actorInfo.biography ? actorInfo.biography : "This person doesn't have a biography"}</p>
        </>
    )
}