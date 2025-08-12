import WatchedListItem from "./WatchedListItem.jsx";

export default function WatchedList({watched, onDeleteWatched, onSelectMovie, onStep, movies}) {
    return (
        <ul className='divide-y divide-base-content/10 px-0'>
            {watched.map((movie, index) => <WatchedListItem key={movie.imdbID} movie={movie}
                                                            onDeleteWatched={onDeleteWatched}
                                                            onSelectMovie={onSelectMovie}
                                                            index={index + 1}
                                                            onStep={onStep}
                                                            movies={movies}
            />)}
        </ul>
    );
}