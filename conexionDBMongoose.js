const mongoose = require('mongoose')
//usuario:password@IP:puerto/bd_nombre?authSource=db_usuarios
mongoose.connect('mongodb://user3:root@18.234.222.26/a01748625?authSource=admin')
.then(()=>console.log("Conexion exitosa"))
.catch(err=>console.log(err))

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
