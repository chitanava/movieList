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
import Loader from "./components/Loader.jsx";
import NoResults from "./components/NoResults.jsx";
import SelectedMovie from "./components/SelectedMovie.jsx";
import {useCallback, useEffect, useState} from "react";
import ErrorMessage from "./components/ErrorMessage.jsx";
import useMovies from "./hooks/useMovies.js";
import WatchedList from "./components/WatchedList.jsx";
import useLocalStorageState from "./hooks/useLocalStorageState.js";

export default function App() {
    const [query, setQuery] = useState("interstellar");
    const [selectedMovieID, setSelectedMovieID] = useState(null);
    const [watched, setWatched] = useLocalStorageState("watched", []);
    const [step, setStep] = useState(0);
    const handleStep = useCallback((value) => setStep(value), []);

    function handleSearch(value) {
        setQuery(value);

        handleCloseMovie()
    }

    function handleSelectMovie(imdbID) {
        setSelectedMovieID(imdbID);
    }

    function handleCloseMovie() {
        setSelectedMovieID(null);
    }

    function handleAddMovie(movie) {
        const isWatched = watched.map(movie => movie.imdbID).includes(movie.imdbID)

        if (isWatched) {
            return;
        }

        setWatched((watched) => [movie, ...watched]);
    }

    function handleUpdateMovie(movie) {
        setWatched(watched => watched.map(w => w.imdbID === movie.imdbID ? {...w, userRating: movie.userRating} : w));
    }

    function handleDeleteWatched(imdbID) {
        setWatched(watched => watched.filter(w => w.imdbID !== imdbID));
    }

    // function handleStep(stepNumber) {
    //     setStep(stepNumber);
    // }

    const {movies, loading, error} = useMovies(query);

    useEffect(() => {
        localStorage.setItem("watched", JSON.stringify(watched));
    }, [watched]);

    return (
        <Layout>
            <Header>
                <Logo/>
                <Search query={query} onSearch={handleSearch}/>
                <ThemeToggle/>
            </Header>

            <Steps curStep={step}/>

            <PageContent>
                <Box>
                    {loading && <Loader/>}
                    {error && <ErrorMessage/>}
                    {!loading && !error && movies.length === 0 && <NoResults/>}
                    {!loading && !error && movies.length > 0 &&
                        <MovieList movies={movies} onSelectMovie={handleSelectMovie} onStep={handleStep}/>}
                </Box>
                <Box>
                    <Stats/>
                    {!selectedMovieID && watched.length === 0 && <NoResults/>}
                    {!selectedMovieID && watched.length > 0 &&
                        <WatchedList watched={watched} onDeleteWatched={handleDeleteWatched}
                                     onSelectMovie={handleSelectMovie} onStep={handleStep} movies={movies}/>}
                    {selectedMovieID &&
                        <SelectedMovie selectedMovieID={selectedMovieID}
                                       onCloseMovie={handleCloseMovie}
                                       onAddMovie={handleAddMovie}
                                       watched={watched}
                                       onUpdateMovie={handleUpdateMovie}
                                       onStep={handleStep}
                                       movies={movies}
                        />}
                </Box>
            </PageContent>
        </Layout>
    );
}