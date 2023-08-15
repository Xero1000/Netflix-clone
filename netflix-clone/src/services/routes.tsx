import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layout"
import Homepage from "../pages/Homepage"
import MoviesPage from "../pages/MoviesPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Homepage /> },
            { path: "movies", element: <MoviesPage />}
        ]
    }
])

export default router