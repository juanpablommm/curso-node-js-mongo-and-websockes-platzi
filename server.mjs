import express from 'express';
import miMiddleware from './middleware.mjs';
//const bodyParse = require('body-parse');
/**anteriormente para trabajar con el body de la peticion debiamos inslar la dependencia
 * de body-parse importarla y psarla como middlewara a express, ahora esto ya no es necesario,
 * dado que express ya trae los middlewares necesarios para trabajar con las peticions y estas.
 */

const app = express();

//app.use(bodyPase); no es necesario

app.use(express.json());
/**ahora para trabajar con el body de la peticion podemos apoyarnos de express.json, este seria
 * el middleware para trabajar con el body, cabe recalcar que los midleware al ser funciones o
 * piezas de codigo que se ejcutaran antes de que el coontrolador resonda, debemo saber que 
 * middleware jecutamos primero, antes que el otro, por ejemplo si vamos a validar sobre
 * el body algo, primero entonces este middleware es el que deberia ser el que le pasemos
 * primero a express
 */

app.use(express.urlencoded({extended: true})) //este middleware lo que ara es poder examinar el
//cuyo body sea de tipo unlencoded cuya cabecera de la peticion sea Content-Type: application/x-www-form-urlencoded
app.use(miMiddleware);

app.get('/', (request, response) => {
    /**obentemos el body de la peticion, pdodiendo leerlo si es un json, o urlencoded, 
     * de acorte de la cabecera Content-Type y la forma que enviemos
     */
    console.log(request.body);
    
    response.send('hello word from get method');
})

app.post('/message', (request, response) => {
    /**ahora si queremos obtner los paramtros que viene por url en la peticion,
     * simplemente basta con que los obtengamos del request
     */
    console.log('parametros por query' + JSON.stringify(request.query));
    response.send('hemos añadido un mensaje para ' + JSON.stringify(request.query));
})

app.delete('/message', (request, response) => {
    response.send('hemos eliminado un mensaje');
});

app.listen(3000);
console.log('la aplicacion esta escuchando en http://localhost:3000');