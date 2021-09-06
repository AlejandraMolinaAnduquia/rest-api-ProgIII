/** paquetes */

const mongoose = require("mongoose");

//const Schema = mongoose.Schema;

//Creación del esquema
const periodSchema = new mongoose.Schema({
    year:{
        type: "Number",
        required: true,
        min: 2020,
        max:2038
    },
    number:{
        type: "Number",
        required: true,
        min: 1,
        max: 2
    },
    current:{
        type: "Boolean",
        required: true,
        default: true
    }
});


//Exportación del esquema
module.exports = periodSchema;
