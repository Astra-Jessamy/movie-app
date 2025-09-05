import React from 'react';

const MovieList = (props) => {
    const favouriteComponent = props.favouriteComponent;

    return (
        <>
                    {(props.movies && Array.isArray(props.movies) ? props.movies : []).map((movie, index) => (
            <div className='image-container d-flex justify-content-center m-3'>
                <img src={movie.Poster} alt='movie'></img>
                <div 
                    onClick={()=> props.handleFavouritesClick(movie)}
                    className='overlay d-flex align-items-center justify-content'></div>
                    <favouriteComponent />
            </div>
            ))}
        </>
    );
};

export default MovieList;
