const heading = React.createElement("h1", {id:"heading"}, "Hello React!!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


/* <div id="parent">
    <div id="child">
        <h1>Im h1 tag</h1>
    </div>

</div> */

const parent=React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},[
React.createElement("h1",{},"Im a h1 tag"),
React.createElement("h2",{},"Im a h2 tag")]
),
React.createElement("div",{id:"child"},[
React.createElement("h1",{},"Im a h1 tag"),
React.createElement("h2",{},"Im a h2 tag")]
)

]);
root.render(parent);
console.log(parent);


    