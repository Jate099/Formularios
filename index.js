var express = require('express');
var render = require('express-handlebars');

var app = express();

app.use(express.static('public'));

app.engine('handlebars', render());
app.set('view engine', 'handlebars');

app.get('/', function(request, response){
    var context = {
        titulo: 'pagina principal',
    };

    response.render('home', context);
});

app.post('/login', function(request, response){
    console.log('salu2');
    response.send('salu2');
});

app.listen(3000);