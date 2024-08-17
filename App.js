// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World From JS";
// const root = document.getElementById("root");
// root.appendChild(heading);
const heading = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    { id: "child" },

    [
      React.createElement("h1", { id: "heading" }, "Hello siblings 1"),
      React.createElement("h2", { id: "heading2" }, "Hello siblings 2"),
    ]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
