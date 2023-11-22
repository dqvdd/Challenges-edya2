const express = require('express');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');


const crearUsuario = async (req, res = express.response) => {
    const { name, email, password } = req.body;

    try{

        
        let usuario = await Usuario.findOne({ email:email });
        if(usuario){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            });
        }

        usuario = new Usuario(req.body);
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);
        await usuario.save();

        res.status(200).json({
            ok: true,
            usuario
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor'
        });
    }
}



const loginUsuario = async(req, res = express.response) => {
    const { email, password } = req.body;
    
    try{
        let usuario = await Usuario.findOne({ email:email });
        if(!usuario){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
        }

        const PasswordValid = bcrypt.compareSync(password, usuario.password);
        if(!PasswordValid){
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        const token = await( generarJWT(usuario.id, usuario.name))

        res.status(200).json({
            ok: true,
            usuario,
            token
        });
    }  catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor'
        });
    }
}

const revalidarToken = async (req, res = express.response) => {
    const {uid, name} = req;

    const token = await( generarJWT(uid, name))

    res.json({
        ok: 'revalidar token',
        token
    })

}

//export const  // Frontend

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}   // Backend
