import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../MainLayout/MainLayout'
import Backend from '../pages/Home/Backend'
import Frontend from '../pages/Home/Frontend'
import Home from '../pages/Home/Home'

const Root = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    children: [
                        {
                            path: 'frontend',
                            element: <Frontend />
                        },
                        {
                            path: 'backend',
                            element: <Backend />
                        }
                    ]
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    )
}

export default Root