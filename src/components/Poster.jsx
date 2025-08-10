import {useState} from "react";

export default function Poster({poster, title}) {
    const [error, setError] = useState(false);

    return !poster || error
        ? (
            <div className='rounded-2xl w-24 h-36 bg-base-content/20 flex items-center justify-center'>
                <span className='text-base-content/50'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                    </svg>
                </span>
            </div>
        )
        : (
            <img
                className='rounded-2xl w-24 h-36 object-cover object-center'
                src={poster}
                alt={`Poster of ${title}`}
                onError={() => setError(true)}
            />
        );
}