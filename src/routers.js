import { createBrowserRouter } from "react-router-dom";
import Layout from './featured/layout/Layout.feature'
import Gadget from "./pages/Gadget.page";
import Home from "./pages/Home.page";

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "gadgets",
                element: <Gadget />,
            }

        ],
    },
]);