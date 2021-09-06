/** paquetes */

const mongoose = require("mongoose");

//const Schema = mongoose.Schema;

//Creación del esquema
const courseSchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true
    },
    name:{
        type: "String",
        required: true
    }
});


//Exportación del esquema
module.exports = courseSchema;
