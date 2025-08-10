import Poster from "./Poster.jsx";

export default function MovieListItem({movie, index, onSelectMovie}) {
    const {
        Title: title,
        Year: year,
        imdbID,
        Type: type,
        Poster: poster
    } = movie

    return (
        <li
            onClick={() => onSelectMovie(imdbID)}
            className='space-y-2 py-6 px-4 cursor-pointer bg-transparent hover:bg-gradient-to-t hover:from-base-content/10 hover:to-transparent'>
            <div className='flex gap-4 items-center'>
                <Poster poster={poster} title={title}/>

                <div className='space-y-2'>
                    <h2 className='font-bold text-lg'>{index}. {title}</h2>
                    <ul className='flex gap-4'>
                        <li><span className='text-base-content/70'>{year}</span></li>
                        <li><span className='text-base-content/70'>{type}</span></li>
                        {/*<li className='flex gap-1 items-center'>*/}
                        {/*    <span className="text-orange-400">*/}
                        {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"*/}
                        {/*             fill="currentColor" className="size-4">*/}
                        {/*          <path fillRule="evenodd"*/}
                        {/*                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"*/}
                        {/*                clipRule="evenodd"/>*/}
                        {/*        </svg>*/}
                        {/*    </span>*/}
                        {/*    <span className='text-base-content/70'>7.5 (79K)</span>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
            {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi, incidunt*/}
            {/*    officiis praesentium rerum vitae.</p>*/}
        </li>
    );
}