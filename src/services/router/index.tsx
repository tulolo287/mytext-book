import Main from "pages/Main";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import MainLayout from "layouts/MainLayout";

const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <Main /> }
        ]
    }
]

export default createBrowserRouter(routes)