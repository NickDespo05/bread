const React = require("react");
const Default = require("./layouts/default");

function Index({ bread, bakers, title }) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            {/* <p>I have {bread[0].name} bread!</p> */}
            <h3>Bakers</h3>
            <ul>
                {bakers.map((baker) => {
                    return (
                        <li hey={baker._id}>
                            <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                        </li>
                    );
                })}
            </ul>
            <h3>Breads</h3>
            <ul>
                {bread.map((bread, index) => {
                    return (
                        <li key={index}>
                            {/* prettier-ignore*/ }
                            <a href={`/breads/${bread._id}`}>
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
