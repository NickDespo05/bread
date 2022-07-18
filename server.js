require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.set("views", __dirname, "/views"); //telling the program where to look for the views
app.set("view engine", "jsx"); //setting what is being used to make the view
app.engine("jsx", require("express-react-views").createEngine());
// mongoose.connect(process.env.MONG, {
//     //the string is the mongo uri which is kind of like a URL in the sense that it
//     //is what we use to connect to a something but in this case it is not a website address but a database address
//     useNewURLParser: true,
//     useUnifiedTopology: true,
// });
//prettier-ignore
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true },() => {console.log("connected to mongo: ", process.env.MONGO_URI);});
app.get("/", (req, res) => {
    res.send("Hello World (bread)");
}); //default page

const breadsController = require("./controllers/breads_controller.js");
app.use("/breads", breadsController);
// MIDDLEWARE
//setting the controller as the bread controller file

app.use(express.static("public"));

app.get("*", (req, res) => {
    res.send("404");
});

app.listen(process.env.PORT); //sets the port and logs it in the console
