var express = require('express');
var render = require('express-handlebars');

var app = express();

app.use(express.static('public'));

app.engine('handlebars', render());
app.set('vew engine', 'handlebars');



app.listen(3000);