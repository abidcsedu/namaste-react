import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "./components/Body/About.jsx";
import Body from "./components/Body/Body.jsx";
import Contact from "./components/Body/Contact.jsx";
import Error from "./components/Error.jsx";
import Instamart from "./components/Instamart.jsx";
import Profile from "./components/Profile.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
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
        // path: 'about' -> localhost:1234/about (from parent route /)
        // path: '/about' -> localhost:1234/about (from root (ex: localhost:1234))
        // that means both are same here
        // because / means from the root
        path: "/about",
        element: <About />,
        children: [
          {
            // path: 'profile' -> localhost:1234/about/profile
            // path: '/profile' -> localhost:1234/profile
            path: "profile",
            // we use <Outlet /> component in the parent component (here <About />) to show this profile component
            element: <Profile />,
            // element: <ProfileClassComponent />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
    ],
  },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
  // {
  //   path: "/cart",
  //   element: <About />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
