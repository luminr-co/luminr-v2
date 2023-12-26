import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../modules/home/presentation/Page";
import MainTemplate from "./components/MainTemplate/MainTemplate";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainTemplate />,
    children: [
      {
        path: "",
        element: <HomePage />,
        children: [
          {
            path: "/website-development",
            element: "",
            children: [],
          },
          {
            path: "/seo",
            element: "",
            children: [],
          },
        ],
      },
    ],
  },
]);

export default router;
