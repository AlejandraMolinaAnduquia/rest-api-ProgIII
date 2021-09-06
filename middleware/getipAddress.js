module.exports = (req, res, next) => { // de la solicitud que estan enviando, tomo la conexión y finalmente la dirección ip
    console.log(`Ip client: ${req.connection.remoteAddress}`);

    //despues de obtener la ip, sigue con la siguiente función que se manda en la solicitud
    next();
}