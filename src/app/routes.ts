import App from "./root/root";
import { News } from "../pages/news";

import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/news/:id",
    Component: News,
  },
]);
