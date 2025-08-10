import {useEffect, useState} from "react";

const APIKEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ERRORS = {
    RES_ERROR: "resError",
    NOT_FOUND: "notFound"
};

export default function useMovies(query) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (query.trim().length <= 2) {
            setMovies([]);
            setError(false);

            return;
        }

        const controller = new AbortController();

        async function fetchMovies() {
            try {
                setLoading(true);
                setError(false);

                const res = await fetch(`${API_BASE_URL}/?apikey=${APIKEY}&s=${query}`,
                    {signal: controller.signal});

                if (!res.ok) {
                    throw new Error(ERRORS.RES_ERROR);
                }

                const data = await res.json();

                // const fullPlottedData = await Promise.all(data.Search.map(async (movie) => {
                //     const res = await fetch(`${API_BASE_URL}/?apikey=${APIKEY}&i=${movie.imdbID}`);
                //     return await res.json();
                // }));

                if (data.Response === "False") {
                    throw new Error(ERRORS.NOT_FOUND);
                }

                setMovies(data.Search);
            } catch (err) {
                if (err.message === ERRORS.NOT_FOUND) {
                    setMovies([]);
                }

                if (err.message === ERRORS.RES_ERROR) {
                    setError(true);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchMovies();

        return () => {
            controller.abort();
        }
    }, [query])

    return {movies, loading, error};
}