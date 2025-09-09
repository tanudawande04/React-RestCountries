import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Country } from './pages/Country'
import { AppLayout } from './Component/layout/AppLayout'
import { ErrorPage } from './pages/ErroPage'
import { CountryDetails } from "./Component/layout/CountryDetails";

import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,

        },

        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/country",
          element: <Country />,
        },

        {
          path: "country/:id",
          element: <CountryDetails />,
        },

        {
          path: "/contact",
          element: <Contact />,
        }

      ]
    }

  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App