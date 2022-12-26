const element = React.createElement("h1", {}, "hello from react");
const heading2 = React.createElement(
  "h2",
  { style: { color: "green" } },
  "heading 2 of green"
);
const heading3 = React.createElement(
  "h3",
  { style: { color: "red" } },
  "heading 3 of red"
);
const container = React.createElement("div", { id: "container" }, [
  element,
  heading2,
  heading3,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
