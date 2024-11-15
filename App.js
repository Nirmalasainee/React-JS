import React from "react";
import ReactDOM from "react-dom/client";


// const divTree = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "Heading 1"), React.createElement("h2", {}, "Heading 2")]))

// const heading = React.createElement("h1", {id: "heading", xyz: "xyz"}, "Hello World using React!!");

// React Element
const jsxHeading = <div className="parent" tabIndex="1"><h1 className="head-1" id="namaste" >Namaste React 🎈</h1></div>
const root = ReactDOM.createRoot(document.getElementById("root"));


// React functional component

const Heading1 = () => {
    return <h1>Namaste React from component</h1>
};

const Heading2 = () => (
    <h1>Namaste React heading</h1>
);

const Title = () => (
    <h1>Namaste React title from comp1</h1>
);

const newTitle = (
    <h1>Namaste JavaScript from Element ✨</h1>
)
    

// Componenet Composition => A component inside another component is known as component composition.
const number = 1000;
const NewHeading = () => (
    <div className="container" tabIndex="0">
    <Title />
    {number }
    <h2>This is a heading with title </h2>
    {newTitle}
    </div>
)
root.render(<NewHeading />);