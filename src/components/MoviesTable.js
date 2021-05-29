import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LikeIcon from './LikeIcon'


const MoviesTable = ({movies, onLike, onDelete,onSorting, sortColumn, order}) => {
    
    return (
        <div>
            <table className='table'>    
                <thead>
                        <tr>
                            <th onClick={()=>onSorting('title')}>Title</th>
                            <th onClick={()=>onSorting('genre.id')}>Genre</th>
                            <th onClick={()=>onSorting('numberInStock')}>Stock</th>
                            <th onClick={()=>onSorting('dailyRentalRate')}>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                    
                    <tr key={movie.id}>    
                        <td><Link className="nav-link" to={`/movies/${movie.id}`}>{movie.title}</Link></td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><LikeIcon liked={movie.liked} onClick={()=>onLike(movie.id)} /></td>
                        <td><button onClick={()=>onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
                
        </div>
    )
}

export default MoviesTable
