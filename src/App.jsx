import { Header } from './components/header/Header'
import { Home } from './routes/Home'
import { Movies } from './routes/Movies'
import { TvSeries } from './routes/TvSeries'
import { MovieDetails } from './components/specificMovie/MovieDetails'
import { SerieDetails } from './components/specificTvSeries/SerieDetails'
import { ActorDetails } from './components/specificActor/ActorDetails'
import { InfoMessage } from './components/home/InfoMessage'
import { Footer } from './components/home/Footer'
import { Route, Routes, Navigate } from 'react-router-dom'
import './styles/App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvseries' element={<TvSeries />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/tvseries/:id' element={<SerieDetails />} />
        <Route path='/person/:id' element={<ActorDetails />} />
        <Route path='/*' element={<Navigate to={'/'} />}></Route>
      </Routes>
      <InfoMessage />
      <Footer />
    </>
  )
}

export default App
