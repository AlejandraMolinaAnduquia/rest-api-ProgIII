
const controller = require("../controller/logic/product.controller");

module.exports = (app) => {
    console.log("Loading routes of product");
    
    app.post("/product", (req, res, next) => {
        controller.createProduct(req, res, next);
    });

    app.get("/product", (req, res, next) => {
        controller.getAll(req, res, next);
    });
    
    app.get("/product/byserial/:serial", (req, res, next) => {
        controller.getBySerial(req, res, next);
    });
    
    app.put("/product", (req, res, next) => {
        controller.updateProduct(req, res, next);
    });
    
    app.delete("/product", (req, res, next) => {
        controller.deleteProduct(req, res, next);
    });
}