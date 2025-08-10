import './app.css'

export default function App() {

    return (

        <div className="h-screen grid grid-rows-[auto_auto_1fr]">

            <div className="bg-base-200 shadow-sm py-6 mb-6">
                <div className='mx-auto container'>
                    <label className="input w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow" placeholder="Search"/>
                        <kbd className="kbd kbd-sm">⌘ K</kbd>
                    </label>
                </div>
            </div>

            <div className='mb-6 mx-auto'>
                <ul className="steps">
                    <li className="step step-primary"><span className="step-icon"></span>Search</li>
                    <li className="step step-primary"><span className="step-icon"></span>Select</li>
                    <li className="step"><span className="step-icon"></span>Rate</li>
                    <li className="step"><span className="step-icon"></span>Add to list</li>
                </ul>
            </div>

            <div className='container mx-auto min-h-0 mb-6'>
                <div className='grid grid-cols-2 h-full gap-6'>
                    <div className='bg-base-100 rounded-lg shadow min-h-0'>
                        {/*<div className='text-center py-8'>*/}
                        {/*    <span className="loading loading-spinner loading-xl text-primary"></span>*/}
                        {/*</div>*/}
                        <div className='py-4 px-2 h-full'>
                            <div className='overflow-auto h-full px-2'>
                                <p className='text-sm mb-2 ml-4'>Search results: 35</p>

                                <ul className="divide-y divide-base-200">
                                    <li className="cursor-pointer hover:bg-base-200">
                                        <div className='flex gap-4 items-center py-4 px-4'>
                                            <div>
                                                <img
                                                    className='w-24 mask mask-squircle'
                                                    src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
                                                    alt=""/>
                                            </div>
                                            <div>
                                                <h2 className='font-bold text-xl'>Lorem ipsum dolor.</h2>
                                                <p>1994</p>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cursor-pointer hover:bg-base-200">
                                        <div className='flex gap-4 items-center py-4 px-4'>
                                            <div>
                                                <img
                                                    className='w-24 mask mask-squircle'
                                                    src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
                                                    alt=""/>
                                            </div>
                                            <div>
                                                <h2 className='font-bold text-xl'>Lorem ipsum dolor.</h2>
                                                <p>1994</p>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cursor-pointer hover:bg-base-200">
                                        <div className='flex gap-4 items-center py-4 px-4'>
                                            <div>
                                                <img
                                                    className='w-24 mask mask-squircle'
                                                    src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
                                                    alt=""/>
                                            </div>
                                            <div>
                                                <h2 className='font-bold text-xl'>Lorem ipsum dolor.</h2>
                                                <p>1994</p>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cursor-pointer hover:bg-base-200">
                                        <div className='flex gap-4 items-center py-4 px-4'>
                                            <div>
                                                <img
                                                    className='w-24 mask mask-squircle'
                                                    src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
                                                    alt=""/>
                                            </div>
                                            <div>
                                                <h2 className='font-bold text-xl'>Lorem ipsum dolor.</h2>
                                                <p>1994</p>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cursor-pointer hover:bg-base-200">
                                        <div className='flex gap-4 items-center py-4 px-4'>
                                            <div>
                                                <img
                                                    className='w-24 mask mask-squircle'
                                                    src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
                                                    alt=""/>
                                            </div>
                                            <div>
                                                <h2 className='font-bold text-xl'>Lorem ipsum dolor.</h2>
                                                <p>1994</p>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cursor-pointer hover:bg-base-200">
                                        <div className='flex gap-4 items-center py-4 px-4'>
                                            <div>
                                                <img
                                                    className='w-24 mask mask-squircle'
                                                    src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
                                                    alt=""/>
                                            </div>
                                            <div>
                                                <h2 className='font-bold text-xl'>Lorem ipsum dolor.</h2>
                                                <p>1994</p>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cursor-pointer hover:bg-base-200">
                                        <div className='flex gap-4 items-center py-4 px-4'>
                                            <div>
                                                <img
                                                    className='w-24 mask mask-squircle'
                                                    src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
                                                    alt=""/>
                                            </div>
                                            <div>
                                                <h2 className='font-bold text-xl'>Lorem ipsum dolor.</h2>
                                                <p>1994</p>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cursor-pointer hover:bg-base-200">
                                        <div className='flex gap-4 items-center py-4 px-4'>
                                            <div>
                                                <img
                                                    className='w-24 mask mask-squircle'
                                                    src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
                                                    alt=""/>
                                            </div>
                                            <div>
                                                <h2 className='font-bold text-xl'>Lorem ipsum dolor.</h2>
                                                <p>1994</p>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cursor-pointer hover:bg-base-200">
                                        <div className='flex gap-4 items-center py-4 px-4'>
                                            <div>
                                                <img
                                                    className='w-24 mask mask-squircle'
                                                    src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
                                                    alt=""/>
                                            </div>
                                            <div>
                                                <h2 className='font-bold text-xl'>Lorem ipsum dolor.</h2>
                                                <p>1994</p>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='bg-base-100 rounded-lg shadow min-h-0'>
                        <div className='overflow-auto h-full'>
                            <div>
                                <div className='bg-base-200 flex mb-6'>
                                    <div>
                                        <img
                                            className='w-48 rounded-tl-lg'
                                            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
                                            alt=""/>
                                    </div>
                                    <div className='p-6'>
                                        <h1 className='text-2xl font-bold mb-1'>Lorem ipsum dolor sit amet.</h1>
                                        <p className='mb-6'>18 jul 2022</p>
                                        <div className='flex gap-1 items-center'>

                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                                </svg>
                                            </span>

                                            <p><span className='font-bold'>7.7</span> IMDb rating</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='px-12'>
                                    <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                        aliquam
                                        architecto
                                        asperiores assumenda commodi cumque debitis dolore ducimus ea eveniet
                                        exercitationem
                                        fugiat magni mollitia pariatur provident quae qui, quibusdam quod reiciendis
                                        tempora
                                        tenetur unde veniam! A ab adipisci aut, consequatur cum esse excepturi iste
                                        laudantium magnam nam officia quaerat ut?</p>


                                    <div className='mb-6 bg-base-200 p-6 rounded-lg'>
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

                                    <div className='mb-6 rounded-lg text-center'>
                                        <button className="btn btn-link text-base-content">Return to the
                                            watched list
                                        </button>
                                    </div>

                                    <p>
                                        <span className='font-bold'>Starring:</span> Lorem ipsum dolor sit amet,
                                        consectetur.
                                    </p>
                                    <p className='mb-6'>
                                        <span className='font-bold'>Direted by:</span> Lorem ipsum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}