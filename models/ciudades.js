const mongoose = require('mongoose')

const CiudadesyLugaresSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    pais:{
        type: String,
        required: true
    },
    ciudad:{
        type: String,
        required: true
    },
    lugar:{
        type: String,
        required: true
    },
    atraccion:{
        type: String,
        required: true
    },
    contadorInteres:{
        type: Number,
        required: true
    },
},{collection:'CiudadesLugares'})

module.exports = mongoose.model('CiudadesLugares',CiudadesyLugaresSchema)