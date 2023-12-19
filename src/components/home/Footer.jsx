import { HeaderTitle } from "../header/HeaderTitle"
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import '../../styles/footer.css'

export function Footer() {
    return (
        <motion.footer whileInView={{ opacity: [0, 1] }}>
            <HeaderTitle />
            <motion.ul animate={{ x: [-200, 0] }}>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/movies'}>Movies</Link></li>
                <li><Link to={'/tvseries'}>TvSeries</Link></li>
            </motion.ul>
        </motion.footer>
    )
}