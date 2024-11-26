import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = ()=> {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact />
    }
])


root.render(<RouterProvider router={appRouter} />);
