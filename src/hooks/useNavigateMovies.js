import { useNavigate } from "react-router-dom"

export function useNavigateMovies() {
    const navigate = useNavigate()

    //Navigate to specific movie info
    const handleCardClick = (id) => {
        navigate(`/movies/${id}`)
        window.scrollTo(0, 0)
    }

    return handleCardClick
}