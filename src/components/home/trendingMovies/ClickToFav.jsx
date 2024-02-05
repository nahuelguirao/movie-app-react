import { useContext } from "react";
import { FavMoviesContext } from "../../../context/FavMoviesContext";
import { FaHeart } from "react-icons/fa";

export function ClickToFav({ movie }) {
    const { addFavMovie } = useContext(FavMoviesContext)

    return (
        <FaHeart className="favIcon" onClick={() => addFavMovie(movie)} />
    )
}