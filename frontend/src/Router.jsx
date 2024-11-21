import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Layout from './Layout';
import Registration from './components/Registration';
import User from './components/Users';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children:[
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/register",
                    element:<Registration/>
                },
                {
                    path: "/users",
                    element: <User/>
                }
            ]
        }
    ])
  return (
    <>
        <RouterProvider router={router}>

        </RouterProvider>
    </>
  )
}

export default Router
