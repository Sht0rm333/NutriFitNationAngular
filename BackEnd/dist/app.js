"use strict";
const express = require('express');
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const saltRound = 15;
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
    port: 5000,
};
app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://localhost:${configuracion.port}`);
});
app.get("/diablo", jsonParser, (req, res) => {
    connection.query("select * from usuario", function (error, results, fields) {
        if (error) {
            console.error(error);
        }
        else {
            res.send(JSON.stringify(results));
        }
    });
});
app.post("/verificacion", jsonParser, (req, res) => {
    let email = req.body.correo;
    let clave = req.body.contrasena;
    bcrypt.hash(clave, saltRound, (error, hash) => {
        if (error) {
            console.error(error);
            hash.status(500).send("error hasheando password");
        }
        else {
            connection.query("select * from usuario where email=? ", [email], function (error, results, fields) {
                res.send(JSON.stringify(results)); //compare(contraGod, contraEncript)
            });
        }
    });
});
app.post("/usuario", jsonParser, (req, res) => {
    let nombre = req.body.nombre;
    let email = req.body.correo;
    let altura = req.body.altura;
    let peso = req.body.peso;
    let clave = req.body.contrasena;
    bcrypt.hash(clave, saltRound, (error, hash) => {
        if (error) {
            console.error(error);
            hash.status(500).send("error hasheando password");
        }
        else {
            connection.query("insert into usuario (nombre,email,altura,peso,clave)values(?,?,?,?,?)", [nombre, email, altura, peso, hash], function (error, results, fields) {
                res.send(JSON.stringify(results));
            });
        }
    });
});
app.put("/activo", jsonParser, (req, res) => {
    let email = req.body.correo;
    connection.query("update usuario set activo = ? where email=?", [1, email], function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
});
app.get("/siActivo", jsonParser, (req, res) => {
    connection.query("select * from usuario where activo=1", function (error, results, fields) {
        if (error) {
            console.error(error);
        }
        else {
            res.send(JSON.stringify(results));
        }
    });
});
app.put("/no", jsonParser, (req, res) => {
    let email = req.body.Email;
    connection.query("update usuario set activo = ? where email = ?", [0, email], function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
});
app.post("/admin", jsonParser, (req, res) => {
    let email = req.body.Email;
    connection.query("select * from usuario where email = ?", [email], function (error, results, fields) {
        if (error) {
            console.error(error);
        }
        else {
            res.send(JSON.stringify(results));
        }
    });
    app.delete("/delete", jsonParser, (req, res) => {
        console.log(req.body.email);
        let email = req.body.email;
        connection.query("delete from usuario where email=?", [email], function (error, results, fields) {
            if (error)
                throw error;
            else {
                res.json({ mensaje: "dato borrado" });
            }
        });
    });
});
