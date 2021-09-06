/** paquetes */

const mongoose = require("mongoose");

//const Schema = mongoose.Schema;

//Creación del esquema
const groupSchema = new mongoose.Schema({
    course_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_course",
        required: true
    },
    period_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_period",
        required: true
    },
    teacher_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_teacher",
        required: true
    },
    number:{
        type: "Number",
        required: true
    }
});


//Exportación del esquema
module.exports = groupSchema;
