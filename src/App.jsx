import { useEffect } from 'react'
import { Header } from './components/header/Header'
import { Home } from './routes/Home'
import { Movies } from './routes/Movies'
import { TvSeries } from './routes/TvSeries'
import { MovieDetails } from './components/specificMovie/MovieDetails'
import { SerieDetails } from './components/specificTvSeries/SerieDetails'
import { ActorDetails } from './components/specificActor/ActorDetails'
import { FavMovies } from './components/favMovies/FavMovies'
import { Footer } from './components/home/Footer'
import { Route, Routes, Navigate } from 'react-router-dom'
import { FavMoviesProvider } from './context/FavMoviesContext'
import toast, { Toaster } from 'react-hot-toast'
import './styles/App.css'

function App() {
  useEffect(() => {
    toast('Scroll down and touch a poster or an actor photo to get more info!', {
      icon: '💡',
    });
  }, [])


  return (
    <FavMoviesProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvseries' element={<TvSeries />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/tvseries/:id' element={<SerieDetails />} />
        <Route path='/person/:id' element={<ActorDetails />} />
        <Route path='/favs' element={<FavMovies />} />
        <Route path='/*' element={<Navigate to={'/'} />}></Route>
      </Routes>
      <Footer />
      <Toaster toastOptions={{ style: { textAlign: 'center' } }} />
    </FavMoviesProvider>
  )
}

export default App
