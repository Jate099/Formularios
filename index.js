var express = require('express');
var render = require('express-handlebars');

var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', render());
app.set('view engine', 'handlebars');

const fs = require('fs');

localStorage.setItem('variable', 'hola');

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