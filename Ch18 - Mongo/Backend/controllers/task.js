const express = require('express');
const Usuario = require('../models/Usuario');


const crearTask = async (req, res = express.response) => {
    const task = new Task(req.body);

    try {
        task.user = req.uid;
        const saved = await task.save();

        res.json({
            ok: true,
            task: saved
        });
    }catch (e) {
        console.log(e);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
}

const listarUsuarios = async (req, res = express.response) => {
    const usuarios = await Usuario.find().populate('tareas', 'title');

    try {
        res.status(200).json({
            ok: true,
            usuarios
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor'
        });
    }

}

module.exports = {crearTask, listarUsuarios};