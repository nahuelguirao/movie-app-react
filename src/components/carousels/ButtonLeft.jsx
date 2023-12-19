import { motion } from 'framer-motion'

export function ButtonLeft({ previousOne }) {
    return (
        <motion.button
            animate={{ rotate: 360 }}
            whileHover={{ scale: 1.5 }}
            onClick={previousOne} className='left'>
            <img src='/swipe-icon.png' draggable={false} />
        </motion.button>
    )
}