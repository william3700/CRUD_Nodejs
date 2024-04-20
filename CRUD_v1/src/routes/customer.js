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

module.exports=router;