const mongoose = require("mongoose");
const { Schema } = mongoose;

const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: { type: Boolean, requierd: false },
    image: { type: String, default: "http://placehold.it/500x500.png" },
    baker: {
        type: Schema.Types.ObjectID,
        ref: "Baker",
        //this is telling us what kind of relationship the bread has to the baker
        default: {
            name: "Rachel",
            startDate: "1998-09-24",
            bio: "Is NOT a shoe. Occasionally a fan of lobsters.",
        },
    },
});

breadSchema.methods.getBakedby = function () {
    return `${this.name} was baked with pure hatrid by ${
        this.baker.name
    } and has been with us since ${this.baker.startDate.getFullYear()}`;
};

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
