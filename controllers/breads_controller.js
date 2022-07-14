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

breads.get("/new", (req, res) => {
    res.render(`./views/new`);
});

breads.get("/:arrayIndex/edit", (req, res) => {
    res.render(`./views/edit`, {
        bread: bread[req.params.arrayIndex],
        index: req.params.arrayIndex,
    });
});

breads.get("/:id", (req, res) => {
    bread.findById(req.params.id).then((foundBreads) => {
        res.render("views/show", { bread: foundBreads });
    });
    .catch(err=>{res.send('404')})
    
}); //setting what happens when we put in the index of the array of objects in the breads.js file

//this is the delete method telling the program to delete a certain bread at a given index with the splice method
breads.delete("/:indexArray", (req, res) => {
    bread.splice(req.params.indexArray, 1);
    res.status(303).redirect("/breads");
});

breads.put("/:arrayIndex", (req, res) => {
    let i = req.params.arrayIndex;
    if (req.body.hasGluten === "on") {
        req.body.hasGluten = true;
    } else {
        req.body.hasGluten = false;
    }
    bread[req.params.arrayIndex] = req.body;
    console.log(req.params.arrayIndex);
    res.redirect(`/breads/${req.params.arrayIndex}`);
});

module.exports = breads;
