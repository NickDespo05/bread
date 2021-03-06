const React = require("react");
const Default = require("./layouts/default");

function New({ bakers }) {
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
                    defaultChecked
                />
                <label htmlFor="baker">Baker</label>
                <select name="baker" id="baker">
                    {bakers.map((baker) => {
                        return (
                            /**prettier-ignore */
                            <option value={baker.id} key={baker.id}>
                                {baker.name}
                            </option>
                        );
                    })}
                </select>
                <br />
                <input type="submit" />
            </form>
        </Default>
    );
}
module.exports = New;
