# Coordenadas CSV
Proyecto de Coordenadas por ingreso de un Archivo CSV a MySQL

El Proyecto esta Realizado en NodeJs con Express, el cual se divide en la parte de Cliente - Servidor con La Base de Datos, esta realizado e inspirado por esta fuente con la diferencia que el Ambiente de Base de Datos es sobre una Relaciona con MySQL y no la que sugiere con MongoDB que es no Relacional, este es el enlace de la Fuente en Respuesta con este Proyecto: [NodeJs Interview Test](https://github.com/leangasoftware/node-interview).

## `Cliente - Servidor`

El proyecto se instancia las direcciones APIs desde el Archivo `index.js`, el cual contiene toda la parte Frontend del Proyecto con HTML estatico y sus Modulos en JavaScript usando Express de NodeJs.

Basado en:

* Usabilidad
* SEO
* Modularidad
* Reutilización

**Este proyecto se manejo con el Framework de Estilos en Bootstrap solo referencia al HTML estatico**

**Compartiendo tecnologia basado en QueryString, QueryParams y Routes**

## `Servidor`

El proyecto esta alojado en la archivo .js `server`, el cual contiene toda la parte Frontend del Proyecto el cual esta en NodeJs con Express.

### `server.js`

### Scripts para levantar el Proyecto del Cliente

Este proyecto se instalo las dependencias de nodemon para ejecutarlo con live action se inicia con este comando:

### `npm install -g nodemon`

Y para inciar el Priyecto se corre este comando:

### `nodemon server.js`

**El cual se ejecuta en el Puerto `3000`**

### Informaciòn sobre la contruccion de los API

Se genero en base a la lectura de un archivo `resource_accommodation.csv` mismo mencionado en [NodeJs Interview Test](https://github.com/leangasoftware/node-interview). el cual almacenamos la informacion JSON en Express creando asi nuestra propia libreria de Servicios e ingresandolo en nuestra base de datos en MySQL

Este proyecto se instalo las dependencias de mysql para la conexion a la base de datos y la lectura csv que se utilizara con la funcion createReadStream y son:

### `npm install -g mysql csv dotenv`

**Como adicional se incluyo la dependencia "dotnet" para la lectura y utilizacion de variables de entorno para su reutilizacion en todo el proyecto**

Las rutas de las APIs, el cuales consta de este formato en QueryString:

- Lectura del Archivo CSV e Ingreso de la informacion a la Base de Datos.
### `/import`

- Consulta de la informacion extraida del Archivo CSV de la Base de Datos.
### `/read`

- Consulta por el Precio y Habitaciones mostrando el Precio Mayor.
### `/precio/:precio/:habitaciones`

- Consulta de las Coordenadas de Latitud y Longitud en Kilometros cuadrados por Id.
### `/coordenadas/:id`

- Vista de la Consulta por el Precio y Habitaciones mostrando el Precio Mayor con Consulta Dinamica en HTML.
### `/view/precio/:precio/:habitaciones`

- Vista de la Consulta de las Coordenadas de Latitud y Longitud en Kilometros cuadrados por Id en HTML.
### `/view/coordenadas/:id`

Asi mismo se incluyo una coleccion de los Servicios en Postman para que se puedan consultar

### `Coordenadas-csv.postman_collection`

## `Base de Datos`

El proyecto esta alojado en una Base de Datos local en MySQL, asi mismo se deja a continuacion el Script usado para el Almacenamiento de los datos del Archivo CSV.

- Script para el almacenamiento de datos en la Base de datos simulando una tabla no relacional:

```sh
CREATE TABLE IF NOT EXISTS `enavas`.resources (
    resources_id INT AUTO_INCREMENT,
    Latitud VARCHAR(255) NULL,
	Longitud VARCHAR(255) NULL,
	ID VARCHAR(255) NULL,
	Titulo VARCHAR(255) NULL,
	Anunciante VARCHAR(255) NULL,
	Descripcion TEXT NULL,
	Reformado VARCHAR(255) NULL,
	Telefonos VARCHAR(255) NULL,
	Tipo VARCHAR(255) NULL,
	Precio VARCHAR(255) NULL,
	Precio_x_metro VARCHAR(255) NULL,
	Direccion TEXT NULL,
	Provincia VARCHAR(255) NULL,
	Ciudad VARCHAR(255) NULL,
	Metros_cuadrados VARCHAR(255) NULL,
	Habitaciones VARCHAR(255) NULL,
	Baños VARCHAR(255) NULL,
	Parking VARCHAR(255) NULL,
	Segunda_mano VARCHAR(255) NULL,
	Armarios_Empotrados VARCHAR(255) NULL,
	Construido_en VARCHAR(255) NULL,
	Amueblado VARCHAR(255) NULL,
	Calefaccion_individual VARCHAR(255) NULL,
	Certificacion_energética VARCHAR(255) NULL,
	Planta VARCHAR(255) NULL,
	Exterior VARCHAR(255) NULL,
	Interior VARCHAR(255) NULL,
	Ascensor VARCHAR(255) NULL,
	Fecha VARCHAR(255) NULL,
	Calle VARCHAR(255) NULL,
	Barrio VARCHAR(255) NULL,
	Distrito VARCHAR(255) NULL,
	Terraza VARCHAR(255) NULL,
	Trastero VARCHAR(255) NULL,
	Cocina_Equipada VARCHAR(255) NULL,
	Cocina_equipada_2 VARCHAR(255) NULL,
	Aire_acondicionado VARCHAR(255) NULL,
	Piscina VARCHAR(255) NULL,
	Jardín VARCHAR(255) NULL,
	Metros_cuadrados_útiles VARCHAR(255) NULL,
	Apto_personas_movilidad_reducida VARCHAR(255) NULL,
	Plantas VARCHAR(255) NULL,
	Mascotas VARCHAR(255) NULL,
	Balcón VARCHAR(255) NULL,
    PRIMARY KEY (resources_id)
);
```

Asi mismo el Script esta en archivo .sql llamado `create-table-resources-csv.sql`.

Todo esto contempla el Proyecto en respuesta a la fuente [NodeJs Interview Test](https://github.com/leangasoftware/node-interview).
