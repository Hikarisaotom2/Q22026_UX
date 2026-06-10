const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://claseux2025:Password123@uxq22026.hulqnd0.mongodb.net/?appName=uxq22026";

const app = express();
const port = 3001;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


app.use(bodyParser.urlencoded());
app.use(cors());


app.listen(port,async ()=>{
    console.log('Ahora si, el servidor esta activo en el puerto 3000');

    await client.connect();
    // Send a ping to confirm a successful connection
    client.db("netflixUx").command({ ping: 1 }).then(()=>{
        console.log('Conectados a la BD!!!!')
    })
});

// console.log('Esta linea se ejecuta luego del app.listen');


app.post('/crearSerie',async (req,res)=>{
    try{
        const document = {
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                textoAction1: req.body.textoAction1,
                textoAction2: req.body.textoAction2,
                url: req.body.url
        }
        const respuesta = await client.db("netflixUx").collection('series').insertOne(document)
        res.status(201).send(
            {
                msj: 'Elemento creado exitosamente!',
                respuestaMongo: respuesta
            }
        );
    }catch(e){
     res.status(500).send({
        msj: 'No se pudo guaradar el registro :( ',
        error: e
     })
    }
});

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


app.get ('/getSeries',(req,res)=>{
   
    res.status(200).send({
        series: [
            {
                titulo: 'ux desde BE: One piece',
                descripcion: 'Piratas',
                textoAction1: 'like',
                textoAction2: 'sus',
                url: "https://m.media-amazon.com/images/S/pv-target-images/a0cb3885c44b8305ac89ba7ce98e8cd978bf3ebba6a151a00dbf2d528e98bf3b.jpg"
            },
            {
                titulo: 'Vinlad Saga',
                descripcion: 'Vikingos',
                textoAction1: 'like',
                textoAction2: 'sus',
                url: "https://m.media-amazon.com/images/S/pv-target-images/a0cb3885c44b8305ac89ba7ce98e8cd978bf3ebba6a151a00dbf2d528e98bf3b.jpg"
            },
             {
                titulo: 'Tiktok',
                descripcion: 'videos cortos...',
                textoAction1: 'like',
                textoAction2: 'sus',
                url: "https://m.media-amazon.com/images/S/pv-target-images/a0cb3885c44b8305ac89ba7ce98e8cd978bf3ebba6a151a00dbf2d528e98bf3b.jpg"
            },
                {
                titulo: 'Tiktok',
                descripcion: 'videos cortos...',
                textoAction1: 'like',
                textoAction2: 'sus',
                url: "https://m.media-amazon.com/images/S/pv-target-images/a0cb3885c44b8305ac89ba7ce98e8cd978bf3ebba6a151a00dbf2d528e98bf3b.jpg"
            }
        ],
    });
});

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
