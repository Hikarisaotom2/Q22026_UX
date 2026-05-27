const express = require('express');

const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log('Ahora si, el servidor esta activo en el puerto 3000');
});

// console.log('Esta linea se ejecuta luego del app.listen');