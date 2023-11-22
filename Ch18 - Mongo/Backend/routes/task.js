const express = require('express');
const router = express.Router();
const {validarJWT} = require('../middlewares/validar-token');
const {listarUsuarios, crearTask} = require('../controllers/task');

router.use(validarJWT);

router.get('/', listarUsuarios);
router.post('/', crearTask);
//router.put('/:id', actualizarTask);
//router.delete('/:id', eliminarTask);

module.exports = router;
