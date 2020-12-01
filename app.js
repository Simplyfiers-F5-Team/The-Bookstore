var express = require('express'); //servidor web de node
var exphbs  = require('express-handlebars'); //modulo de express para usar handlebars
 
var app = express(); //creamos objeto express en el servidor web
 
//los ficheros .handlebars los tratamos con handlebars, configurado para q los parciales estén en views
app.engine('handlebars', exphbs({partialsDir: __dirname + '/views/partials/'})); 
app.set('view engine', 'handlebars'); //los handlebars se renderizan a visualizar


//home busca un main en layout
app.get('/bookList', function (req, res) {                   //cada vez q se llame al razi del servidor, se renderice el home con esos datos
    res.render('home', {books:["Libro1","Libro2"]});
});
 
app.get("/", function (req, res){
    res.send("estás en el raiz de The Bookstore");
}
)

app.listen(3000);