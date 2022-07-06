const express = require("express");
const bread = require("../models/bread"); //the require here does the same thing as
//in the server.js file. makes it dependant/links it to this file
const breads = express.Router();

breads.get("/", (req, res) => {
    res.render("./views/index", {
        bread: bread,
        title: "Index Page",
    }); //tells us to render the file with the view we give it
    // res.send(bread);
});

breads.get("/:arrayIndex", (req, res) => {
    if (Breads[req.params.arrayIndex]) {
        res.render("show", {
            bread: Breads[req.params.arrayIndex],
        });
    } else {
        res.send("404");
    }
}); //setting what happens when we put in the index of the array of objects in the breads.js file

module.exports = breads;
