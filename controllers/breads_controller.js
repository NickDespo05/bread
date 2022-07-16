const express = require("express");
const bread = require("../models/bread"); //the require here does the same thing as
//in the server.js file. makes it dependant/links it to this file
const breads = express.Router();

breads.get("/", (req, res) => {
    bread.find().then((foundBreads) => {
        res.render("views/index", {
            bread: foundBreads,
            title: "Index Page",
        });
    });
});
// res.render("./views/index", {
//     bread: bread,
//     title: "Index Page",
// }); //tells us to render the file with the view we give it
// // res.send(bread);

breads.get("/new", (req, res) => {
    res.render(`views/new`);
});

breads.get("/:id/edit", (req, res) => {
    bread.findById(req.params.id).then((foundBread) => {
        res.render("edit", {
            bread: foundbread,
        });
    });
});

breads.get("/:id", (req, res) => {
    bread.findById(req.params.id).then((foundBreads) => {
        res.render("views/show", { bread: foundBreads });
    });
}); //setting what happens when we put in the index of the array of objects in the breads.js file

breads.post("/", (req, res) => {
    if (!req.body.image) {
        req.body.image = undefined;
    }
    if (req.body.hasGluten === "on") {
        req.body.hasGluten = true;
    } else {
        req.body.hasGluten = false;
    }
    bread.create(req.body);
    res.redirect("/breads");
});

breads.put("/:id", (req, res) => {
    if (req.body.hasGluten === "on") {
        req.body.hasGluten = true;
    } else {
        req.body.hasGluten = false;
    }
    bread
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedBread) => {
            res.redirect(`/breads/${req.params.id}`);
        });
});

//this is the delete method telling the program to delete a certain bread at a given index with the splice method
breads.delete("/:id", (req, res) => {
    bread.findByIdAndDelete(req.params.id).then((deletedBread) => {
        //this is a function that finds an element by the unique id in the database and deletes it
        res.status(303).redirect("/breads");
    });
});

module.exports = breads;
