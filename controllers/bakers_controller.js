const express = require("express");
const baker = express.Router();
const Baker = require("../models/baker.js");
const Bread = require("../models/bread");
const bakerSeedData = require("../models/baker_seed.js");

baker.get("/data/seed", (req, res) => {
    console.log(bakerSeedData);
    Baker.insertMany(bakerSeedData).then(res.redirect("/breads"));
});

// Show:
baker.get("/:id", (req, res) => {
    Baker.findById(req.params.id)
        .populate({
            path: "breads",
            optioins: { limit: 2 },
        })
        .then((foundBaker) => {
            res.render("bakerShow", {
                baker: foundBaker,
            });
        });
});

baker.get("/", (req, res) => {
    Baker.find()
        .populate("breads")
        .then((foundBakers) => {
            Bread.find().then((foundBreads) => {
                res.render("index", {
                    breads: foundBreads,
                    bakers: foundBakers,
                    title: "index Page",
                });
            });
        });
});

module.exports = baker;
