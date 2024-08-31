import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Detail from "./pages/Detail";
import { SkeletonTheme } from "react-loading-skeleton";
import About from "./components/home/About";
import { CountryProvider } from "./context/CountryContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={"/home"} replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "detail/:countryName",
        element: <Detail />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default function App() {
  return (
    <SkeletonTheme baseColor="#202227" highlightColor="#31343E">
      <CountryProvider>
        <RouterProvider router={router} />
      </CountryProvider>
    </SkeletonTheme>
  );
}
