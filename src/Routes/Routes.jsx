import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Home/Home/Login/Login";
import AddBook from "../Pages/AddBook/AddBook";
import PrivateRoute from "./privateRoute";
import AllBook from "../Pages/AllBook/AllBook";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import BookCategory from "../Pages/BookCategory";
import BookDetails from "../Pages/BookDetails/BookDetails";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";






export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/addBook',
        element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
      },
      {
        path: '/allBook',
        element: <AllBook></AllBook>
      },
      {
        path: '/borrowedBooks',
        element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
      },
      {
        path: '/books/:category',
        element: <BookCategory></BookCategory>,
        loader: ({ params }) => fetch(`http://localhost:5000/books/${params.category}`)
      },
      {
        path: '/bookDetails/:id',
        element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>
      },
      {
        path: '/updateBook/:id',
        element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
      }

    ]
  },

]);