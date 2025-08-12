export default function Steps({curStep}) {
    const steps = [
        {
            label: 'Search',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"/>
            </svg>)
        },
        {
            label: 'Select',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"/>
            </svg>)
        },
        {
            label: 'Rate',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd"
                      d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                      clipRule="evenodd"/>
            </svg>)
        },
        {
            label: 'Add',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd"
                      d="M6.333 4.478A4 4 0 0 0 1 8.25c0 .414.336.75.75.75h3.322c.572.71 1.219 1.356 1.928 1.928v3.322c0 .414.336.75.75.75a4 4 0 0 0 3.772-5.333A10.721 10.721 0 0 0 15 1.75a.75.75 0 0 0-.75-.75c-3.133 0-5.953 1.34-7.917 3.478ZM12 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      clipRule="evenodd"/>
                <path
                    d="M3.902 10.682a.75.75 0 1 0-1.313-.725 4.764 4.764 0 0 0-.469 3.36.75.75 0 0 0 .564.563 4.76 4.76 0 0 0 3.359-.47.75.75 0 1 0-.725-1.312 3.231 3.231 0 0 1-1.81.393 3.232 3.232 0 0 1 .394-1.81Z"/>
            </svg>)
        }
    ]

    return (
        <nav className='mb-6 mx-auto'>
            <ul className="steps">
                {steps.map(({label, icon}, i) =>
                    (
                        <li className={`step ${curStep >= (i + 1) && 'step-primary'}`} key={i + 1}>
                            <span className="step-icon">{icon}</span>
                            <span className='mx-8 mt-1'>{label}</span>
                        </li>
                    )
                )}


                {/*<li className="step step-primary">*/}
                {/*        <span className="step-icon">*/}
                {/*            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"*/}
                {/*                 className="size-4"><path fillRule="evenodd"*/}
                {/*                                          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"*/}
                {/*                                          clipRule="evenodd"/></svg>*/}
                {/*        </span>*/}
                {/*    <span className='mx-8 mt-1'>Search</span>*/}
                {/*</li>*/}
                {/*<li className="step step-primary">*/}
                {/*        <span className="step-icon">*/}
                {/*            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"*/}
                {/*                 className="size-4"><path fillRule="evenodd"*/}
                {/*                                          d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"*/}
                {/*                                          clipRule="evenodd"/></svg>*/}
                {/*        </span>*/}
                {/*    <span className='mx-8 mt-1'>Select</span>*/}
                {/*</li>*/}
                {/*<li className="step">*/}
                {/*        <span className="step-icon">*/}
                {/*            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"*/}
                {/*                 className="size-4"><path fillRule="evenodd"*/}
                {/*                                          d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"*/}
                {/*                                          clipRule="evenodd"/></svg>*/}
                {/*        </span>*/}
                {/*    <span className='mx-8 mt-1'>Rate</span>*/}
                {/*</li>*/}
                {/*<li className="step">*/}
                {/*        <span className="step-icon">*/}
                {/*            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"*/}
                {/*                 className="size-4"><path fillRule="evenodd"*/}
                {/*                                          d="M6.333 4.478A4 4 0 0 0 1 8.25c0 .414.336.75.75.75h3.322c.572.71 1.219 1.356 1.928 1.928v3.322c0 .414.336.75.75.75a4 4 0 0 0 3.772-5.333A10.721 10.721 0 0 0 15 1.75a.75.75 0 0 0-.75-.75c-3.133 0-5.953 1.34-7.917 3.478ZM12 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"*/}
                {/*                                          clipRule="evenodd"/><path*/}
                {/*                d="M3.902 10.682a.75.75 0 1 0-1.313-.725 4.764 4.764 0 0 0-.469 3.36.75.75 0 0 0 .564.563 4.76 4.76 0 0 0 3.359-.47.75.75 0 1 0-.725-1.312 3.231 3.231 0 0 1-1.81.393 3.232 3.232 0 0 1 .394-1.81Z"/></svg>*/}
                {/*        </span>*/}
                {/*    <span className='mx-8 mt-1'>Add</span>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
}