import MovieListItem from "./MovieListItem.jsx";
import {useEffect} from "react";

export default function MovieList({movies, onSelectMovie, onStep}) {
    const count = movies?.length;

    useEffect(() => {
        onStep(1);

        return () => onStep(0);
    }, [onStep]);

    return (
        <>
            <p className='pt-6 px-6 text-sm text-base-content/70'>{count > 1 ? `${count} titles` : `${count} title`} </p>
            <ul className='divide-y divide-base-content/10'>
                {movies.map((movie, index) => (
                    <MovieListItem key={movie.imdbID} movie={movie} index={index + 1} onSelectMovie={onSelectMovie}
                                   onStep={onStep}/>
                ))}
            </ul>
        </>
    );
}