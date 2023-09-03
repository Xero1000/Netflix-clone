import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layout"
import Homepage from "../pages/Homepage"
import MoviesPage from "../pages/MoviesPage"
import TvShowPage from "../pages/TvShowPage"
import ErrorPage from "../pages/ErrorPage"
import SearchResultPage from "../pages/SearchResultPage"
import TrailerPage from "../pages/TrailerPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Homepage /> },
            { path: "movies", element: <MoviesPage /> },
            { path: "tvshows", element: <TvShowPage />},
            { path: "search/:searchText", element: <SearchResultPage />},
        ]
    },
    { 
        path: "trailer/:contentType/:id", 
        element: <TrailerPage /> 
    }
])

export default router