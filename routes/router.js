const exp = require('express');
const router = exp.Router();
const controladorProducto = require('../src/controllers/producto.controller')
const controladorVendedor = require('../src/controllers/vendedor.controller')

router.get('/crearProductos', controladorProducto.crear);
router.get('/listarProductos', controladorProducto.listar);
router.get('/buscarProductos/:x', controladorProducto.buscar);
router.get('/registrarVendedor', controladorVendedor.registrar);
router.get('/listarVendedor', controladorVendedor.listar);
router.get('/buscarVendedor/:x', controladorVendedor.buscar);
router.get('/editarVendedor/:x', controladorVendedor.editar);

module.exports = router