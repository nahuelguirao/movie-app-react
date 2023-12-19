import { CarouselTvSeries } from "../components/carousels/carouselTvSeries/carouselTvSeries"
import { FilterByName } from "../components/filterName/FilterByName"
import { HomeTrendingTvSeries } from "../components/home/trendingTvSeries/HomeTrendingTvSeries"
import { TopRatedTvSeries } from "../components/home/TopRatedTvSeries"

export const TvSeries = () => {
    return (
        <>
            <CarouselTvSeries />
            <FilterByName movieOrTv={'tv'} />
            <HomeTrendingTvSeries />
            <TopRatedTvSeries />
        </>
    )
}
