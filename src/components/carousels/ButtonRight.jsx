import { motion } from 'framer-motion'

export function ButtonRight({ nextOne }) {
    return (
        <motion.button
            animate={{ rotate: 180 }}
            whileHover={{ scale: 1.5 }} onClick={nextOne}
            className='right'>
            <img src='/swipe-icon.png' draggable={false} />
        </motion.button>
    )
}