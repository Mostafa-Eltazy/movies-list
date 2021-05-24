import React from 'react'
import {useState} from 'react'
import {filtered} from '../components/Movies'

const ListGroup = ({genres,selectedGenre, handleGenreSelect}) => {
    return (
        <div>
           <ul className="list-group">
           <li onClick={()=>handleGenreSelect('')}
                    className={!selectedGenre ? "list-group-item active":"list-group-item"}>All
                    </li>
                {genres.map(g => 
                    <li onClick={()=>handleGenreSelect(g)}
                    key={g.id}
                    className={selectedGenre.id === g.id ? "list-group-item active":"list-group-item"}>{g.name}
                    </li>
                )}
          </ul>
          
        </div>
    )
}

export default ListGroup
