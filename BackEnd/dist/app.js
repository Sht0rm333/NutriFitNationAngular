"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const app = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const cors = require('cors');
app.use(cors());
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'NutriFitNation2'
});
connection.connect(function (err) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
        return;
    }
    console.log('Conexión establecida' + connection.threadId);
});
const configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
};
app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://localhost:${configuracion.port}`);
});
app.post("", jsonParser, (req, res) => {
    let email = req.body.email;
    let clave = req.body.clave;
    console.log(email);
    connection.query("select * from usuario where email=? and clave=?", [email, clave], function (error, results, fields) { res.send(JSON.stringify({ "mensaje": true, "resultado": results })); });
});
app.get("", jsonParser, (req, res) => {
    connection.query("select * from usuario", function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
});
app.put("", jsonParser, (req, res) => {
    let nombre = req.body.nombre;
    let email = req.body.email;
    let altura = req.body.altura;
    let peso = req.body.peso;
    let clave = req.body.clave;
    const saltRound = 15;
    bcrypt.Hash(clave, saltRound, (error, hash) => {
        if (error) {
            console.error(error);
            hash.status(500).send("error hasheando password");
        }
        else {
            connection.query("insert into usuario (nombre,email,altura,peso,clave)values(?,?,?,?,?,?)", [nombre, email, altura, peso, clave], function (error, results, fields) {
                res.send(JSON.stringify(results));
            });
        }
    });
    /*connection.query("insert into usuario (nombre,email,altura,peso,clave)values(?,?,?,?,?,?)",
        [nombre, email, altura, peso, clave], function (error: any, results: any, fields: any) {
            res.send(JSON.stringify(results))
        })*/
});
