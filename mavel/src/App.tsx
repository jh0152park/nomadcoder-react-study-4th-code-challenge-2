import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./screens/common/Layout";
import NotFound from "./screens/common/NotFound";
import Home from "./screens/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
