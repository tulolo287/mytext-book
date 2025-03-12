import Main from "pages/Main";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import BookInfo from "pages/BookInfo";
import Catalog from "components/Catalog";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/book/:id", element: <BookInfo /> },
      { path: "/page/:pageNum", element: <Main /> },
    ],
  },
];

export default createBrowserRouter(routes);
