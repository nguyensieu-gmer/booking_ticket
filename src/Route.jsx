import { Home } from "./pages/Home.jsx";
import { Movies } from "./pages/Movies.jsx";
import { MovieDetails } from "./pages/MovieDetail.jsx";
import { Bookings } from "./pages/Bookings.jsx";
import { Favourite } from "./pages/Favourites.jsx";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { SeatLayout } from "./pages/SeatLayout.jsx";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "movies/:id",
        element: <MovieDetails />,
      },
      {
        path: "movies/:id/:date",
        element: <SeatLayout />,
      },
      {
        path: "booking",
        element: <Bookings />,
      },
      {
        path: "favourite",
        element: <Favourite />,
      },
    ],
  },
]);
