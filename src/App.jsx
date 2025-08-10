import './app.css'

export default function App() {

    return (
        <div className="grotesk-regular grid grid-rows-[auto_auto_1fr] h-screen">
            <header className='bg-base-300 py-6 mb-6'>
                <div className="container mx-auto grid grid-cols-[16rem_1fr_16rem] items-center">
                    <div className='bungee-shade-regular text-4xl text-primary'>MOVILOG</div>

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

                    <label className="justify-self-end swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="synthwave"/>

                        {/* sun icon */}
                        <svg
                            className="swap-off h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                        </svg>
                    </label>
                </div>
            </header>


            <nav className='mb-6 mx-auto'>
                <ul className="steps">
                    <li className="step step-primary">
                        <span className="step-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 className="size-4">
                              <path fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"/>
                            </svg>
                        </span>
                        <span className='mx-8 mt-1'>Search</span>
                    </li>
                    <li className="step step-primary">
                        <span className="step-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 className="size-4">
                              <path fillRule="evenodd"
                                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                    clipRule="evenodd"/>
                            </svg>
                        </span>
                        <span className='mx-8 mt-1'>Select</span>
                    </li>
                    <li className="step">
                        <span className="step-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 className="size-4">
                              <path fillRule="evenodd"
                                    d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                    clipRule="evenodd"/>
                            </svg>
                        </span>
                        <span className='mx-8 mt-1'>Rate</span>
                    </li>
                    <li className="step">
                        <span className="step-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 className="size-4">
                              <path fillRule="evenodd"
                                    d="M6.333 4.478A4 4 0 0 0 1 8.25c0 .414.336.75.75.75h3.322c.572.71 1.219 1.356 1.928 1.928v3.322c0 .414.336.75.75.75a4 4 0 0 0 3.772-5.333A10.721 10.721 0 0 0 15 1.75a.75.75 0 0 0-.75-.75c-3.133 0-5.953 1.34-7.917 3.478ZM12 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                    clipRule="evenodd"/>
                              <path
                                  d="M3.902 10.682a.75.75 0 1 0-1.313-.725 4.764 4.764 0 0 0-.469 3.36.75.75 0 0 0 .564.563 4.76 4.76 0 0 0 3.359-.47.75.75 0 1 0-.725-1.312 3.231 3.231 0 0 1-1.81.393 3.232 3.232 0 0 1 .394-1.81Z"/>
                            </svg>
                        </span>
                        <span className='mx-8 mt-1'>Add</span>
                    </li>
                </ul>
            </nav>


            <main className='container mx-auto grid grid-cols-2 gap-4 min-h-0 mb-6'>
                <section className='bg-base-300 min-h-0 border border-base-content/20 rounded-lg'>
                    <div className='h-full overflow-auto'>
                        <div className='p-6'>
                            <p className='text-sm text-base-content/70 ml-4'>37 titles</p>
                            <ul className='divide-y divide-base-content/10'>
                                <li className='space-y-2 py-6 px-4 cursor-pointer bg-transparent hover:bg-gradient-to-t hover:from-base-content/10 hover:to-transparent'>
                                    <div className='flex gap-4 items-center'>
                                        <img
                                            className='rounded-2xl'
                                            src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                                            alt=""/>
                                        <div className='space-y-2'>
                                            <h2 className='font-bold text-lg'>1. Lorem ipsum</h2>
                                            <ul className='flex gap-4'>
                                                <li><span className='text-base-content/70'>2015</span></li>
                                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                                <li className='flex gap-1 items-center'>
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
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi, incidunt
                                        officiis praesentium rerum vitae.</p>

                                </li>

                                <li className='space-y-2 py-6 px-4 cursor-pointer bg-transparent hover:bg-gradient-to-t hover:from-base-content/10 hover:to-transparent'>
                                    <div className='flex gap-4 items-center'>
                                        <img
                                            className='rounded-2xl'
                                            src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                                            alt=""/>
                                        <div className='space-y-2'>
                                            <h2 className='font-bold text-lg'>1. Lorem ipsum</h2>
                                            <ul className='flex gap-4'>
                                                <li><span className='text-base-content/70'>2015</span></li>
                                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                                <li className='flex gap-1 items-center'>
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
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi, incidunt
                                        officiis praesentium rerum vitae.</p>

                                </li>

                                <li className='space-y-2 py-6 px-4 cursor-pointer bg-transparent hover:bg-gradient-to-t hover:from-base-content/10 hover:to-transparent'>
                                    <div className='flex gap-4 items-center'>
                                        <img
                                            className='rounded-2xl'
                                            src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                                            alt=""/>
                                        <div className='space-y-2'>
                                            <h2 className='font-bold text-lg'>1. Lorem ipsum</h2>
                                            <ul className='flex gap-4'>
                                                <li><span className='text-base-content/70'>2015</span></li>
                                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                                <li className='flex gap-1 items-center'>
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
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi, incidunt
                                        officiis praesentium rerum vitae.</p>

                                </li>

                                <li className='space-y-2 py-6 px-4 cursor-pointer bg-transparent hover:bg-gradient-to-t hover:from-base-content/10 hover:to-transparent'>
                                    <div className='flex gap-4 items-center'>
                                        <img
                                            className='rounded-2xl'
                                            src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                                            alt=""/>
                                        <div className='space-y-2'>
                                            <h2 className='font-bold text-lg'>1. Lorem ipsum</h2>
                                            <ul className='flex gap-4'>
                                                <li><span className='text-base-content/70'>2015</span></li>
                                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                                <li className='flex gap-1 items-center'>
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
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi, incidunt
                                        officiis praesentium rerum vitae.</p>

                                </li>

                                <li className='space-y-2 py-6 px-4 cursor-pointer bg-transparent hover:bg-gradient-to-t hover:from-base-content/10 hover:to-transparent'>
                                    <div className='flex gap-4 items-center'>
                                        <img
                                            className='rounded-2xl'
                                            src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                                            alt=""/>
                                        <div className='space-y-2'>
                                            <h2 className='font-bold text-lg'>1. Lorem ipsum</h2>
                                            <ul className='flex gap-4'>
                                                <li><span className='text-base-content/70'>2015</span></li>
                                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                                <li className='flex gap-1 items-center'>
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
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi, incidunt
                                        officiis praesentium rerum vitae.</p>

                                </li>

                                <li className='space-y-2 py-6 px-4 cursor-pointer bg-transparent hover:bg-gradient-to-t hover:from-base-content/10 hover:to-transparent'>
                                    <div className='flex gap-4 items-center'>
                                        <img
                                            className='rounded-2xl'
                                            src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                                            alt=""/>
                                        <div className='space-y-2'>
                                            <h2 className='font-bold text-lg'>1. Lorem ipsum</h2>
                                            <ul className='flex gap-4'>
                                                <li><span className='text-base-content/70'>2015</span></li>
                                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                                <li className='flex gap-1 items-center'>
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
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi, incidunt
                                        officiis praesentium rerum vitae.</p>

                                </li>

                                <li className='space-y-2 py-6 px-4 cursor-pointer bg-transparent hover:bg-gradient-to-t hover:from-base-content/10 hover:to-transparent'>
                                    <div className='flex gap-4 items-center'>
                                        <img
                                            className='rounded-2xl'
                                            src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                                            alt=""/>
                                        <div className='space-y-2'>
                                            <h2 className='font-bold text-lg'>1. Lorem ipsum</h2>
                                            <ul className='flex gap-4'>
                                                <li><span className='text-base-content/70'>2015</span></li>
                                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                                <li className='flex gap-1 items-center'>
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
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi, incidunt
                                        officiis praesentium rerum vitae.</p>

                                </li>

                                <li className='space-y-2 py-6 px-4 cursor-pointer bg-transparent hover:bg-gradient-to-t hover:from-base-content/10 hover:to-transparent'>
                                    <div className='flex gap-4 items-center'>
                                        <img
                                            className='rounded-2xl'
                                            src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                                            alt=""/>
                                        <div className='space-y-2'>
                                            <h2 className='font-bold text-lg'>1. Lorem ipsum</h2>
                                            <ul className='flex gap-4'>
                                                <li><span className='text-base-content/70'>2015</span></li>
                                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                                <li className='flex gap-1 items-center'>
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
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi, incidunt
                                        officiis praesentium rerum vitae.</p>

                                </li>

                                <li className='space-y-2 py-6 px-4 cursor-pointer bg-transparent hover:bg-gradient-to-t hover:from-base-content/10 hover:to-transparent'>
                                    <div className='flex gap-4 items-center'>
                                        <img
                                            className='rounded-2xl'
                                            src="https://m.media-amazon.com/images/M/MV5BMTc2OTExNDE3MF5BMl5BanBnXkFtZTgwMzk2MjU5NzM@._V1_QL75_UX90_CR0,1,90,133_.jpg"
                                            alt=""/>
                                        <div className='space-y-2'>
                                            <h2 className='font-bold text-lg'>1. Lorem ipsum</h2>
                                            <ul className='flex gap-4'>
                                                <li><span className='text-base-content/70'>2015</span></li>
                                                <li><span className='text-base-content/70'>1h 43m</span></li>
                                                <li className='flex gap-1 items-center'>
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
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi, incidunt
                                        officiis praesentium rerum vitae.</p>

                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className='bg-base-300 min-h-0 border border-base-content/20 rounded-lg'>
                    <div className='h-full overflow-auto'>
                        <div>
                            <div className='sticky top-0 backdrop-blur-2xl py-6 px-6'>
                                <ul className='grid grid-cols-3 gap-6 divide-x-2 divide-dashed divide-base-content/20'>
                                    <li className='space-y-4 pr-6 py-2'>
                                        <div className='text-sm text-base-content/70'>Watched movies</div>
                                        <div className='flex justify-between items-center'>
                                            <span className='text-5xl font-bold '>25</span>
                                            <span className='text-success'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor"
                                                     className="size-10">
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
                                            <span className='text-5xl font-bold'>25h</span>
                                            <span className='text-error'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor"
                                                     className="size-10">
                                                  <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </li>
                                    <li className='space-y-4 pr-6 py-2'>
                                        <div className='text-sm text-base-content/70'>Avg rating</div>
                                        <div className='flex justify-between items-center'>
                                            <span className='text-5xl font-bold '>8.70</span>
                                            <span className='text-orange-400'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor"
                                                     className="size-10">
                                                  <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

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
                        </div>

                        {/*<div className='flex h-full items-center justify-center'>*/}
                        {/*    <span className="loading loading-spinner loading-xl text-primary"></span>*/}
                        {/*</div>*/}

                        {/*<div className='flex flex-col h-full items-center justify-center gap-2'>*/}
                        {/*    <div className='text-error'>*/}
                        {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"*/}
                        {/*             className="size-12">*/}
                        {/*            <path fillRule="evenodd"*/}
                        {/*                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"*/}
                        {/*                  clipRule="evenodd"/>*/}
                        {/*        </svg>*/}
                        {/*    </div>*/}
                        {/*    <p className='text-error'>Whoops! An error occurred</p>*/}
                        {/*</div>*/}

                        {/*<div className='flex flex-col h-full items-center justify-center gap-2'>*/}
                        {/*    <div className='text-base-content/40'>*/}
                        {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"*/}
                        {/*             className="size-12">*/}
                        {/*            <path*/}
                        {/*                d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"/>*/}
                        {/*            <path fillRule="evenodd"*/}
                        {/*                  d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"*/}
                        {/*                  clipRule="evenodd"/>*/}
                        {/*        </svg>*/}
                        {/*    </div>*/}
                        {/*    <p className='text-base-content/40'>Nothing to see here… yet</p>*/}
                        {/*</div>*/}

                        {/*<div className='space-y-6 p-6'>*/}
                        {/*    <div className='flex'>*/}
                        {/*        <img*/}
                        {/*            className='rounded-md'*/}
                        {/*            src="https://m.media-amazon.com/images/M/MV5BMmU1MTk1MWMtMDYzZC00OTU5LWI5YmUtMTk0NWRjMDdiYmExXkEyXkFqcGc@._V1_QL75_UY281_CR2,0,190,281_.jpg"*/}
                        {/*            alt=""/>*/}

                        {/*        <div className='px-6'>*/}
                        {/*            <h1 className='text-2xl font-bold mb-2'>Lorem ipsum dolor sit amet.</h1>*/}
                        {/*            <ul className='flex gap-4 mb-8'>*/}
                        {/*                <li><span className='text-base-content/70'>2015</span></li>*/}
                        {/*                <li><span className='text-base-content/70'>1h 43m</span></li>*/}
                        {/*                <li className='flex gap-1 items-center'>*/}
                        {/*                    <span className='text-base-content/70'>IMDb</span>*/}
                        {/*                    <span className="text-orange-400">*/}
                        {/*                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"*/}
                        {/*                             fill="currentColor" className="size-4">*/}
                        {/*                          <path fillRule="evenodd"*/}
                        {/*                                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"*/}
                        {/*                                clipRule="evenodd"/>*/}
                        {/*                        </svg>*/}
                        {/*                    </span>*/}
                        {/*                    <span className='text-base-content/70'>7.5 (79K)</span>*/}
                        {/*                </li>*/}
                        {/*            </ul>*/}
                        {/*            <ul className='flex gap-2'>*/}
                        {/*                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Drama</li>*/}
                        {/*                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Comedy</li>*/}
                        {/*                <li className='border border-base-content/40 rounded-full px-3 py-0.5 text-sm'>Music</li>*/}
                        {/*            </ul>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*    <div className='px-12 space-y-6'>*/}
                        {/*        <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A*/}
                        {/*            aliquam*/}
                        {/*            architecto*/}
                        {/*            asperiores assumenda commodi cumque debitis dolore ducimus ea eveniet*/}
                        {/*            exercitationem*/}
                        {/*            fugiat magni mollitia pariatur provident quae qui, quibusdam quod reiciendis*/}
                        {/*            tempora*/}
                        {/*            tenetur unde veniam! A ab adipisci aut, consequatur cum esse excepturi iste*/}
                        {/*            laudantium magnam nam officia quaerat ut?</p>*/}

                        {/*        <div className='bg-base-content/20 p-6 rounded-lg'>*/}
                        {/*            <div className='mb-6 flex gap-2 justify-center items-center'>*/}
                        {/*                <div className="rating">*/}
                        {/*                    <input type="radio" name="rating-2"*/}
                        {/*                           className="mask mask-star-2 bg-orange-400" aria-label="1 star"/>*/}
                        {/*                    <input type="radio" name="rating-2"*/}
                        {/*                           className="mask mask-star-2 bg-orange-400" aria-label="2 star"*/}
                        {/*                           defaultChecked/>*/}
                        {/*                    <input type="radio" name="rating-2"*/}
                        {/*                           className="mask mask-star-2 bg-orange-400" aria-label="3 star"/>*/}
                        {/*                    <input type="radio" name="rating-2"*/}
                        {/*                           className="mask mask-star-2 bg-orange-400" aria-label="4 star"/>*/}
                        {/*                    <input type="radio" name="rating-2"*/}
                        {/*                           className="mask mask-star-2 bg-orange-400" aria-label="5 star"/>*/}
                        {/*                    <input type="radio" name="rating-2"*/}
                        {/*                           className="mask mask-star-2 bg-orange-400" aria-label="6 star"/>*/}
                        {/*                    <input type="radio" name="rating-2"*/}
                        {/*                           className="mask mask-star-2 bg-orange-400" aria-label="7 star"*/}
                        {/*                           defaultChecked/>*/}
                        {/*                    <input type="radio" name="rating-2"*/}
                        {/*                           className="mask mask-star-2 bg-orange-400" aria-label="8 star"/>*/}
                        {/*                    <input type="radio" name="rating-2"*/}
                        {/*                           className="mask mask-star-2 bg-orange-400" aria-label="9 star"/>*/}
                        {/*                    <input type="radio" name="rating-2"*/}
                        {/*                           className="mask mask-star-2 bg-orange-400" aria-label="10 star"/>*/}
                        {/*                </div>*/}
                        {/*                <div className='flex items-center gap-0.5'>*/}
                        {/*                    <span className='font-bold text-xl'>0</span>*/}
                        {/*                    <span className='text-base-content text-sm opacity-70'>/</span>*/}
                        {/*                    <span className='text-base-content text-sm opacity-70'>10</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}

                        {/*            <button className="btn btn-primary btn-block">Add to list</button>*/}
                        {/*        </div>*/}

                        {/*        <div className="divider">OR</div>*/}

                        {/*        <div className='rounded-lg text-center'>*/}
                        {/*            <button className="btn btn-link text-base-content">Return to the*/}
                        {/*                watched list*/}
                        {/*            </button>*/}
                        {/*        </div>*/}

                        {/*        <div>*/}
                        {/*            <ul>*/}
                        {/*                <li>*/}
                        {/*                    <span className='font-bold'>Starring:</span> Lorem ipsum dolor sit amet,*/}
                        {/*                    consectetur.*/}
                        {/*                </li>*/}
                        {/*                <li>*/}
                        {/*                    <span className='font-bold'>Direted by:</span> Lorem ipsum.*/}
                        {/*                </li>*/}
                        {/*            </ul>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </section>
            </main>
        </div>
    );
}