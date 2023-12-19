import { useCarouselTvSeries } from '../../../hooks/useCarouselTvSeries'
import { useAnimationCarousel } from '../../../hooks/useAnimationCarousel'
import { motion } from 'framer-motion';
import { ButtonLeft } from '../ButtonLeft';
import { CarouselData } from './CarouselDataTv';
import { ButtonRight } from '../ButtonRight';
import '../../../styles/carousel.css'

export const CarouselTvSeries = () => {
    //Now playing movies data
    const { actualIndex, data, previousOne, nextOne } = useCarouselTvSeries()

    //Carousel's animation
    const { handleSwipe, controls } = useAnimationCarousel(actualIndex, previousOne, nextOne)

    return (
        <main>
            <motion.section className='carousel' drag='x' dragConstraints={{ left: 0, right: 0 }} onDragEnd={handleSwipe} animate={controls} whileInView={{ opacity: [0, 1] }}>
                {data && (
                    <>
                        <ButtonLeft previousOne={previousOne} />
                        <CarouselData actualIndex={actualIndex} data={data} />
                        <ButtonRight nextOne={nextOne} />
                    </>
                )}
            </motion.section>
        </main>
    )
}
