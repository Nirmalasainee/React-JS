import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = ()=> {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
            path: "/about",
            element: <About/>
        },
        {
            path: "/",
            element: <Body />
        },
        {
            path: "/contact",
            element: <Contact />
        }],
        errorElement: <Error />
    }
    
])


root.render(<RouterProvider router={appRouter} />);
