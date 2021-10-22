const CiudadesyLugares = require('../models/ciudades')
const mongoose = require("mongoose")

exports.postAgregarCiudadesyLugares = async (req,res)=>{
    const CiudadLugar = new CiudadesyLugares(req.body)
    CiudadLugar._id = new mongoose.Types.ObjectId()

    try{
        const ExisteCiudad = await CiudadesyLugares.exists({ciudad: req.body.ciudad, lugar: req.body.lugar})
        await CiudadLugar.save()
        if(CiudadesyLugares.exists({ciudad: req.body.ciudad})){
            await CiudadesyLugares.updateMany({ciudad: req.body.ciudad},{$inc:{contadorInteres:1}})
            const city = await CiudadesyLugares.findOne({ciudad: req.body.ciudad})
            await CiudadesyLugares.findByIdAndUpdate(CiudadLugar._id,{contadorInteres: city.contadorInteres})
            console.log("Ciudad agregada")
            res.send({operacion:"Contador de interes registrado"})
        }else if(CiudadesyLugares.exists({lugar: req.body.lugar})){
            await CiudadesyLugares.updateMany({lugar: req.body.lugar},{$inc:{contadorInteres:1}})
            const place = await CiudadesyLugares.findOne({lugar: req.body.lugar})
            await CiudadesyLugares.findByIdAndUpdate(CiudadLugar._id,{contadorInteres: place.contadorInteres})
            console.log("Ciudad agregada")
            res.send({operacion:"Contador de interes registrado"})
        }else{
            await CiudadLugar.save()
            console.log(CiudadLugar)
            console.log("Registrado")
            res.send({operacion:"Agregado Correctamente"})
        }
    }catch(err){
        console.log(err)
        res.send({operacion:"No se agrego correctamente"})
    }
}

exports.getObtenerCiudadesyLugares = async (req,res)=>{
    const encontrarCYL = await CiudadesyLugares.find(req.body.pais)
    console.log(encontrarCYL)
    res.json(encontrarCYL)
}

/*
exports.postBorrarCiudadesyLugares = async (req,res)=>{
    await CiudadesyLugares.findByIdAndRemove(req.body)
    console.log("Ciudad/Lugar eliminado")
    res.json({operacion: "correcta"})
} */
