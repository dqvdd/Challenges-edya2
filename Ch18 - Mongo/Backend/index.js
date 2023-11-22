//console.log('Hello world! c:')
//import {...} from '...' // Frontend
const express = require("express");
require('dotenv').config();
const { dbConnection } = require('./database/config');
//const bodyParser = require('body-parser');
const cors = require('cors');

//Crear app
const app = express();

//Base de Datos
dbConnection();

//CORS
app.use(cors());

app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/task', require('./routes/task'));

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log("Servidor escuchando en puerto http://localhost:" + process.env.PORT +"/");
});