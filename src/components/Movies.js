import React from 'react'
import LikeIcon from './LikeIcon'
import Pagination from './Pagination'
import _ from 'lodash'
import ListGroup from './listGroup'



const Movies = ({movies, onDelete, handleLike, onPagePagination,moviesNumber, pageSize, currentPage,genres, handleGenreSelect}) => {
  
    const performingPagination=(items, pageNumber, pageSize)=>{
        const startIndex = (pageNumber - 1)*pageSize
        return _(items).slice(startIndex).take(pageSize).value()
    }

    const paginatedMovies = performingPagination(movies, currentPage, pageSize)
    console.log(paginatedMovies)
    return (
        <div className="row">
            <div className="col-2">
            <ListGroup genres={genres} handleGenreSelect={handleGenreSelect}/>    
            </div>
            <div className="col">
                <p>The number of movies avilabe are {movies.length}</p>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {paginatedMovies.map(movie => (
                    
                    <tr key={movie.id}>    
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><LikeIcon liked={movie.liked} onClick={()=>handleLike(movie.id)} /></td>
                        <td><button onClick={()=>onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                    ))}
                    </tbody>
                </table>
                <Pagination 
                onPagePagination={onPagePagination}
                pageSize={pageSize}
                moviesNumber={moviesNumber}
                currentPage={currentPage}/>
        
                </div>

            </div>
    )
}

export default Movies
