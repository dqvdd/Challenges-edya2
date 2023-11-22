//console.log('Hello world! c:')
//import {...} from '...' // Frontend
const express = require("express");
require('dotenv').config();
const bodyParser = require('body-parser');

//Crear app
const app = express();

//Rutas
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/auth', require('./routes/auth'));

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log("Servidor escuchando en puerto http://localhost:" + process.env.PORT +"/");
});