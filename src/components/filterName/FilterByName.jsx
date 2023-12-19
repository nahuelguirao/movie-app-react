import { useMovieByName } from '../../hooks/useMovieByName'
import { FilterByNameForm } from './FilterByNameForm'
import { FilteredResults } from './FilteredResults'
import '../../styles/filterByName.css'


export function FilterByName({ movieOrTv }) {
    //Custom hook to get searched movie data
    const { data, onSearch, error } = useMovieByName(movieOrTv)
    return (
        <section className='filterByNameSection'>
            <FilterByNameForm onSearch={onSearch} movieOrTv={movieOrTv} />
            <FilteredResults data={data} error={error} />
        </section>
    )
}
