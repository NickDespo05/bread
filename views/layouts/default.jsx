const react = require("react");

function Default(html) {
    return (
        <html>
            <head>
                <title>Default</title>
            </head>
            <body></body>
        </html>
    );
}

module.exports = Default;

/**this is where HTML comes into play
 * this makes the view for what we need
 * rather than putting it in the send in the
 * app.get function
 * all of the styles are coming from the "server or backend"
 * thus why it is called server side rendering
 */
