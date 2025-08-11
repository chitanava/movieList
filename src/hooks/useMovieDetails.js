import {useEffect, useState} from "react";

const APIKEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ERRORS = {
    RES_ERROR: "resError",
    NOT_FOUND: "notFound"
};

export default function useMovieDetails(selectedMovieID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function getMovieDetails() {
            try {
                setLoading(true);

                const res = await fetch(`${API_BASE_URL}/?apikey=${APIKEY}&i=${selectedMovieID}`);

                if (!res.ok) {
                    throw new Error(res.statusText);
                }

                const data = await res.json();

                if (data.Response === 'False') {
                    throw new Error(data.Error);
                }

                setMovie(data);
            } catch (err) {
                console.error(err.message);

                setError(true);
            } finally {
                setLoading(false);
            }

        }

        getMovieDetails();
    }, [selectedMovieID]);

    return {loading, error, movie};
}