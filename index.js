var express = require('express');
var app = express();
var renderMotor = require ('express-handlebars');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'handlebars');
app.engine('handlebars', renderMotor());

var contador = 0;
var cont = 0;
var fs = require ('fs');
var productos = [];
productos.push({ 
  titulo: 'Perro',
  precio: '20000',
  imagen: "",
  descripcion: '',
}

);
productos.push({
  titulo: 'Gato',
  precio: '19220',
  imagen: "",
  descripcion: '',
});
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/home.html');
});

app.get('/tienda', function(req,res){
  var contexto = {
    titulo: 'Productos',
    nombres: [
      'Alejandro',
      'Valeria',
      'sebastián'
    ],
    listaProductos: productos,
  };
    res.render('lista-productos', contexto);
    contador ++;
});
app.post('/login', function(req,res){
  console.log(req.body);
  fs.writeFile('nombre'+cont+'.txt', 'daticos:' + correo + 'contraseña'+ contrasena, 'utf8', function(){
console.log('guardado');

  });
  cont++;
  res.redirect('/bienvenida');

});



app.get('/tienda/:producto', function(req,res){
  var contexto= null;
  productos.forEach(function(producto){

    if(producto.titulo == req.params.producto){
      contexto = producto;
    }
  });
  console.log(req.params.producto);
  if(contexto == null){
    res.send('No encontré ningún producto con el nomre' + releaseEvents.params.producto);
  }else{
    res.render('producto',contexto);
  }
  
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