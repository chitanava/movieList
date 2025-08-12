import Loader from "./Loader.jsx";
import MovieDetails from "./MovieDetails.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import useMovieDetails from "../hooks/useMovieDetails.js";
import {useEffect, useRef} from "react";

export default function SelectedMovie({
                                          selectedMovieID,
                                          onCloseMovie,
                                          onAddMovie,
                                          watched,
                                          onUpdateMovie,
                                          onStep,
                                          movies
                                      }) {
    const {loading, error, movie} = useMovieDetails(selectedMovieID)

    const isWatched = watched.map(movie => movie.imdbID).includes(selectedMovieID);
    const watchedUserRating = watched.find(movie => movie.imdbID === selectedMovieID)?.userRating || null;

    return (loading && <Loader/>) || (error && <ErrorMessage/>) ||
        <MovieDetails movie={movie} onCloseMovie={onCloseMovie} onAddMovie={onAddMovie} isWatched={isWatched}
                      watchedUserRating={watchedUserRating} onUpdateMovie={onUpdateMovie} onStep={onStep}
                      movies={movies}/>;
}