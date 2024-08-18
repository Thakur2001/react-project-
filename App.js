import React from "react";
import ReactDOM from "react-dom/client";

const HeadingJsx = () => {
  return <h1 id="heading"> JSX Element </h1>;
};

const elem = <h1>React Element</h1>;

const heading = (
  <div>
    {elem}
    <h1>Hello Worlds</h1>
  </div>
);

const HeadingComponent = () => {
  return (
    <div>
      {heading}
      <HeadingJsx />
      <h1>React-Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
