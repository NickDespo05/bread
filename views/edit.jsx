const React = require("react");
const Def = require("./layouts/default");

function Edit({ bread, bakers }) {
    return (
        <Def>
            <h2>Edit ur Bread</h2>
            <form action={`/breads/${bread.id}?_method=PUT`} method="POST">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    defaultValue={bread.name}
                />
                <label htmlFor="image">image</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    defaultValue={bread.image}
                />
                <label htmlFor="hasGluten">hasGluten</label>
                <input
                    type="checkbox"
                    name="hasGluten"
                    id="hasGluten"
                    required
                    defaultChecked={bread.hasGluten}
                />
                <label htmlFor="baker">Baker</label>
                <select name="baker" id="baker" defaultValue={bread.baker}>
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
        </Def>
    );
}
module.exports = Edit;
