const express=require('express');
const router=express.Router();

const customerController=require('../controllers/customerController');

router.get('/',customerController.list);
router.post('/add',customerController.save);
router.get('/delete/:id',customerController.delete);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);

router.get('/productos',customerController.listaProductos);
router.post('/addProduct',customerController.saveProducto);
router.get('/updateProductos/:id', customerController.editarProductos);
router.post('/updateProductos/:id', customerController.updateProductos);
router.get('/deleteProductos/:id',customerController.deleteProductos);

router.get('/calculadoraIMC',customerController.inicioIMC);
router.post('/addProductIMC',customerController.saveIMC);
router.get('/editarIMC/:id', customerController.editarIMC);
router.post('/editarIMC/:id', customerController.updatesIMC);
router.get('/deleteIMC/:id',customerController.deleteIMC);
module.exports=router;