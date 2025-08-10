import MovieListItem from "./MovieListItem.jsx";

export default function MovieList({movies, onSelectMovie}) {
    const count = movies?.length;

    return (
        <div className='p-6'>
            <p className='text-sm text-base-content/70 ml-4'>{count > 1 ? `${count} titles` : `${count} title`} </p>
            <ul className='divide-y divide-base-content/10'>
                {movies.map((movie, index) => (
                    <MovieListItem key={movie.imdbID} movie={movie} index={index + 1} onSelectMovie={onSelectMovie}/>
                ))}
            </ul>
        </div>
    );
}