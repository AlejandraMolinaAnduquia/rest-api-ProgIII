/** paquetes */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

//const Schema = mongoose.Schema;

//Creación del esquema
const studentSchema = new mongoose.Schema({
    serial:{
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true
    },
    madedate:{
        type: "String",
        required: true
    },
    expdate:{
        type: "String",
        required: false
    },
    distr:{
        type: "String",
        required: true
    },
    company:{
        type: "String",
        required: true
    }
});


//Exportación del esquema
productSchema.plugin(validator);
module.exports = productSchema;
