const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded());

app.listen(port,()=>{
    console.log('Ahora si, el servidor esta activo en el puerto 3000');
});

// console.log('Esta linea se ejecuta luego del app.listen');

/*
Metodos HTTP. 
    CRUD 
    C -> Post
    R -> Get 
    U -> Put
    D -> Delete 

    -> HTTP STATUS CODES 
        -> 200: exito 
        -> 400: Error de lado del cliente 
        -> 500: Error del lado del servidor 


  -> Reglas.....
   -> Comunicacion : cliente (FE) y Servidor (BE)
    ->BE tiene el control absoluto
        a) Establecer como se realizan las peticiones
        b) Establece como nos va a responder
        c) Establecer a quien le responde 
        d) Establecer que va a responder 
        e) BE es quiend etermina que se considera o no un error

    -> Termino importantes: 
        - Endpoint: la combinación de una ruta y un metodo HTTP
        - Ruta: direccion a la cual se envian solicitudes al BE 
        - Payload: informaion que se envia junto a la solicitud 
        - Callback: un fragmento de codigo que se ejecuta al final de un procfeso async 
*/

app.get ('/saludar',(req,res)=>{

    console.log('Solicitud get a /saludar')
    const informacion = req.body;
    informacion.nombre
    // console.log(req)
    res.status(200).send({
        mensaje: 'Hola mundo!',
        informacion: 'Este mensaje viene desde BE!!!!'
    });
});



app.get ('/saludar/:mensaje',(req,res)=>{
    const msj = req.params.mensaje;
    const sender = req.params.remitente;
    console.log(msj)
    res.status(200).send({
        mensaje: 'Mensaje recibido! ',
        informacion: 'Este mensaje viene desde BE!!!!'
    });
});