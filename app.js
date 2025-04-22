// Not lets create an h1 element using reacts , React.createElement(tagname,object,content)// takes 3 args
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "hello-msg" },
  "Hello World from React"
);

console.log(heading); // prints an React element, which is an JS object

/*Lets create an nested structure inside core React
eg:
  <div id="parent">
      <div id="child">
        <h1>I am h1</h1>
        <h2>I am h2</h2>
      </div>
      <div id="child2">
        <h1>I am h1</h1>
        <h2>I am h2</h2>
      </div>
    </div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2"),
  ]),
]);

// Not lets create a root where the content will be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));

//Now lets render the heading inside the root, just like appendChild, but use .render instead
// This render takes the heading object and renders it into an h1 tag to puts it into root
root.render(heading);

root.render(parent);
