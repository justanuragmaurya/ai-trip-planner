import React from "react";
import "./App.css";
import Hero from "./components/custom/Hero";
import CreateTrip from "./create-trip";
import ViewTrip from "./view-trip/[tripid]";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
  {
    path: "/view-trip/:tripid",
    element: <ViewTrip />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;