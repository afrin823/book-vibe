import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root/Root";
import Home from "../Component/Home/Home";
import Listed_Books from "../Component/Listed_Books/Listed_Books";
import BookDetailes from "../Component/BookDetailes/BookDetailes";
import PageToRead from "../Component/pageToRead/PageToRead";
import ReadBook from "../Component/ReadBook/ReadBook";
import WhishlistBooks from "../Component/WhishlistBooks/WhishlistBooks";


export const router = createBrowserRouter([
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
          loader: () => fetch('../../public/Data/Data.json'),
          children: [
            {
                index: true,
                element: <ReadBook></ReadBook>
            },
            {
                path: 'whish_list',
                element: <WhishlistBooks></WhishlistBooks>
            }
          ]
        },
        {
          path: "/book/:bookId",
          element: <BookDetailes></BookDetailes>,
          loader: () => fetch('../../public/Data/Data.json')
        },
        {
          path: "/Read",
          element: <PageToRead></PageToRead>,
          loader: () => fetch('../../public/Data/Data.json')
        }
      ]
    },
  ]);

