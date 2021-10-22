const router = require("express").Router();
const ciudadesyLugaresController = require('../controllers/ciudades');

router.post('/agregarCiudadesyLugares',ciudadesyLugaresController.postAgregarCiudadesyLugares)
router.get('/obtenerCiudadesyLugares',ciudadesyLugaresController.getObtenerCiudadesyLugares)
//Borrar los datos
//router.post('/borrarCiudadesyLugares',ciudadesyLugaresController.postBorrarCiudadesyLugares)

module.exports = router