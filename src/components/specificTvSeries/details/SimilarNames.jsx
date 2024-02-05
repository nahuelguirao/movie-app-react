import { useNavigateTvSeries } from "../../../hooks/useNavigateTvSeries"
import { TvSeriePoster } from "../../home/trendingTvSeries/TvSeriePoster"
import { TvSerieInfo } from "../../home/trendingTvSeries/TvSerieInfo"
import { TvSerieCalification } from "../../home/trendingTvSeries/TvSerieCalification"

export function SimilarNames({ similar }) {
    const { handleCardClick } = useNavigateTvSeries()

    return (
        <>
            {similar &&
                <div className="similarTitles">
                    <h3>You may also like</h3>
                    <div className="trendingContainer">
                        {similar && (similar.map(serie => (
                            serie.poster_path && (
                                <div key={serie.id} className="cardTrending" onClick={() => handleCardClick(serie.id)}>
                                    <TvSeriePoster serie={serie} />
                                    <TvSerieInfo serie={serie} />
                                    <TvSerieCalification serie={serie} />
                                </div>
                            )
                        )))}
                    </div>
                </div>
            }
        </>
    )
}