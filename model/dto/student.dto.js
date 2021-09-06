/** paquetes */

const mongoose = require("mongoose");
const db = require("../db-connection/mongodb");

/** using schema */
const schema = require("../schemas/student.schema");
db(); // llamado a la base de datos

schema.statics = {
    create: function (data, cb){
        let doc = new this();
        doc.save(cb);
    },
    getAll: function (query, cb){
        this.find(query, cb);
    },
    getByCode: function (query, cb){
        this.find(query, cb);
    },
    update: function (query, data, cb){
        this.findOneAndUpdate(query, {$set: data}, {new: true}, cb);
    },
    delete: function (query, cb){
        this.findOneAndDelete(query);
    }
};

const dto = mongoose.model("coll_student", schema);
module.exports = dto;