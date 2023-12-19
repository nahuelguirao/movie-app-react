import { useNavigate } from "react-router-dom"

export function useNavigateActors() {
    const navigate = useNavigate()

    //Navigate to specific movie info
    const handleCardClick = (id) => {
        navigate(`/person/${id}`)
        window.scrollTo(0, 0)
    }

    return handleCardClick
}