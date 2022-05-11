let express = require ('express'); //inyección de la dependencia express
const res = require('express/lib/response');
const { get } = require('express/lib/response');
let router = express.Router(); // instalación del router donde se realizara las actividades de la practica

router.get('/person', (req,res)=> {
    res.send('has solicitado el listado de personas');
})

module.exports= router;