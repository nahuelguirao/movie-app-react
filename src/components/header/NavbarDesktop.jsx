import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function NavbarDesktop() {
    //Navbar for screens > 1000px
    return (
        <>
            <motion.nav animate={{ x: [-100, 0] }}>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/movies'><li>Movies</li></Link>
                    <Link to='/tvseries'><li>TV Series</li></Link>
                </ul>
            </motion.nav>
        </>
    )
}