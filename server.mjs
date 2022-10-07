import express from 'express';
import miMiddleware from './middleware.mjs';


const app = express();


app.use(express.json());

app.use(express.urlencoded({extended: true})) 

app.use(miMiddleware);

app.get('/', (request, response) => {
    //obetenemos lo header del request
    console.log(request.headers);
    console.log(request.body);
    //enviamos header en el response
    response.header({
        "custom-header": "mi valor personalizado",
    });
    response.send('hello word from get method');
})

app.post('/message', (request, response) => {
    console.log('parametros por query' + JSON.stringify(request.query));
    response.send('hemos añadido un mensaje para ' + JSON.stringify(request.query));
})

app.delete('/message', (request, response) => {
    response.send('hemos eliminado un mensaje');
});

app.listen(3000);
console.log('la aplicacion esta escuchando en http://localhost:3000');