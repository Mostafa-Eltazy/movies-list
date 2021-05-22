import React from 'react'

const ListGroup = ({genres, handleGenreSelect}) => {
    console.log(genres)
    return (
        <div>
           <ul className="list-group">
                {genres.map(g => 
                    <li key={g.id} className="list-group-item">{g.name}</li>
                )}
          </ul>
          
        </div>
    )
}

export default ListGroup
