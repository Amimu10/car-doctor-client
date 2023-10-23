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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <div className="max-w-7xl mx-auto"> 
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 </div>
);