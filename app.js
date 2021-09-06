/** packages : npm i express config --save*/

const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
);

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getipAddress");
app.use("*", ipFn);
// antes de ejecutar las solicitudes, aplicar funcion de recuperación de la ip entrante

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to academic rest api");
});

// User routes
const userRoutes = require("./routes/user.routes");
userRoutes(app);

// token middleware
tkFn = require("./middleware/verifyToken");
app.use(tkFn);

// Student routes
const studentRoutes = require("./routes/student.routes");
studentRoutes(app);

// Teacher routes
const teacherRoutes = require("./routes/teacher.routes");
teacherRoutes(app);

// Period routes
const periodRoutes = require("./routes/period.routes");
periodRoutes(app);

// Course routes
const courseRoutes = require("./routes/course.routes");
courseRoutes(app);

// Product routes
const productRoutes = require("./routes/product.routes");
productRoutes(app);

app.listen(port, () => {
    console.log("Server is running ...")
});


//Funcionalidad: node . --> server running...