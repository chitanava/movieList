import {useEffect, useRef} from "react";

export default function Search() {
    const inputRef = useRef(null);

    useEffect(() => {
        function callback(e) {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();

                inputRef.current.focus();
            }
        }

        document.documentElement.addEventListener('keydown', callback)

        return () => {
            document.documentElement.removeEventListener('keydown', callback)
        }
    }, [])

    return (
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
            <input ref={inputRef} type="search" className="grow" placeholder="Search"/>
            <kbd className="kbd kbd-sm">⌘ K</kbd>
        </label>
    );
}