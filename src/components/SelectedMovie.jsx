import {useEffect, useState} from "react";
import Loader from "./Loader.jsx";
import MovieDetails from "./MovieDetails.jsx";
import ErrorMessage from "./ErrorMessage.jsx";

const APIKEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function SelectedMovie({selectedMovieID, onCloseSelectedMovie}) {
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

    return (loading && <Loader/>) || (error && <ErrorMessage/>) ||
        <MovieDetails movie={movie} onCloseSelectedMovie={onCloseSelectedMovie}/>;
}