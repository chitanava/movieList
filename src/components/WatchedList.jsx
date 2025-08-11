import WatchedListItem from "./WatchedListItem.jsx";

export default function WatchedList({watched, onDeleteWatched, onSelectMovie}) {
    return (
        <ul className='divide-y divide-base-content/10 px-6'>
            {watched.map((movie, index) => <WatchedListItem key={movie.imdbID} movie={movie}
                                                            onDeleteWatched={onDeleteWatched}
                                                            onSelectMovie={onSelectMovie} index={index + 1}/>)}
        </ul>
    );
}