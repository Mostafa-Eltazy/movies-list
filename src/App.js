import 'bootstrap/dist/css/bootstrap.min.css'
import Movies from './components/Movies'
import Pagination from './components/Pagination'
import {getMovies} from './components/fakeMovieService'
import {useState, useEffect} from 'react'
import './App.css';
import { getGenres } from './components/fakeGereService'

function App() {
  const [movies, setMovies] = useState(getMovies())
  const [genres, setgenres] = useState(getGenres())
  const [liked, setLiked] = useState()
  const [pagesize, setPageSize] = useState(4)
  
  // useEffect(()=>{
  //   setMovies(getMovies());
  //   setgenres(getGenres())
  // })
    
    const handleLike = (id) => {
      setMovies(movies.map(movie=>
        id === movie.id ?
        {...movie, liked:!movie.liked}
        :movie));
    }
    const handleDelete = (movie) => {
        
    setMovies(movies.filter(m=>m.id !== movie.id));
    }


  return (
    <div className='container'>
      {movies.length === 0 ?
      <p>No Movies to Show</p>
      : <Movies 
        movies={movies}
        onDelete={handleDelete}
        handleLike={handleLike}
        liked={liked}
        moviesNumber={movies.length}
        pageSize={pagesize}
        genres={genres}/>
      }
    </div>
  );
}

export default App;
