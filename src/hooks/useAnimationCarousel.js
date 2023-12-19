import { useEffect } from "react";
import { useAnimation } from 'framer-motion';

export function useAnimationCarousel(actualIndex, previousOne, nextOne) {
    const controls = useAnimation();

    const handleSwipe = (_, { offset }) => {
        if (offset.x > 50) {
            // To left
            previousOne();
        } else if (offset.x < -50) {
            // To right
            nextOne();
        }
    }

    useEffect(() => {
        // Resets the animations every time 'actualIndex' changes
        controls.start({
            x: [-500, 0],
            opacity: [0, 1],
        });
    }, [actualIndex]);

    return { controls, handleSwipe }
}
