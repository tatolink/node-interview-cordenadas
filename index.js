const express = require("express")
const app = express()
const mysql = require("mysql")
require("dotenv").config();
const { readCSV } = require('./modules/readCSV')
const { read, readPrice, readCoordenadas } = require('./modules/operations')

const PORT = 3000

const fileName = "resource_accommodation.csv"

const connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    port: process.env.DBPORT,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE
})

app.use(express.json())

connection.connect((err) => {
    if(err) throw err
    console.log("Conectado a la BD de MySql")
})

app.get("/", (req, res) => {
    res.send("Pagina de Inicio APIs")
})

app.get("/import", (req, res) => {
    
    readCSV(connection, fileName, (result) => {
        res.json(result)
    })

    res.send("Lectura CSV Completa")

})

app.get("/read", (req, res) => {
    
    read(connection, (result) => {
        res.json(result)
    })

})

app.get("/precio/:precio/:habitaciones", (req, res) => {
    
    const precio = req.params.precio
    const habitaciones = req.params.habitaciones

    readPrice(connection, precio, habitaciones, (result) => {
        res.json(result)
    })

})

app.get("/coordenadas/:id", (req, res) => {
    
    const id = req.params.id

    readCoordenadas(connection, id, (result) => {
        res.json(result)
    })

})

app.get("/view/coordenadas/:id", (req, res) => {
    
    const id = req.params.id

    readCoordenadas(connection, id, (result) => {
        res.send(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"><h1> La distancia de ID ${id} es de ${result[0].distancia} KMs`)
    })

})

app.get("/view/precio/:precio/:habitaciones", (req, res) => {
    
    const precio = req.params.precio
    const habitaciones = req.params.habitaciones

    readPrice(connection, precio, habitaciones, (result) => {

        let priceView = ""

        for(let i = 0; result.length > i; i++){
            priceView +=`<li>ID: ${result[i].resources_id}</li><li>Precio: ${result[i].Precio}</li><li>Habitaciones: ${result[i].Habitaciones}</li><br />`
        }

        res.send(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">`+
        `<h1> La Resultado de la Busqueda de rango de Precio: ` + precio + ` y el Numero de Habitaciones de: ` + habitaciones + ` es:</h1>`+
        `Precio: <input type="text" name="precio" id="precio">`+
        `Habitacion: <input type="text" name="habitacion" id="habitacion">`+
        `<button onclick="window.location.href = 'http://localhost:3000/view/precio/'+ document.getElementById('precio').value +'/' + document.getElementById('habitacion').value ">Buscar</button>`+
        '<ul>' 
            + 
                priceView
            +
        '</ul>')
    })

})

app.listen(PORT, () => {
    console.log(`Servidor Iniciado en el Puerto {${PORT}} ...`)
})
