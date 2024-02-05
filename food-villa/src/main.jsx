import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "./components/Body/About.jsx";
import Body from "./components/Body/Body.jsx";
import Contact from "./components/Body/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestrauntMenu.jsx";
import "./index.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu/>
      },
    ],
  },
  {
    path: "/contact",
    element: <About />,
  },
  {
    path: "/cart",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
