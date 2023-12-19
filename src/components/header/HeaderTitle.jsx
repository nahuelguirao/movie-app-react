import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export function HeaderTitle() {
    return (
        <motion.div animate={{ x: [-100, 0] }}>
            <NavLink to='/' ><h1>MovieWiki</h1></NavLink>
            <img src='/logo.png' alt='MovieWiki Logo' draggable={false} />
        </motion.div>
    )
}