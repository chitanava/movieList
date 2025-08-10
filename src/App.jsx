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

export default function App() {

    return (
        <Layout>
            <Header>
                <Logo/>
                <Search/>
                <ThemeToggle/>
            </Header>

            <Steps/>

            <PageContent>
                <Box>
                    <NoResults/>
                    <Error/>
                    <Loader/>
                    <MovieList/>
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