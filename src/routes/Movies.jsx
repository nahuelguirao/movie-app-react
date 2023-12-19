import { CarouselMovies } from "../components/carousels/carouselMovies/CarouselMovies"
import { FilterByName } from "../components/filterName/FilterByName"
import { HomeTrendingMovies } from "../components/home/trendingMovies/HomeTrendingMovies"
import { TopRatedMovies } from "../components/home/TopRatedMovies"

export function Movies() {
    return (
        <>
            <CarouselMovies initialPosition={0} />
            <FilterByName movieOrTv={'movie'} />
            <HomeTrendingMovies />
            <TopRatedMovies />
        </>
    )
}
