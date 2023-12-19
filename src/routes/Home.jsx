import { CarouselMovies } from "../components/carousels/carouselMovies/CarouselMovies"
import { HomeTrendingMovies } from "../components/home/trendingMovies/HomeTrendingMovies"
import { HomeTrendingTvSeries } from "../components/home/trendingTvSeries/HomeTrendingTvSeries"
import { TopRatedMovies } from "../components/home/TopRatedMovies"
import { TopRatedTvSeries } from "../components/home/TopRatedTvSeries"

export function Home() {
    return (
        <>
            <CarouselMovies initialPosition={10} />
            <HomeTrendingMovies />
            <HomeTrendingTvSeries />
            <TopRatedMovies />
            <TopRatedTvSeries />
        </>
    )
}