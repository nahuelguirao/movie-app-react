import { useNavigate } from "react-router-dom"

export function useNavigateTvSeries() {
    const navigate = useNavigate()

    //Navigate to specific serie info
    const handleCardClick = (id) => {
        navigate(`/tvseries/${id}`)
        window.scrollTo(0, 0)
    }

    return { handleCardClick }
}