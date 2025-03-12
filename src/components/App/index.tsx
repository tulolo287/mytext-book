import React from "react";
import Main from "../../pages/Main";
import { RouterProvider } from "react-router-dom";
import router from "services/router";

export default function App() {
  return <RouterProvider router={router} />;
}
