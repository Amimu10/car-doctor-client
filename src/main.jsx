import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout';
import ErrorPage from './ErrorPage';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './Provider/AuthProvider';
import BookService from './components/BookService';
import Bookings from './components/Bookings';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register", 
        element: <Register></Register>
      },
      {
        path: "/book/:id",  
        element: <PrivateRoute><BookService></BookService></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)    
      },
      {
        path: "/bookings",  
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>   
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <div className="max-w-7xl mx-auto"> 
   <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
 </div>
);