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
breads.get("/new", (req, res) => {
    res.render(`./views/new`);
});
breads.get("/:arrayIndex", (req, res) => {
    if (bread[req.params.arrayIndex]) {
        res.render(`./views/Show`, {
            bread: bread[req.params.arrayIndex],
            index: req.params.arrayIndex,
        });
    } else {
        res.send("404");
    }
}); //setting what happens when we put in the index of the array of objects in the breads.js file

breads.post("/", (req, res) => {
    console.log(req.body);
    if (!req.body.image) {
        req.body.image =
            "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
    }
    if (req.body.hasGluten === "on") {
        req.body.hasGluten === true;
    } else {
        req.body.hasGluten === false;
    }
    bread.push(req.body);
    res.redirect("/breads");
});

//this is the delete method telling the program to delete a certain bread at a given index with the splice method
breads.delete("/:indexArray", (req, res) => {
    bread.splice(req.params.indexArray, 1);
    res.status(303).redirect("/breads");
});

module.exports = breads;
