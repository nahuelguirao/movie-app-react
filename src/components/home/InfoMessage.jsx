import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import "../../styles/infoMessage.css"

export function InfoMessage() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 5000)
        return () => clearTimeout(timeoutId);
    }, [])

    return isVisible && (
        <motion.div className="infoMessage" animate={{ opacity: [0, 1] }}>
            <p>Scroll down and touch a poster or an actor photo to get more info!</p>
        </motion.div>
    )
}