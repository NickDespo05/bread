const React = require("react");
const Default = require("./layouts/default");

function Index({ bread, title }) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            {/* <p>I have {bread[0].name} bread!</p> */}
            <ul>
                {bread.map((bread, index) => {
                    return (
                        <li key={index}>
                            {/* prettier-ignore*/ }
                            <a href={`/breads/${bread.id}`}>
                             {bread.name}
                          </a>
                        </li>
                    );
                })}
            </ul>
            <div className="blackButton">
                <a href="/breads">
                    <button>Go back to index</button>
                </a>
                <a href="/breads/new">
                    <button>Add new Bread</button>
                </a>
            </div>
        </Default>
    );
}
//above we are telling the server to return an unordered list of
// all of the breads

module.exports = Index;
