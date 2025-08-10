export default function WatchedList() {
    return (
        <ul className='divide-y divide-base-content/10 px-6'>
            <li className='space-y-2 py-6 px-4'>
                <div className='flex gap-4 items-center'>
                    <img
                        className='rounded-2xl'
                        src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                        alt=""/>
                    <div
                        className='grid grid-cols-[1fr_auto] items-center w-full'>
                        <div>
                            <h2 className='font-bold text-lg mb-2'>1. Lorem ipsum</h2>
                            <ul className='flex gap-4 mb-6'>
                                <li><span className='text-base-content/70'>2015</span></li>
                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>IMDb:</span>
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
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>Your:</span>
                                    <span className="text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                 fill="currentColor" className="size-4">
                                              <path fillRule="evenodd"
                                                    d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                                    clipRule="evenodd"/>
                                            </svg>
                                        </span>
                                    <span className='text-base-content/70'>7.5</span>
                                </li>
                            </ul>
                            <ul className='flex gap-2'>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Drama</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Comedy</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Music</li>
                            </ul>
                        </div>
                        <button className="btn btn-md btn-circle bg-error/10">
                                <span className="text-error">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                         fill="currentColor" className="size-4">
                                        <path fillRule="evenodd"
                                              d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </span>
                        </button>
                    </div>
                </div>

            </li>
            <li className='space-y-2 py-6 px-4'>
                <div className='flex gap-4 items-center'>
                    <img
                        className='rounded-2xl'
                        src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                        alt=""/>
                    <div
                        className='grid grid-cols-[1fr_auto] items-center w-full'>
                        <div>
                            <h2 className='font-bold text-lg mb-2'>1. Lorem ipsum</h2>
                            <ul className='flex gap-4 mb-6'>
                                <li><span className='text-base-content/70'>2015</span></li>
                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>IMDb:</span>
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
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>Your:</span>
                                    <span className="text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                             fill="currentColor" className="size-4">
                                                          <path fillRule="evenodd"
                                                                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                                                clipRule="evenodd"/>
                                                        </svg>
                                                    </span>
                                    <span className='text-base-content/70'>7.5</span>
                                </li>
                            </ul>
                            <ul className='flex gap-2'>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Drama</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Comedy</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Music</li>
                            </ul>
                        </div>
                        <button className="btn btn-md btn-circle bg-error/10">
                                                <span className="text-error">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                         fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd"
                                                              d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </span>
                        </button>
                    </div>
                </div>

            </li>
            <li className='space-y-2 py-6 px-4'>
                <div className='flex gap-4 items-center'>
                    <img
                        className='rounded-2xl'
                        src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                        alt=""/>
                    <div
                        className='grid grid-cols-[1fr_auto] items-center w-full'>
                        <div>
                            <h2 className='font-bold text-lg mb-2'>1. Lorem ipsum</h2>
                            <ul className='flex gap-4 mb-6'>
                                <li><span className='text-base-content/70'>2015</span></li>
                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>IMDb:</span>
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
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>Your:</span>
                                    <span className="text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                             fill="currentColor" className="size-4">
                                                          <path fillRule="evenodd"
                                                                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                                                clipRule="evenodd"/>
                                                        </svg>
                                                    </span>
                                    <span className='text-base-content/70'>7.5</span>
                                </li>
                            </ul>
                            <ul className='flex gap-2'>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Drama</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Comedy</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Music</li>
                            </ul>
                        </div>
                        <button className="btn btn-md btn-circle bg-error/10">
                                                <span className="text-error">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                         fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd"
                                                              d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </span>
                        </button>
                    </div>
                </div>

            </li>
            <li className='space-y-2 py-6 px-4'>
                <div className='flex gap-4 items-center'>
                    <img
                        className='rounded-2xl'
                        src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                        alt=""/>
                    <div
                        className='grid grid-cols-[1fr_auto] items-center w-full'>
                        <div>
                            <h2 className='font-bold text-lg mb-2'>1. Lorem ipsum</h2>
                            <ul className='flex gap-4 mb-6'>
                                <li><span className='text-base-content/70'>2015</span></li>
                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>IMDb:</span>
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
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>Your:</span>
                                    <span className="text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                             fill="currentColor" className="size-4">
                                                          <path fillRule="evenodd"
                                                                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                                                clipRule="evenodd"/>
                                                        </svg>
                                                    </span>
                                    <span className='text-base-content/70'>7.5</span>
                                </li>
                            </ul>
                            <ul className='flex gap-2'>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Drama</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Comedy</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Music</li>
                            </ul>
                        </div>
                        <button className="btn btn-md btn-circle bg-error/10">
                                                <span className="text-error">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                         fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd"
                                                              d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </span>
                        </button>
                    </div>
                </div>

            </li>
            <li className='space-y-2 py-6 px-4'>
                <div className='flex gap-4 items-center'>
                    <img
                        className='rounded-2xl'
                        src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                        alt=""/>
                    <div
                        className='grid grid-cols-[1fr_auto] items-center w-full'>
                        <div>
                            <h2 className='font-bold text-lg mb-2'>1. Lorem ipsum</h2>
                            <ul className='flex gap-4 mb-6'>
                                <li><span className='text-base-content/70'>2015</span></li>
                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>IMDb:</span>
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
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>Your:</span>
                                    <span className="text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                             fill="currentColor" className="size-4">
                                                          <path fillRule="evenodd"
                                                                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                                                clipRule="evenodd"/>
                                                        </svg>
                                                    </span>
                                    <span className='text-base-content/70'>7.5</span>
                                </li>
                            </ul>
                            <ul className='flex gap-2'>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Drama</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Comedy</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Music</li>
                            </ul>
                        </div>
                        <button className="btn btn-md btn-circle bg-error/10">
                                                <span className="text-error">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                         fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd"
                                                              d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </span>
                        </button>
                    </div>
                </div>

            </li>
            <li className='space-y-2 py-6 px-4'>
                <div className='flex gap-4 items-center'>
                    <img
                        className='rounded-2xl'
                        src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                        alt=""/>
                    <div
                        className='grid grid-cols-[1fr_auto] items-center w-full'>
                        <div>
                            <h2 className='font-bold text-lg mb-2'>1. Lorem ipsum</h2>
                            <ul className='flex gap-4 mb-6'>
                                <li><span className='text-base-content/70'>2015</span></li>
                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>IMDb:</span>
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
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>Your:</span>
                                    <span className="text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                             fill="currentColor" className="size-4">
                                                          <path fillRule="evenodd"
                                                                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                                                clipRule="evenodd"/>
                                                        </svg>
                                                    </span>
                                    <span className='text-base-content/70'>7.5</span>
                                </li>
                            </ul>
                            <ul className='flex gap-2'>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Drama</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Comedy</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Music</li>
                            </ul>
                        </div>
                        <button className="btn btn-md btn-circle bg-error/10">
                                                <span className="text-error">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                         fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd"
                                                              d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </span>
                        </button>
                    </div>
                </div>

            </li>
            <li className='space-y-2 py-6 px-4'>
                <div className='flex gap-4 items-center'>
                    <img
                        className='rounded-2xl'
                        src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                        alt=""/>
                    <div
                        className='grid grid-cols-[1fr_auto] items-center w-full'>
                        <div>
                            <h2 className='font-bold text-lg mb-2'>1. Lorem ipsum</h2>
                            <ul className='flex gap-4 mb-6'>
                                <li><span className='text-base-content/70'>2015</span></li>
                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>IMDb:</span>
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
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>Your:</span>
                                    <span className="text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                             fill="currentColor" className="size-4">
                                                          <path fillRule="evenodd"
                                                                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                                                clipRule="evenodd"/>
                                                        </svg>
                                                    </span>
                                    <span className='text-base-content/70'>7.5</span>
                                </li>
                            </ul>
                            <ul className='flex gap-2'>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Drama</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Comedy</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Music</li>
                            </ul>
                        </div>
                        <button className="btn btn-md btn-circle bg-error/10">
                                                <span className="text-error">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                         fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd"
                                                              d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </span>
                        </button>
                    </div>
                </div>

            </li>
            <li className='space-y-2 py-6 px-4'>
                <div className='flex gap-4 items-center'>
                    <img
                        className='rounded-2xl'
                        src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                        alt=""/>
                    <div
                        className='grid grid-cols-[1fr_auto] items-center w-full'>
                        <div>
                            <h2 className='font-bold text-lg mb-2'>1. Lorem ipsum</h2>
                            <ul className='flex gap-4 mb-6'>
                                <li><span className='text-base-content/70'>2015</span></li>
                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>IMDb:</span>
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
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>Your:</span>
                                    <span className="text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                             fill="currentColor" className="size-4">
                                                          <path fillRule="evenodd"
                                                                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                                                clipRule="evenodd"/>
                                                        </svg>
                                                    </span>
                                    <span className='text-base-content/70'>7.5</span>
                                </li>
                            </ul>
                            <ul className='flex gap-2'>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Drama</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Comedy</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Music</li>
                            </ul>
                        </div>
                        <button className="btn btn-md btn-circle bg-error/10">
                                                <span className="text-error">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                         fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd"
                                                              d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </span>
                        </button>
                    </div>
                </div>

            </li>
            <li className='space-y-2 py-6 px-4'>
                <div className='flex gap-4 items-center'>
                    <img
                        className='rounded-2xl'
                        src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                        alt=""/>
                    <div
                        className='grid grid-cols-[1fr_auto] items-center w-full'>
                        <div>
                            <h2 className='font-bold text-lg mb-2'>1. Lorem ipsum</h2>
                            <ul className='flex gap-4 mb-6'>
                                <li><span className='text-base-content/70'>2015</span></li>
                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>IMDb:</span>
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
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>Your:</span>
                                    <span className="text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                             fill="currentColor" className="size-4">
                                                          <path fillRule="evenodd"
                                                                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                                                clipRule="evenodd"/>
                                                        </svg>
                                                    </span>
                                    <span className='text-base-content/70'>7.5</span>
                                </li>
                            </ul>
                            <ul className='flex gap-2'>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Drama</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Comedy</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Music</li>
                            </ul>
                        </div>
                        <button className="btn btn-md btn-circle bg-error/10">
                                                <span className="text-error">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                         fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd"
                                                              d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </span>
                        </button>
                    </div>
                </div>

            </li>
            <li className='space-y-2 py-6 px-4'>
                <div className='flex gap-4 items-center'>
                    <img
                        className='rounded-2xl'
                        src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                        alt=""/>
                    <div
                        className='grid grid-cols-[1fr_auto] items-center w-full'>
                        <div>
                            <h2 className='font-bold text-lg mb-2'>1. Lorem ipsum</h2>
                            <ul className='flex gap-4 mb-6'>
                                <li><span className='text-base-content/70'>2015</span></li>
                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>IMDb:</span>
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
                                <li className='flex gap-1 items-center'>
                                    <span className='text-base-content/70'>Your:</span>
                                    <span className="text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                             fill="currentColor" className="size-4">
                                                          <path fillRule="evenodd"
                                                                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                                                clipRule="evenodd"/>
                                                        </svg>
                                                    </span>
                                    <span className='text-base-content/70'>7.5</span>
                                </li>
                            </ul>
                            <ul className='flex gap-2'>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Drama</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Comedy</li>
                                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Music</li>
                            </ul>
                        </div>
                        <button className="btn btn-md btn-circle bg-error/10">
                                                <span className="text-error">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                         fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd"
                                                              d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </span>
                        </button>
                    </div>
                </div>

            </li>
        </ul>
    );
}