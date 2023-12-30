import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../modules/home/presentation/Page";
import MainTemplate from "./components/MainTemplate/MainTemplate";
import WebsitePage from "../../modules/website-development/presentation/Page";
import { SeoPage } from "../../modules/seo/presentation";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainTemplate />,
    children: [
      {
        path: "",
        element: <HomePage />,
        children: [],
      },
      {
        path: "/website-development",
        element: <WebsitePage />,
        children: [],
      },
      {
        path: "/seo",
        element: <SeoPage/>,
        children: [],
      },
    ],
  },
]);

export default router;
