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
import SelectedMovie from "./components/SelectedMovie.jsx";
import {useState} from "react";
import ErrorMessage from "./components/ErrorMessage.jsx";
import useMovies from "./hooks/useMovies.js";

export default function App() {
    const [query, setQuery] = useState("interstellar");
    const [selectedMovieID, setSelectedMovieID] = useState(null);

    function handleSearch(value) {
        setQuery(value);
    }

    function handleSelectMovie(imdbID) {
        setSelectedMovieID(imdbID);
    }

    function handleCloseSelectedMovie() {
        setSelectedMovieID(null);
    }

    const {movies, loading, error} = useMovies(query);

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
                    {!loading && !error && movies.length > 0 &&
                        <MovieList movies={movies} onSelectMovie={handleSelectMovie}/>}
                </Box>
                <Box>
                    <Stats/>
                    {/*<WatchedList/>*/}
                    {!selectedMovieID && <NoResults/>}
                    {selectedMovieID &&
                        <SelectedMovie selectedMovieID={selectedMovieID}
                                       onCloseSelectedMovie={handleCloseSelectedMovie}/>}
                </Box>
            </PageContent>
        </Layout>
    );
}