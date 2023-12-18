import React from 'react'

const MovieCard = ({movieTitle,cardImage}) => {
  return (
    <div className="card ">
        <img src={cardImage} />
    </div>
  )
}

export default MovieCard