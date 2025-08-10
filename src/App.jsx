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
import Error from "./components/Error.jsx";
import NoResults from "./components/NoResults.jsx";
import Movie from "./components/Movie.jsx";
import {useEffect, useState} from "react";

const OMDBKEY = "41dcb12b";

export default function App() {
    const [query, setQuery] = useState("interstellar");
    const [movies, setMovies] = useState([]);

    function handleSearch(value) {
        setQuery(value);
    }

    useEffect(() => {
        if (!query.trim().length >= 3) {
            return;
        }

        async function fetchMovies() {
            const res = await fetch(`http://www.omdbapi.com/?apikey=${OMDBKEY}&s=${query}`);
            const data = await res.json();

            // const fullPlottedData = await Promise.all(data.Search.map(async (movie) => {
            //     const res = await fetch(`http://www.omdbapi.com/?apikey=${OMDBKEY}&i=${movie.imdbID}`);
            //     return await res.json();
            // }));

            if (data.Response !== "True") {
                return;
            }

            setMovies(data.Search);
        }

        fetchMovies();
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
                    {/*<NoResults/>*/}
                    {/*<Error/>*/}
                    {/*<Loader/>*/}
                    <MovieList movies={movies}/>
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