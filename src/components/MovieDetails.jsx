import Poster from "./Poster.jsx";
import StarRating from "./StarRating.jsx";
import {useEffect, useState} from "react";

export default function MovieDetails({
                                         movie,
                                         onCloseMovie,
                                         onAddMovie,
                                         isWatched,
                                         watchedUserRating,
                                         onUpdateMovie,
                                         onStep,
                                         movies
                                     }) {
    const [userRating, setUserRating] = useState(null);

    const {
        Title: title,
        Year: year,
        Runtime: runtime,
        Genre: genre,
        Director: director,
        Writer: writer,
        Actors: actors,
        Plot: plot,
        Country: country,
        Awards: awards,
        Poster: poster,
        Ratings: ratings,
        imdbRating,
        imdbVotes,
        imdbID,
        Type: type,
        BoxOffice: boxOffice,
    } = movie

    useEffect(() => {
        if (!title) return;

        document.title = `Movilog | ${title}`;

        return () => document.title = 'Movilog';
    }, [title]);

    function handleAdd() {
        const movie = {
            imdbID,
            title,
            year,
            poster,
            imdbRating,
            runtime,
            userRating,
            genre
        }

        onAddMovie(movie);

        onCloseMovie();

        onStep(4);
    }

    function handleUpdate() {
        const movie = {
            imdbID,
            userRating,
        }

        onUpdateMovie(movie);
    }

    return (<div className='space-y-6 p-6'>
        <div className='flex'>
            <Poster poster={poster} title={title} className='rounded-md w-52 h-[19.5rem]' iconSize={5}/>

            <div className='px-6'>
                <h1 className='text-2xl font-bold mb-2'>{title}</h1>
                <ul className='flex gap-4 mb-2'>
                    <li><span className='text-base-content/70'>{year}</span></li>
                    <li><span className='text-base-content/70'>{type}</span></li>
                    <li><span className='text-base-content/70'>{runtime}</span></li>
                </ul>
                <div className='flex gap-1 items-center mb-8'>
                    <span className='text-base-content/70'>IMDb</span>
                    <span className="text-orange-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                 fill="currentColor" className="size-4">
                              <path fillRule="evenodd"
                                    d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                    clipRule="evenodd"/>
                            </svg>
                        </span>
                    <span className='text-base-content/70'>{imdbRating} ({imdbVotes})</span>
                </div>

                <ul className='flex gap-2'>
                    {genre.split(',').map((g, i) =>
                        <li
                            key={i}
                            className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>
                            {g.trim()}
                        </li>)}
                </ul>
            </div>
        </div>

        <div className='px-12 space-y-6'>
            <p className=''>{plot}</p>

            <div className='bg-base-content/20 p-6 rounded-lg space-y-6'>
                {isWatched && <div role="alert" className="alert alert-info alert-soft justify-center">
                    <span>You have already rated this movie {watchedUserRating} stars!</span>
                </div>}

                <div className='flex gap-2 justify-center items-center'>
                    <StarRating onSetRating={num => {
                        setUserRating(num)

                        !isWatched && onStep(3)
                    }} defaultRating={watchedUserRating ?? 0}/>

                    <div className='flex items-center gap-0.5'>
                        <span className='font-bold text-xl'>{(userRating || watchedUserRating) ?? `0`}</span>
                        <span className='text-base-content text-sm opacity-70'>/</span>
                        <span className='text-base-content text-sm opacity-70'>10</span>
                    </div>
                </div>

                {isWatched ? (<button
                    onClick={handleUpdate}
                    disabled={!userRating || userRating === watchedUserRating}
                    className="btn btn-primary btn-block">Update rating
                </button>) : (<button
                    onClick={handleAdd}
                    disabled={!userRating}
                    className="btn btn-primary btn-block">Add to list
                </button>)}
            </div>

            <div className="divider">OR</div>

            <div className='rounded-lg text-center'>
                <button className="btn btn-link text-base-content" onClick={() => {
                    onCloseMovie()

                    movies.length ? onStep(1) : onStep(0)
                }}>
                    Return to watched list
                </button>
            </div>

            <div>
                <ul>
                    <li>
                        <span className='font-bold'>Starring:</span> {actors}
                    </li>
                    <li>
                        <span className='font-bold'>Direted by:</span> {director}
                    </li>
                    <li>
                        <span className='font-bold'>Writer:</span> {writer}
                    </li>
                </ul>
            </div>
        </div>
    </div>);
}