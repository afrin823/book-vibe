import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Listed_Books from './Component/Listed_Books/Listed_Books';
import BookDetailes from './Component/BookDetailes/BookDetailes';
import PageToRead from './Component/pageToRead/PageToRead';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Books",
        element: <Listed_Books></Listed_Books>,
        loader: () => fetch('../public/Data/Data.json')
      },
      {
        path: "/book/:bookId",
        element: <BookDetailes></BookDetailes>,
        loader: () => fetch('../public/Data/Data.json')
      },
      {
        path: "/Read",
        element: <PageToRead></PageToRead>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
