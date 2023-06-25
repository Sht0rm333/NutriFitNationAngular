const express = require('express');
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const saltRound = 15;
const app = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
const cors = require('cors');
app.use(cors());
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'NutriFitNation2'
});
connection.connect(function (err: any) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
        return;
    }
    console.log('Conexión establecida' + connection.threadId);
});

const configuracion = {
    hostname: "127.0.0.1",
    port: 4200,
}
app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://localhost:${configuracion.port}`)
})

app.get("/diablo", jsonParser, (req: any, res: any) => {
    connection.query("select * from usuario", function (error: any, results: any, fields: any) {
        if(error){
            console.error(error);
        }else{
            res.send(JSON.stringify(results))
        }
    })
})

app.post("/usuario", jsonParser, (req: any, res: any) => {
    let nombre = req.body.nombre;
    let email = req.body.correo;
    let altura = req.body.altura;
    let peso = req.body.peso;
    let clave = req.body.contrasena;
    bcrypt.hash(clave, saltRound, (error: any, hash: any) => {
        if (error) {
            console.error(error);
            hash.status(500).send("error hasheando password")
        } else {
            connection.query("insert into usuario (nombre,email,altura,peso,clave)values(?,?,?,?,?)",
                [nombre, email, altura, peso, hash], function (error: any, results: any, fields: any) {
                    res.send(JSON.stringify(results))
                })
        }
    })
});

app.put("", jsonParser, (req: any, res: any) => {
    let nombre = req.body.nombre;
    let email = req.body.email;
    let altura = req.body.altura;
    let peso = req.body.peso;
    let clave = req.body.clave;
    bcrypt.Hash(clave, saltRound, (error: any, hash: any) => {
        if (error) {
            console.error(error);
            hash.status(500).send("error hasheando password")
        } else {
            connection.query("insert into usuario (nombre,email,altura,peso,clave)values(?,?,?,?,?,?)",
                [nombre, email, altura, peso, clave], function (error: any, results: any, fields: any) {
                    res.send(JSON.stringify(results))
                })
        }
    })
})
