export default function Movie() {
    return (
        <div className='space-y-6 p-6'>
            <div className='flex'>
                <img
                    className='rounded-md'
                    src="https://m.media-amazon.com/images/M/MV5BMmU1MTk1MWMtMDYzZC00OTU5LWI5YmUtMTk0NWRjMDdiYmExXkEyXkFqcGc@._V1_QL75_UY281_CR2,0,190,281_.jpg"
                    alt=""/>

                <div className='px-6'>
                    <h1 className='text-2xl font-bold mb-2'>Lorem ipsum dolor sit amet.</h1>
                    <ul className='flex gap-4 mb-8'>
                        <li><span className='text-base-content/70'>2015</span></li>
                        <li><span className='text-base-content/70'>1h 43m</span></li>
                        <li className='flex gap-1 items-center'>
                            <span className='text-base-content/70'>IMDb</span>
                            <span className="text-orange-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                     fill="currentColor" className="size-4">
                                                  <path fillRule="evenodd"
                                                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                                        clipRule="evenodd"/>
                                                </svg>
                                            </span>
                            <span className='text-base-content/70'>7.5 (79K)</span>
                        </li>
                    </ul>
                    <ul className='flex gap-2'>
                        <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Drama</li>
                        <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Comedy</li>
                        <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Music</li>
                    </ul>
                </div>
            </div>

            <div className='px-12 space-y-6'>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    aliquam
                    architecto
                    asperiores assumenda commodi cumque debitis dolore ducimus ea eveniet
                    exercitationem
                    fugiat magni mollitia pariatur provident quae qui, quibusdam quod reiciendis
                    tempora
                    tenetur unde veniam! A ab adipisci aut, consequatur cum esse excepturi iste
                    laudantium magnam nam officia quaerat ut?</p>

                <div className='bg-base-content/20 p-6 rounded-lg'>
                    <div className='mb-6 flex gap-2 justify-center items-center'>
                        <div className="rating">
                            <input type="radio" name="rating-2"
                                   className="mask mask-star-2 bg-orange-400" aria-label="1 star"/>
                            <input type="radio" name="rating-2"
                                   className="mask mask-star-2 bg-orange-400" aria-label="2 star"
                                   defaultChecked/>
                            <input type="radio" name="rating-2"
                                   className="mask mask-star-2 bg-orange-400" aria-label="3 star"/>
                            <input type="radio" name="rating-2"
                                   className="mask mask-star-2 bg-orange-400" aria-label="4 star"/>
                            <input type="radio" name="rating-2"
                                   className="mask mask-star-2 bg-orange-400" aria-label="5 star"/>
                            <input type="radio" name="rating-2"
                                   className="mask mask-star-2 bg-orange-400" aria-label="6 star"/>
                            <input type="radio" name="rating-2"
                                   className="mask mask-star-2 bg-orange-400" aria-label="7 star"
                                   defaultChecked/>
                            <input type="radio" name="rating-2"
                                   className="mask mask-star-2 bg-orange-400" aria-label="8 star"/>
                            <input type="radio" name="rating-2"
                                   className="mask mask-star-2 bg-orange-400" aria-label="9 star"/>
                            <input type="radio" name="rating-2"
                                   className="mask mask-star-2 bg-orange-400" aria-label="10 star"/>
                        </div>
                        <div className='flex items-center gap-0.5'>
                            <span className='font-bold text-xl'>0</span>
                            <span className='text-base-content text-sm opacity-70'>/</span>
                            <span className='text-base-content text-sm opacity-70'>10</span>
                        </div>
                    </div>

                    <button className="btn btn-primary btn-block">Add to list</button>
                </div>

                <div className="divider">OR</div>

                <div className='rounded-lg text-center'>
                    <button className="btn btn-link text-base-content">Return to the
                        watched list
                    </button>
                </div>

                <div>
                    <ul>
                        <li>
                            <span className='font-bold'>Starring:</span> Lorem ipsum dolor sit amet,
                            consectetur.
                        </li>
                        <li>
                            <span className='font-bold'>Direted by:</span> Lorem ipsum.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}