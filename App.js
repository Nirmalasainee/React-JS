
const divTree = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "Heading 1"), React.createElement("h2", {}, "Heading 2")]))

const heading = React.createElement("h1", {id: "heading", xyz: "xyz"}, "Hello World using React!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divTree);

