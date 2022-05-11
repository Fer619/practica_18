let express= require('express'); // inyección de la dependencia de express

let app= express(); // app hace la función del servidor para esta práctica

let personsRoute= require('./routes/person'); //se agrega el router ubicandolo en la carpeta routes en el archivo person

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public'));

let PORT = process.env.PORT || 3000;  // se define el puerto de escucha para el servidor que vamos a levantar

app.listen(PORT,()=> {
    console.log('escuchando en el puerto 3000')
});




