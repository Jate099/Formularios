var express = require('express');
var render = require('express-handlebars');

var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', render());
app.set('view engine', 'handlebars');

const fs = require('fs');

localStorage.setItem('variable', 'hola');


//crear una coleccion con todos los elementos
[
    {
        "_id": 1,
        "nombre": "camiseta",
        "precio": 2000,
        "descripcion": "lorem",
        "categoria": "ropa",
        "imagenes": ["imagen1.jpg", "imagen2.jpg"],
        "colores": ["rojo", "blanco"],
        "opciones": [
            {
                "nombre": "rojo",
                "imagenes": ["imagen1.jpg", "imagen2.jpg"],
            },

            {
                "nombre": "blanco",
                "imagenes": ["imagen1.jpg", "imagen2.jpg"],
            },
            
        ]
    },

    {
        "_id": 2,
        "nombre": "gorra",
        "precio": 3000,
        "descripcion": "lorem",
        "categoria": "headwear",
        "imagenes": ["imagen1.jpg", "imagen2.jpg"],
        "colores": ["rojo", "blanco"],

    }
]



function cambioVariable(){
    localStorage.setItem('variable', 'adios');
}
window.addEventListener('click', cambioVariable);

var correo = document.querySelector('.correo');

function guadarCorreo(){
    localStorage.setItem('correo', correo.value);
}
correo.addEventListener('input', guadarCorreo);

app.get('/', function(request, response){
    var context = {
        titulo: 'pagina principal',
    };

    response.render('home', context);
});

var cont;
var cont = 0;
app.post('/login', function(request, response){
    console.log(request.body);
    //response.send('salu2');
    
    function archivoEscrito(){
        console.log("el archivo se creo");
    }
    fs.writeFile('login' + cont + '.txt', 'correo: ' + request.body.correo + ' contraseña: ' + request.body.contrasena, 'utf8', archivoEscrito);
    cont++;

    /*fs.readFile('message.txt', 'utf8', function(err, data){
        if(err) throw err;
        console.log(data);
    });*/

    response.redirect('/bienvenida');

});

app.get('/bienvenida', function(request, response){
    var context = {
        titulo: 'Bienvenda',
    };

    response.render('bienvenida', context);
});

app.listen(3000);