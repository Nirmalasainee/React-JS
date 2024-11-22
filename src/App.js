import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = ()=> {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


root.render(<AppLayout />);
