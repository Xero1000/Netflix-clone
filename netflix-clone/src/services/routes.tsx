import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layout"
import Homepage from "../pages/Homepage"
import MoviesPage from "../pages/MoviesPage"
import TvShowPage from "../pages/TvShowPage"
import ErrorPage from "../pages/ErrorPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Homepage /> },
            { path: "movies", element: <MoviesPage />},
            { path: "tvshows", element: <TvShowPage />}
        ]
    }
])

export default router