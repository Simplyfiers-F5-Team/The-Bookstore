var express = require('express'); //servidor web de node
var exphbs  = require('express-handlebars'); //modulo de express para usar handlebars


const data = require('./data/books.json'); //Para cargar datos que vamos a cargar le pasamos el json con el objeto
const cds = require("./data/cd.json");

var app = express(); //creamos objeto express en el servidor web
 
//los ficheros .handlebars los tratamos con handlebars, configurado para q los parciales estén en views
app.engine('handlebars', exphbs({partialsDir: __dirname + '/views/partials/'})); 
app.set('view engine', 'handlebars'); //los handlebars se renderizan a visualizar


//home busca un main en layout
app.get('/bookList', function (req, res) {                   //cada vez q se llame al razi del servidor, se renderice el home con esos datos
    res.render('home', data);
});
 
app.get("/cdList", function (req, res){
    res.render('home', {datos:{libros: data, cedes: cds}});
});

app.listen(3000); 