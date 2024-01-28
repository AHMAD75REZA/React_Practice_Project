/* JavaScript*/
// const heading = document.createElement("h2");
// heading.textContent = "Hello world";
// heading.className = "header";
// document.getElementById("root").append(heading);

// console.log("JavaScript element:", heading);
/* REACT with js*/

// const reactHeading = React.createElement("h1", { className: "head", id: "reactHead", children: "HelloReact!" });
//  ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
// console.log("React element: ", reactHeading);

// const reactHeading = React.createElement("img", {src:"https://files.codingninjas.in/coding-ninjas-24647.png"} );

//  ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

/*  REACT WITH JSX*/

const jsxHeading = (
    <> //fragments, div
        <h1 className="header">Hello </h1>
        <p>Welcom to the session</p>
        <button>click</button>

    </>
//     <div id="parent" className="parent-class">
//     <p>Hello world</p>
//   </div>
)
ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);
