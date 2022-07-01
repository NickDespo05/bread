require("dotenv").config();
const express = require("express");
const app = express();

app.set("views", __dirname, "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/", (req, res) => {
    res.send("Hello World (bread)");
});

const breadsController = require("./controllers/breads_controller.js");
app.use("/breads", breadsController);

app.listen(process.env.PORT, () => {
    console.log("port is " + process.env.PORT);
});
