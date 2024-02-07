import { useNavigateTvSeries } from "../../../hooks/useNavigateTvSeries"
import { TvSeriePoster } from "../../home/trendingTvSeries/TvSeriePoster"
import { TvSerieInfo } from "../../home/trendingTvSeries/TvSerieInfo"
import { TvSerieCalification } from "../../home/trendingTvSeries/TvSerieCalification"
import { ClickToFav } from "../../home/trendingMovies/ClickToFav"

export function SimilarNames({ similar }) {
    const { handleCardClick } = useNavigateTvSeries()

    return (
        <>
            {similar && similar.length >= 1 &&
                <div className="similarTitles">
                    <h3>You may also like</h3>
                    <div className="trendingContainer">
                        {similar && (similar.map(serie => (
                            serie.poster_path && (
                                <div key={serie.id} className="cardTrending" >
                                    <TvSeriePoster serie={serie} />
                                    <TvSerieInfo serie={serie} onClick={() => handleCardClick(serie.id)} />
                                    <TvSerieCalification serie={serie} />
                                    <ClickToFav movie={serie} />
                                </div>
                            )
                        )))}
                    </div>
                </div>
            }
        </>
    )
}