var express = require('express');
var app = express();
var renderMotor = require ('express-handlebars');
app.use(express.static('public'));
app.set('view engine', 'handlebars');
app.engine('handlebars', renderMotor());

var contador = 0;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/home.html');
});

app.get('/tienda', function(req,res){
    res.send('Tienda funciona');
    contador ++;
});
app.get('/tienda/perro', function(req,res){
  var contexto= { 
    titulo: 'Perro',
    precio: '20000',
    imagen: "",
    descripcion: '',
  };
  res.render('producto',contexto);
});
app.get('/tienda/gato', function(req,res){
  var contexto= {
    titulo: 'Gato',
    precio: '19220',
    imagen: "",
    descripcion: '',
  };
  res.render('producto',contexto);
});
app.get('/contacto', function(req,res){
    res.send('conoceme');
});

app.get('/sobre-mi', function(req,res){
    res.send('Conoceme mejor');
});

app.get('/portafolio', function(req,res){
    res.send('Estos son mis trabajos');
});


app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});