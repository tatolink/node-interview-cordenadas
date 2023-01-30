const mysql = require("mysql")


function insert(connection, csvData, callback){
    let insertQuery = "INSERT INTO `enavas`.`resources` (`Latitud`,`Longitud`,`ID`,`Titulo`,`Anunciante`,`Descripcion`,`Reformado`,`Telefonos`,`Tipo`,`Precio`,`Precio_x_metro`,`Direccion`,`Provincia`,`Ciudad`,`Metros_cuadrados`,`Habitaciones`,`Baños`,`Parking`,`Segunda_mano`,`Armarios_Empotrados`,`Construido_en`,`Amueblado`,`Calefaccion_individual`,`Certificacion_energética`,`Planta`,`Exterior`,`Interior`,`Ascensor`,`Fecha`,`Calle`,`Barrio`,`Distrito`,`Terraza`,`Trastero`,`Cocina_Equipada`,`Cocina_equipada_2`,`Aire_acondicionado`,`Piscina`,`Jardín`,`Metros_cuadrados_útiles`,`Apto_personas_movilidad_reducida`,`Plantas`,`Mascotas`,`Balcón`) VALUES (?)";
    connection.query(insertQuery, [csvData], (err, result) => {
      if(err) throw err  
      callback(result);
    })
}

function read(connection, callback){
    let selectQuery = "SELECT * FROM `enavas`.`resources`";
    connection.query(selectQuery, (err, result) => {
      if(err) throw err  
      callback(result);
    })
}

function readPrice(connection, precio, habitaciones, callback){
    let selectQuery = "SELECT * FROM `enavas`.`resources` where Habitaciones = " + habitaciones + " and Precio >= " + precio;
    connection.query(selectQuery, (err, result) => {
      if(err) throw err  
      callback(result);
    })
}

function readCoordenadas(connection, id, callback){
    let selectQuery = "SELECT (acos(sin(radians(Latitud)) * sin(radians(Longitud)) + cos(radians(Latitud)) * cos(radians(Longitud)) * cos(radians(Latitud) - radians(Longitud))) * 6371) / 100 as distancia FROM `enavas`.`resources` where resources_id = " + id;
    connection.query(selectQuery, (err, result) => {
      if(err) throw err  
      callback(result);
    })
}

module.exports = { insert, read, readPrice, readCoordenadas }