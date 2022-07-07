const React = require("react");
const bread = require("../models/bread");
const Default = require("./layouts/default");

function show({ bread }) {
    return (
        <Default>
            <h2>Show page</h2>
            <h3>{bread.name}</h3>

            <p>
                and it
                {bread.hasGluten ? <span>does</span> : <span>does Not</span>}
                have gluten
            </p>
            <img src={bread.img} alt={bread.name} />
            <li>
                <a href="/breads">Go Home</a>
            </li>
        </Default>
    );
}

module.exports = show;
