import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Error from './Components/Error.jsx';
import Home from './Components/Home.jsx';
import Listed_booked from './Components/Listed_booked.jsx';
import Page_Read from './Components/Page_Read.jsx';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/list',
        element: <Listed_booked></Listed_booked>
      },
      {
        path: '/page',
        element: <Page_Read></Page_Read>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
