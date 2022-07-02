const React = require("react");
const breads = require("../controllers/breads_controller");
const Default = require("./layouts/default");
const bread = require("../models/bread");

function Index() {
    return (
        <Default>
            {/*<h2>Index Page</h2> */}
            {/* <p>I have {bread[0].name} bread!</p> */}
            <ul>
                {bread.map((bread, index) => {
                    return (
                        <li key={index}>
                            {/* prettier-ignore*/ }
                            <a href={`/breads/${index}`}>
                             {bread.index}
                          </a>
                        </li>
                    );
                })}
            </ul>
        </Default>
    );
}
//above we are telling the server to return an unordered list of
// all of the breads

module.exports = Index;
