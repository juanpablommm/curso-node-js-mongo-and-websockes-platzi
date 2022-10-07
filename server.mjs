import express from 'express';
import miMiddleware from './middleware.mjs';

/**inicializamos express */
const app = express();

/** l metodo use, de express lo usaremos para pasar un middleware que se ejcutara antes de que 
 * nuestro contoroladores responda al cliente, con alguno de los end-points definidos
 */
app.use(miMiddleware);

//method por get
app.get('/', (request, response) => {
    response.send('hello word from get method');
})

app.post('/message', (request, response) => {
    response.send('hemos añadido un mensaje');
})

app.delete('/message', (request, response) => {
    response.send('hemos eliminado un mensaje');
});

/**mencionamos a express por que puerto va a escuchar la aplicacion */
app.listen(3000);
console.log('la aplicacion esta escuchando en http://localhost:3000');