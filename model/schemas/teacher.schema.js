/** paquetes */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

//const Schema = mongoose.Schema;

//Creación del esquema
const teacherSchema = new mongoose.Schema({
    document:{
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true
    },
    lastname:{
        type: "String",
        required: true
    },
    email:{
        type: "String",
        required: true,
        unique: true
    },
    phone:{
        type: "String",
        required: true
    },
    office:{
        type: "String",
        required: true
    },
    department:{
        type: "String",
        required: true
    }
});


//Exportación del esquema
teacherSchema.plugin(validator);
module.exports = teacherSchema;
