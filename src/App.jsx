import './app.css'
import Header from "./components/Header.jsx";
import Logo from "./components/Logo.jsx";
import Search from "./components/Search.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Steps from "./components/Steps.jsx";
import PageContent from "./components/PageContent.jsx";
import Box from "./components/Box.jsx";
import Layout from "./components/Layout.jsx";
import MovieList from "./components/MovieList.jsx";
import Stats from "./components/Stats.jsx";
import WatchedList from "./components/WatchedList.jsx";
import Loader from "./components/Loader.jsx";
import NoResults from "./components/NoResults.jsx";
import Movie from "./components/Movie.jsx";
import {useEffect, useState} from "react";
import ErrorMessage from "./components/ErrorMessage.jsx";

const APIKEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ERRORS = {
    RES_ERROR: "resError",
    NOT_FOUND: "notFound"
};

export default function App() {
    const [query, setQuery] = useState("interstellar");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    function handleSearch(value) {
        setQuery(value);
    }

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

    return (
        <Layout>
            <Header>
                <Logo/>
                <Search query={query} onSearch={handleSearch}/>
                <ThemeToggle/>
            </Header>

            <Steps/>

            <PageContent>
                <Box>
                    {loading && <Loader/>}
                    {error && <ErrorMessage/>}
                    {!loading && !error && !movies.length > 0 && <NoResults/>}
                    {!loading && !error && movies.length > 0 && <MovieList movies={movies}/>}
                </Box>
                <Box>
                    <Stats/>
                    <WatchedList/>
                    <Movie/>
                </Box>
            </PageContent>
        </Layout>
    );
}