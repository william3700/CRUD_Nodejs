//Importación del módulo express
const express = require('express')
const path = require('path')
const morgan=require('morgan');
const mysql=require('mysql');
const myConnection=require('express-myconnection');

//Guardar el módulo en una constante
const app = express();

//importando rutas
const customerRoutes=require('./routes/customer');


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port:3307,
    database:'crudnodejs'
},'single'));

app.use(express.urlencoded({extended:false}));
app.use('/',customerRoutes);

//archivos estáticos

app.use(express.static(path.join(__dirname,'public')));

//Configuración de puerto del servidor
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
//Configuración de puerto del servidor
//app.listen(3000, () => {
//  console.log(`Servidor por el puerto 3000`)
//})

