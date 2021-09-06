/** paquetes */

const mongoose = require("mongoose");

//const Schema = mongoose.Schema;

//Creación del esquema
const studentGroupSchema = new mongoose.Schema({
    student_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_student",
        required: true
    },
    group_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_group",
        required: true
    }
});


//Exportación del esquema
module.exports = studentGroupSchema;
