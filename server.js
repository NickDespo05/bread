require("dotenv").config();
const express = require("express");
const app = express();

app.set("views", __dirname, "/views"); //telling the program where to look for the views
app.set("view engine", "jsx"); //setting what is being used to make the view
app.engine("jsx", require("express-react-views").createEngine());

app.get("/", (req, res) => {
    res.send("Hello World (bread)");
}); //default page

const breadsController = require("./controllers/breads_controller.js");
app.use("/breads", breadsController);
//setting the controller as the bread controller file

app.use(express.static("public"));

app.get("*", (req, res) => {
    res.send("404");
});

app.listen(process.env.PORT, () => {
    console.log("port is " + process.env.PORT);
}); //sets the port and logs it in the console
