import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";

export const FavMoviesContext = createContext()

export const FavMoviesProvider = ({ children }) => {
    const [favMovies, setFavMovies] = useState()

    useEffect(() => {
        const favMoviesFromStorage = localStorage.getItem('favMovies')

        if (favMoviesFromStorage) {
            setFavMovies(JSON.parse(favMoviesFromStorage))
            return
        }
        setFavMovies([])
    }, [])

    useEffect(() => {
        if (favMovies) {
            localStorage.setItem('favMovies', JSON.stringify(favMovies))
        }
    }, [favMovies])

    const addFavMovie = (newMovie) => {
        const alreadyExist = favMovies.find(movie => movie.id == newMovie.id)
        if (!alreadyExist) {
            setFavMovies((prevState) => [...prevState, newMovie])
            toast('Added to favs!', {
                icon: '❤️',
            });
            return
        }
        toast.error('Already added!')
    }

    const removeFavMovie = (id) => {
        setFavMovies((prevState) => prevState.filter(oldMovie => oldMovie.id != id))
        toast.success('Deleted!')
    }

    const contextValue = {
        favMovies,
        addFavMovie,
        removeFavMovie
    }

    return (
        < FavMoviesContext.Provider value={contextValue}>
            {children}
        </FavMoviesContext.Provider >
    )
}