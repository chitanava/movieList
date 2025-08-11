import WatchedListItem from "./WatchedListItem.jsx";

export default function WatchedList({watched, onDeleteWatched, onSelectMovie}) {
    return (
        <ul className='divide-y divide-base-content/10 px-6'>
            {watched.map(movie => <WatchedListItem key={movie.id} movie={movie} onDeleteWatched={onDeleteWatched}
                                                   onSelectMovie={onSelectMovie}/>)}
        </ul>
    );
}