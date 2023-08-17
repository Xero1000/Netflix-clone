import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layout"
import Homepage from "../pages/Homepage"
import MoviesPage from "../pages/MoviesPage"
import TvShowPage from "../pages/TvShowPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Homepage /> },
            { path: "movies", element: <MoviesPage />},
            { path: "tvshows", element: <TvShowPage />}
        ]
    }
])

export default router