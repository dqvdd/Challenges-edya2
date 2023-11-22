const express = require('express');
const { validationResult } = require('express-validator');


const crearUsuario = (req, res = express.response) => {
    const { name, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    res.status(200).json({
        ok: true,
        name,
        email,
        password
    });
};



const loginUsuario = (req, res = express.response) => {
    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    res.status(200).json({
        ok: '¡¡¡¡¡¡Login Success!!!!!',
        email,
        password
    })

}  

const revalidarToken = (req, res = express.response) => {
    res.json({
        ok: 'revalidar token'
    })

}

//export const  // Frontend

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}   // Backend
