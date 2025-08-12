function calc(arr, avg = true) {
    return arr.reduce((acc, cur, i, arr) => {
        const value = (parseFloat(cur) || 0);

        return acc + (avg ? value / arr.length : value);
    }, 0);
}

function formatTime(time) {
    const h = Math.trunc(time / 60);
    const m = Number((time % 60).toFixed(2));

    return h > 0 ? `${h}h` : `${m}m`;
}

function formatRating(rating) {
    return Number.isInteger(rating) ? rating : rating.toFixed(1)
}

export default function Stats({watched}) {
    const watchedCount = watched.length;
    const totalTime = calc(watched.map(w => w.runtime), false);
    const avgImdbRating = calc(watched.map(w => w.imdbRating));
    const avgUserRating = calc(watched.map(w => w.userRating));

    const formattedTotalTime = formatTime(totalTime);
    const formattedImdbRating = formatRating(avgImdbRating);
    const formattedUserRating = formatRating(avgUserRating);

    return (
        <div className='sticky top-0 backdrop-blur-2xl py-6 px-6'>
            <ul className='grid grid-cols-4 gap-6 divide-x-2 divide-dashed divide-base-content/20'>
                <li className='space-y-4 pr-6 py-2'>
                    <div className='text-sm text-base-content/70'>Watched</div>
                    <div className='flex justify-between items-center'>
                        <span className='text-3xl font-bold '>{watchedCount}</span>
                        <span className='text-success'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor"
                                     className="size-8">
                                  <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                  <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"/>
                                </svg>
                            </span>
                    </div>
                </li>
                <li className='space-y-4 pr-6 py-2'>
                    <div className='text-sm text-base-content/70'>Total time</div>
                    <div className='flex justify-between items-center'>
                        <span className='text-3xl font-bold'>{formattedTotalTime}</span>
                        <span className='text-error'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor"
                                     className="size-8">
                                  <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                            </span>
                    </div>
                </li>
                <li className='space-y-4 pr-6 py-2'>
                    <div className='text-sm text-base-content/70'>iMDB avg</div>
                    <div className='flex justify-between items-center'>
                        <span className='text-3xl font-bold '>{formattedImdbRating}</span>
                        <span className='text-orange-400'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor"
                                     className="size-8">
                                  <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                </svg>
                            </span>
                    </div>
                </li>
                <li className='space-y-4 pr-6 py-2'>
                    <div className='text-sm text-base-content/70'>Your avg</div>
                    <div className='flex justify-between items-center'>
                        <span className='text-3xl font-bold '>{formattedUserRating}</span>
                        <span className='text-primary'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor"
                                     className="size-8">
                                  <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                </svg>
                            </span>
                    </div>
                </li>
            </ul>
        </div>
    );
}