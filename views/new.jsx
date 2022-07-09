const React = require("react");
const Default = require("./layouts/default");

function New() {
    return (
        <Default>
            <h2>Add new bread</h2>
            <form action="/breads" method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
                <label htmlFor="image">image</label>
                <input type="text" name="image" id="image" />
                <label htmlFor="hasGluten">hasGluten</label>
                <input
                    type="checkbox"
                    name="hasGluten"
                    id="hasGluten"
                    required
                />
                <br />
                <input type="submit" />
            </form>
        </Default>
    );
}
module.exports = New;