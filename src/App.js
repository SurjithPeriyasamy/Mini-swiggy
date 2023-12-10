import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerUi from "./components/ShimmerUi";
import { useOnlineStatus } from "./hooks/useOnlineStatus";
import OfflinePage from "./components/OfflinePage";
import OnMindRestaurants from "./components/OnMindRestaurants";

const App = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div>
      <Header />
      {onlineStatus ? <Outlet /> : <OfflinePage />}
    </div>
  );
};

const About = lazy(() => import("./components/About"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerUi />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/collection/:category",
        element: <OnMindRestaurants />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
