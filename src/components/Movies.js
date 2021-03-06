import React from 'react'
import { Link } from 'react-router-dom'
import {getMovies, deleteMovie} from '../Services/moviesService'
import {getGenres} from '../Services/genreService'
import {useState, useEffect} from 'react'
import Pagination from './Pagination'
import MoviesTable from './MoviesTable'
import ListGroup from './listGroup'
import SearchBox from './SearchBox';
import _ from 'lodash'
import { toast } from 'react-toastify'



const Movies = () => {
    const [genres, setgenres] = useState([])
    const [pageSize, setpageSize] = useState(4)
    const [selectedGenre, setselectedGenre] = useState("")
    const [searchQuery, setsearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [sortColumn, setsortColumn] = useState('title')
    const [order, setOrder] = useState('asc')
    const [movies, setMovies] = useState([])
    
    
    useEffect(()=>{
        async function fetchGenres(){
        const {data} = await getGenres()
        const genres = [...data]
        setgenres(genres)
        }
        async function fetchMovies(){
        const {data} = await getMovies()
        const moviesList = [...data]
        setMovies(moviesList)
        }
    fetchGenres();
    fetchMovies();

    },[])
  // functions
  const performingFiltration = (selectedGenre)=>{

        return  searchQuery ? movies.filter(m=>m.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
                : selectedGenre ? movies.filter(m=> m.genre._id === selectedGenre._id) : movies
        
    }
    const performingSorting = (items) => {
        return _.orderBy(items, [sortColumn],[order])
    }
    const performingPagination=(items, pageNumber, pageSize)=>{
        const startIndex = (pageNumber - 1)*pageSize
        return _(items).slice(startIndex).take(pageSize).value()
    }
    const onPagePagination = (page) =>{
        setCurrentPage(page)
    }
    // Handlers
    const handleGenreSelect = (g) =>{
        setselectedGenre(g)
        setsearchQuery("")
        onPagePagination(1)        
    }
    const handleSearch = (query)=>{
        setsearchQuery(query)
        setselectedGenre("")
        setCurrentPage(1)
    }
    const handleSorting = (path)=>{
        console.log(path)
        setsortColumn(path)
        sortColumn === path ? setOrder('desc') : setOrder('asc')
    }
    const handleLike = (id) => {
        setMovies(movies.map(movie=>
          id === movie._id ?
          {...movie, liked:!movie.liked}
          :movie));
      }
      const handleDelete = async (movie) => {
        const originalMovies = [...movies]
        const newMoviesList = originalMovies.filter(m=>m._id !== movie._id)
        try {
            await deleteMovie(movie._id)
            setMovies(newMoviesList)
        } catch (ex){
            if(ex.response && ex.response.status === 404){
                toast.error("This movie has been deleted")
                setMovies(originalMovies)
            }
        }
      }
  
    // Variables
    const filteredMovies = performingFiltration(selectedGenre)
    const sortedMovies = performingSorting(filteredMovies)
    const paginatedMovies = performingPagination(sortedMovies, currentPage, pageSize)
    return (
        <div className="row">
            <div className="col-2">
            <ListGroup 
             genres={genres}
             selectedGenre={selectedGenre}
              handleGenreSelect={handleGenreSelect}/>    
            </div>
            <div className="col">
                <Link className="btn btn-primary" style={{marginBottom: 20}}to="/movies/new">New Movie</Link>
                <p>The number of movies avilabe are {filteredMovies.length}</p>
                <SearchBox
                    value={searchQuery}
                    onChange={handleSearch}
                />
                
                {filteredMovies.length === 0 ? <p>There are no Movies to be displayed</p>:
                <MoviesTable 
                movies={paginatedMovies}
                onLike={handleLike}
                onDelete={handleDelete}
                onSorting={handleSorting}
                sortColumn={sortColumn}
                order={order}/>}

                <Pagination 
                onPagePagination={onPagePagination}
                pageSize={pageSize}
                moviesNumber={filteredMovies.length}
                currentPage={currentPage}/>
        
                </div>

            </div>
    )
}

export default Movies
