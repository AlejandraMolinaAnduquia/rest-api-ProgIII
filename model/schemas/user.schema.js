/** paquetes */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

//const Schema = mongoose.Schema;

//Creación del esquema
const userSchema = new mongoose.Schema({
    name:{
        type: "String",
        required: true
    },
    lastname:{
        type: "String",
        required: true
    },
    username:{
        type: "String",
        required: true,
        unique: true
    },
    password:{
        type: "String",
        required: true
    },
    rol:{
        type: "Number",
        required: true
    }
});


//Exportación del esquema
userSchema.plugin(validator);
module.exports = userSchema;
