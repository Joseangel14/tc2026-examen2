const express = require("express")
const mongoose = require("mongoose")
const ciudadesyLugaresRoutes = require("./routes/ciudades")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/ciudades",ciudadesyLugaresRoutes)

mongoose.connect('mongodb://user3:root@18.234.222.26/base3?authSource=admin')
.then(()=>{
    app.listen(8082,()=>console.log("Servidor online en puerto 8082\n"))
})
.catch(err=>console.log(err))