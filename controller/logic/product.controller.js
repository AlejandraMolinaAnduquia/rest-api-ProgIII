/** Dto */
const productDto = require("../../model/dto/product.dto");
const config = require("config");

/** Helper */
const helper = require("../helpers/general.helper");
//funcion de encriptar la contraseña, esta en el helper

const notHelper = require("../helpers/notification.helper");

exports.createProduct = (req, res, next) => {
    let pro = {
        serial: req.body.serial,
        name: req.body.name,
        madedate: req.body.madedate,
        expdate: req.body.expdate,
        distr: req.body.distr,
        company: req.body.company
    };
    productDto.create(pro, (err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        res.status(201).json(
            {
                info: data
        });
    });
};

exports.updateProduct = (req, res, next) => {
    let pro = {
        serial: req.body.serial,
        name: req.body.name,
        madedate: req.body.madedate,
        expdate: req.body.expdate,
        distr: req.body.distr,
        company: req.body.company
    };
    productDto.update({_id: req.body.id}, pro, (err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        res.status(201).json(
            {
                info: data
        });
    });
};

exports.getAll = (req, res, next) => {  
    productDto.getAll({}, (err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        res.status(200).json(
            {
                info: data
        });
    });
};

exports.getBySerial = (req, res, next) => { 
    productDto.getBySerial({serial: req.params.serial}, (err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        res.status(200).json(
            {
                info: data
        });
    });
};

exports.deleteProduct = () => {
    productDto.delete({_id: req.body.id}, (err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        res.status(204).json();
    });
};