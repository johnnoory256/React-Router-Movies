import React from 'react';
import {Link} from 'react-router-dom'

const MovieCard = props => {
  
    
  return (
    
    <div className="movie-card">
      <Link className="" to={`./movies/${props.to}`}>
        <h2>{props.title}</h2>
        <div className="movie-director">
          Director: <em>{props.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {props.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      
      <div className="save-button" onClick={props.saveOnClick}>Save</div>
      </Link>
      </div>
     
    
  );
};

export default MovieCard;