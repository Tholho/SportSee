import { createBrowserRouter } from "react-router-dom";
import Home from "../routes/home";
import homeLoaderDB from "../services/loader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Home />,
        loader: homeLoaderDB,
    },
]);

export default router