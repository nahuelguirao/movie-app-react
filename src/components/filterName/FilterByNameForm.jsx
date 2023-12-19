import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function FilterByNameForm({ onSearch, movieOrTv }) {
    //To execute form animation once
    const [ref, inView] = useInView({ triggerOnce: true })

    return (
        <motion.form ref={ref} animate={inView ? { x: [100, -100, 0] } : {}} onSubmit={onSearch} className='formByName'>
            <label htmlFor="searchedName">Search by {movieOrTv === 'movie' ? "movie's" : "tv series's"} name</label>
            <div>
                <input type="text" placeholder={movieOrTv === 'movie' ? 'Batman, Avengers...' : 'The walking dead, The 100...'} name='filterByNameSearch' id='searchedName' />
                <button className='buttonSearch'><img src="/search-icon.png" alt="search icon" /></button>
            </div>
        </motion.form>
    )
}