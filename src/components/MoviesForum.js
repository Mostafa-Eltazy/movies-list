import React from 'react'

const MoviesForum = ({match,history}) => {
    console.log(match.params.id)
    return (
        <div>
            
            <h1>Movies Forum : {match.params.id}</h1>
            <button className="btn btn-primary" onClick={()=> history.push('/movies')}> Save </button>
        </div>
    )
}

export default MoviesForum
