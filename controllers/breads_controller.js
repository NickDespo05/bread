const express = require("express");
const bread = require("../models/bread"); //the require here does the same thing as
//in the server.js file. makes it dependant/links it to this file
const breads = express.Router();

breads.get("/", (req, res) => {
    res.send(bread);
});

breads.get("/:arrayIndex", (req, res) => {
    let index = req.params.arrayIndex;
    res.send(bread[index]);
}); //setting what happens when we put in the index of the array of objects in the breads.js file

module.exports = breads;
