// module.exports = [
//     {
//         name: "Rye",
//         hasGluten: true,
//         image: "https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
//     },
//     {
//         name: "French",
//         hasGluten: true,
//         image: "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
//     },
//     {
//         name: "Gluten-Free",
//         hasGluten: false,
//         image: "https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
//     },
//     {
//         name: "Pumpernickel",
//         hasGluten: true,
//         image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
//     },
// ];

//the module.exports is doing the same thing that was done with the breads express.Router()
// its just done with an array of objects
const mongoose = require("mongoose");
const { Schema } = mongoose;

const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: "http://placehold.it/500x500.png" },
});

//makes the schema a mongoose model wich will allow us to use it to communicate with
//mongoDB and its saved in a const so it can be exported
const bread = mongoose.model("Bread", breadSchema);

module.exports = bread;

/**
 * on line 30 we define a schema
 * a schema is a template for objects within a
 * mongoDB database and how they will be stored and
 * what POTENTIAL fields they can have
 * and what datatypes they are
 */
